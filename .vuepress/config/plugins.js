const plugins = [
  'code-switcher',
  'vuepress-plugin-nprogress',
  'reading-progress',
  'vuepress-plugin-reading-time',
  [
    'vuepress-plugin-medium-zoom', {
      selector: '.content__default img:not(.no-zoom)'
    }
  ],
  [
    '@vuepress/google-analytics',
      {
        'ga': 'UA-79152971-2'
      }
  ]
]

if (process.env.NODE_ENV === "production") {
  plugins.push([ 'sitemap', {
    hostname: 'https://osmicsx.github.io'
  }])
}

module.exports = plugins