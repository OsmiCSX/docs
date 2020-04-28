export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  // Select docs version based on url path
  // Example: "/2.6/guides/installation.html" will use "2.6"
  router.afterEach((to, from) => {
    const version = to.path.split('/')[1]

    if (siteData.themeConfig.versions.all.includes(version)) {
      siteData.themeConfig.versions.selected = version

      if (typeof document !== "undefined") {
        let customStyle = document.getElementById('custom-style')

        if (customStyle) {
          if (customStyle.classList.contains(version)) {
            return;
          } else {
            customStyle.remove()
          }
        }

        let versionText = (version === "0.5") ? "Latest" : `v${version}`
        let node = document.createElement("style")
        let textnode = document.createTextNode(`span.site-name:after{content:'${versionText}';font-size:14px;vertical-align:top;border-bottom:2px solid #ececec;padding-bottom:4px;;margin-left:16px;}`);

        node.appendChild(textnode)
        node.id = 'custom-style'
        node.classList.add('v-' + version)

        document.getElementsByTagName('head')[0].appendChild(node)
      }
    }
  })
}
