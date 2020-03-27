const plugins = [
  'code-switcher',
  'vuepress-plugin-nprogress',
  'reading-progress',
  'vuepress-plugin-reading-time',
  [
    'vuepress-plugin-medium-zoom', {
      selector: '.content__default img:not(.no-zoom)'
    }
  ]
]

module.exports = plugins