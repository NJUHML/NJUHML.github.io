import { mkdir, readdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.resolve(__dirname, '..')
const newsImagesDir = path.join(repoRoot, 'docs', '.vuepress', 'public', 'news_images')
const outputDir = path.join(repoRoot, 'docs', '.vuepress', 'generated')
const latestOutputFile = path.join(outputDir, 'latestNewsImages.js')
const allOutputFile = path.join(outputDir, 'allNewsImages.js')
const supportedExtensions = new Set(['.webp', '.jpg', '.jpeg', '.png', '.gif'])

const parseDateFromFilename = (name) => {
  const basename = path.basename(name, path.extname(name))
  const matches = basename.match(/(20\d{2})[-_.]?(\d{1,2})[-_.]?(\d{1,2})/)

  if (!matches) {
    return null
  }

  const [, yearText, monthText, dayText] = matches
  const year = Number(yearText)
  const month = Number(monthText)
  const day = Number(dayText)

  if (month < 1 || month > 12 || day < 1 || day > 31) {
    return null
  }

  const parsed = Date.UTC(year, month - 1, day)

  return Number.isNaN(parsed) ? null : parsed
}

const buildModule = (images) => {
  const lines = images.map((image) => `  ${JSON.stringify(image)}`)
  return `export default [\n${lines.join(',\n')}\n]\n`
}

const run = async () => {
  let dirEntries = []

  try {
    dirEntries = await readdir(newsImagesDir, { withFileTypes: true })
  } catch {
    await mkdir(outputDir, { recursive: true })
    await writeFile(latestOutputFile, buildModule([]), 'utf8')
    await writeFile(allOutputFile, buildModule([]), 'utf8')
    return
  }

  const imageFiles = await Promise.all(
    dirEntries
      .filter((entry) => entry.isFile())
      .filter((entry) => supportedExtensions.has(path.extname(entry.name).toLowerCase()))
      .map(async (entry) => ({
          dateFromName: parseDateFromFilename(entry.name),
          name: entry.name,
          url: `/news_images/${entry.name}`,
        }))
  )

  const sortedImages = imageFiles
    .sort((left, right) => {
      if (left.dateFromName !== null || right.dateFromName !== null) {
        if (left.dateFromName === null) {
          return 1
        }

        if (right.dateFromName === null) {
          return -1
        }

        if (right.dateFromName !== left.dateFromName) {
          return right.dateFromName - left.dateFromName
        }
      }

      return right.name.localeCompare(left.name, undefined, { numeric: true })
    })

  const latestImages = sortedImages
    .slice(0, 2)
    .map((image) => image.url)

  const allImages = sortedImages.map((image) => image.url)

  await mkdir(outputDir, { recursive: true })
  await writeFile(latestOutputFile, buildModule(latestImages), 'utf8')
  await writeFile(allOutputFile, buildModule(allImages), 'utf8')
}

await run()
