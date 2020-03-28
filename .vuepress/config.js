const dotenv = require('dotenv').config()

const headers = require('./config/head')
const plugins = require('./config/plugins')

module.exports = {
  title: 'OsmiCSX',
  description: "An utility style framework for React Native",
  head: headers,
  base: '/docs/',
  themeConfig: {
    domain: process.env.CFG_DOMAIN,
    displayAllHeaders: true,
    nav: [{
        text: 'Home',
        link: '/'
      }
    ],
    sidebar: [
      '/',
      '/page/introduction',
      '/page/get-started',
      '/page/release-notes',
      '/page/core',
      '/page/layout',
      '/page/flexbox',
      '/page/spacing',
      '/page/typography',
      '/page/background',
      '/page/borders',
      '/page/effects',
      '/page/transforms'
    ],
    repo: process.env.CFG_REPO,
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    smoothScroll: false,
    lastUpdated: 'Last Updated'
  },
  extendMarkdown: md => {
    // use more markdown-it plugins!
    md.use(require('markdown-it-mark'))
  },
  plugins: plugins,
}
