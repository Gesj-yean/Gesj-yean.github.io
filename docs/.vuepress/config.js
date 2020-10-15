module.exports = {
  title: 'Gesj',
  description: 'Just playing around',
  head: [
    ['link', { rel: 'shortcut icon', type: "image/x-icon", href: "/favicon.ico" }]
  ],
  themeConfig: {
    lastUpdated: 'Last Updated', // string | boolean
    logo: '/logo.png',
    nav: [
      { text: '首页', link: '/', icon: 'el-icon-house' },
      { text: '笔记', link: '/record/', icon: 'el-icon-collection' },
      { text: '读书', link: '/read/', icon: 'el-icon-collection-tag' },
      { text: '项目Mark', link: '/project/', icon: 'el-icon-ship' },
      { text: '吧啦吧啦', link: '/other/', icon: 'el-icon-smoking' },
      {
        text: '站点',
        ariaLabel: 'Language Menu',
        icon: 'el-icon-location-information',
        items: [
          { text: '掘金', link: 'https://juejin.im/user/2189882895384221' },
          { text: 'GitHub', link: 'https://github.com/Gesj-yean' }
        ]
      }
    ],
    sidebar: 'auto'
  },
  configureWebpack: {
    resolve: {
      alias: {
        // '@alias': 'path/to/some/dir'
      }
    }
  }
}