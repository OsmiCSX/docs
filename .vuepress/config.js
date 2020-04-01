const dotenv = require('dotenv').config()

const headers = require('./config/head')
const plugins = require('./config/plugins')

module.exports = {
  title: 'OsmiCSX',
  description: "An utility style framework for React Native",
  head: headers,
  base: '/docs/',
  themeConfig: {
    logo: '/logo-small.png',
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
      '/page/osmi-provider',
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
    lastUpdated: 'Last Updated',
    algolia: {
      appId: 'FPCS8RXJD3',
      apiKey: '3fadf181c86158520bc0be2b37b1533a',
      indexName: 'prod_OSMICSX'
    }
  },
  extendMarkdown: md => {
    // use more markdown-it plugins!
    md.use(require('markdown-it-mark'))
  },
  plugins: plugins,
}
