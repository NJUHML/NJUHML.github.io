import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { markdownImagePlugin } from '@vuepress/plugin-markdown-image'
import { markdownIncludePlugin } from '@vuepress/plugin-markdown-include'
import { markdownStylizePlugin } from '@vuepress/plugin-markdown-stylize'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'

export default defineUserConfig({
  head: [['link', { rel: 'icon', href: '/hero_images/hero.png' }]],
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'NJUHML',
      description: '水文气象研究组',
    },
    '/en/': {
      lang: 'en-US',
      title: 'NJUHML',
      description: 'Hydrometeorology Research Group',
    },
  },

  theme: defaultTheme({
    logo: '/hero_images/hero.png',
    locales: {
      '/': {
        selectLanguageText: '选择语言',
        selectLanguageName: '简体中文',
        navbar: [
          '/',
          {
            text: '成员',
            link: '/member/',
          },
          {
            text: '论著',
            link: '/publish/publish',
          },
          {
            text: '新闻动态',
            link: '/news/',
          },
          {
            text: '加入我们',
            link: '/us/',
          },
        ],
        sidebar: {
          '/publish/': [
            '/publish/publish.md',
            '/publish/award.md',
            '/publish/patent.md',
            '/publish/books.md',
            '/publish/web.md',
          ],
          '/member/': false,
          '/news/': false,
          '/us/': false,
        },
      },
      '/en/': {
        selectLanguageText: 'Languages',
        selectLanguageName: 'English',
        navbar: [
          '/en/',
          {
            text: 'People',
            link: '/en/member/',
          },
          {
            text: 'Publications',
            link: '/en/publish/publish',
          },
          {
            text: 'News',
            link: '/en/news/',
          },
          {
            text: 'Join Us',
            link: '/en/us/',
          },
        ],
        sidebar: {
          '/en/publish/': [
            '/en/publish/publish.md',
            '/en/publish/award.md',
            '/en/publish/patent.md',
            '/en/publish/books.md',
            '/en/publish/web.md',
          ],
          '/en/member/': false,
          '/en/news/': false,
          '/en/us/': false,
        },
        notFound: ['Page not found'],
        backToHome: 'Back to home',
        openInNewWindow: 'Open in new window',
        toggleColorMode: 'Toggle color mode',
        toggleSidebar: 'Toggle sidebar',
      },
    },
  }),

  plugins: [
    markdownImagePlugin({
      // 启用 figure
      figure: false,
      // 启用图片懒加载
      lazyload: true,
      // 启用图片标记
      mark: true,
      // 启用图片大小
      size: true,
    }),
    
    markdownIncludePlugin({
      // 选项
    }),

    markdownStylizePlugin({
      attrs: true,
      // 配置项
    }),

    googleAnalyticsPlugin({
      id: 'G-WZC5475EGS'
    })
  ],

  bundler: viteBundler(),
})
