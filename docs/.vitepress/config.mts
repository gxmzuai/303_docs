import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "303实验室文档",
  description: "Wordpress、Alist等程序的简单说明",
  lastUpdated: true,
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/about' }
    ],

    sidebar: [
      {
        text: '简单说明',
        items: [
          { text: '关于本站', link: '/about' },
        ]
      },
      {
        text: '1Panel',
        items: [
          { text: '简单介绍', link: '/1panel/index' },
        ]
      },
      {
        text: 'Wordpress',
        items: [
          { text: '简单介绍', link: '/wordpress/index' },
          { text: '安全措施', link : '/wordpress/security'}
        ]
      },
      {
        text: 'Alist',
        items: [
          { text: '简单介绍', link: '/alist/index' },
          { text: '相关信息', link: '/alist/info'}
        ]
      },
      {
        text: 'Others',
        items: [
          { text: '站点备份', link: '/others/backup' },
          { text: '站点迁移', link: '/others/migration' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/gxmzuai/303_docs' }
    ],

    editLink: {
      pattern: 'https://github.com/gxmzuai/303_docs/edit/main/docs/:path'
    }
  }
})
