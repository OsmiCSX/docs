<template>
  <div id="gist-area">
    <p v-html="content"></p>
  </div>
</template>

<script>
function fetcher (url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return;
      if (xhr.status >= 200 && xhr.status < 300) {
        try {
          let res = JSON.parse(xhr.responseText)
          resolve(res)
        } catch (err) {
          reject(err)
        }
      }
    };
    xhr.onerror = reject
    xhr.open('GET', url);
    xhr.send();
  })
}

export default {
  name: 'Gist',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      content: "Loading"
    }
  },
  mounted () {
    this.fetchGistData(this.id)
  },
  methods: {
    fetchGistData (id) {
      const FETCH_URL = `https://cors-anywhere.herokuapp.com/https://gist.github.com/${id}.json`
      
      fetcher(FETCH_URL).then((data) => {
        this.content = data.div

        let style = document.getElementById('gist-stylesheet')
        if (!style) {
          let css = document.createElement("link")
          css.id = "gist-stylesheet"
          css.href = data.stylesheet,
          css.rel = "stylesheet"

          document.getElementsByTagName("head")[0].appendChild(css)
        }
      });
    }
  }
}
</script>
