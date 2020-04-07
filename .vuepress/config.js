const dotenv = require('dotenv').config()

const versioning = require('./config/versioning')
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
        text: 'Version',
        items: versioning.linksFor('get-started.md')
      }
    ],
    sidebar: versioning.sidebars,
    versions: {
      latest: versioning.versions.latest,
      selected: versioning.versions.latest,
      all: versioning.versions.all
    },
    repo: process.env.CFG_REPO,
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
