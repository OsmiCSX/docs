const dotenv = require('dotenv').config()

const headers = require('./config/head')
const plugins = require('./config/plugins')

module.exports = {
  title: 'OsmiCSX',
  description: "Tailwind CSS on React Native",
  head: headers,
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
      '/page/get-started',
    ],
    repo: process.env.CFG_REPO,
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    smoothScroll: false,
    lastUpdated: 'Last Updated',
    feed: {
      canonical_base: process.env.CFG_DOMAIN
    }
  },
  extendMarkdown: md => {
    // use more markdown-it plugins!
    md.use(require('markdown-it-mark'))
  },
  plugins: plugins,
}
