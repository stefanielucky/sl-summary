import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "stefanie-lucky summary",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'js', link: '/js/grammar' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'js',
        items: [
          { text: 'grammar', link: '/js/grammar' },
          { text: 'type', link: '/js/type' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/stefanielucky/sl-summary.git' }
    ]
  }
})
