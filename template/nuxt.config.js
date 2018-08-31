module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '{{ name }}',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '{{escape description }}' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Open+Sans' }
    ]
  },
  /*
  ** Load any custom CSS
  */
  css: [
    {{#if_eq cssFramework 'flexboxgrid2'}},
    { src: 'flexboxgrid2', lang: 'css' }
    {{/if_eq}}
    { src: '~/assets/scss/main.scss', lang: 'scss' }
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#EF574B' },
  /*
  ** We're building a single page app, with no server-side rendering
  */
  mode: 'spa',
  /*
  ** Vue Plugins
  */
  plugins: [
    {{#if libs.scrollmagic}}
    { src: '~/plugins/vue-scrollmagic', ssr: false }
    {{/if}}
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Extract CSS to an external file
    */
    extractCSS: true,
    /*
    ** Libraries and paths to concat into the vendor bundle
    */
    vendor: [
      'babel-polyfill',
      'eventsource-polyfill',
      {{#each libs}}
      '{{@key}}'{{#if_eq @index libs.length-1}},{{/if_eq}}
      {{/each}}
    ],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
