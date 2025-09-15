import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { markdownImagePlugin } from '@vuepress/plugin-markdown-image'
import { markdownIncludePlugin } from '@vuepress/plugin-markdown-include'
import { markdownStylizePlugin } from '@vuepress/plugin-markdown-stylize'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'

export default defineUserConfig({
  lang: 'zh-CN',
  head: [['link', { rel: 'icon', href: '/hero_images/hero.png' }]],

  title: 'NJUHML',
  description: '水文气象研究组',

  theme: defaultTheme({
    logo: '/hero_images/hero.png',

    sidebar: {
      '/publish/': [
        '/publish/publish.md',
        '/publish/award.md',
        '/publish/patent.md',
        '/publish/books.md',
      ],
      '/member/': false,
      '/news/': false,
      '/us/': false,
    },

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