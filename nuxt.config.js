import colors from 'vuetify/es5/util/colors'

export default {
  server: {
    port: 8000,
  },
  mode: 'spa',
  env: {
    API_BASE: process.env.API_BASE,
  },
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s',
    title: "shozzy's portfolio",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "ソフトウェアエンジニア'shozzy'のポートフォリオサイトです。" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/dotenv',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/vuetify',
    '@nuxtjs/axios',
//    '@nuxtjs/proxy',
    '@nuxtjs/pwa',
    ['@nuxtjs/google-analytics', {
      id: 'UA-683769-5'
    }]
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
//    prefix: '/api',
  },
/*  proxy: {
    '/api': {
      target: 'https://shozzy-portfolio-rails.herokuapp.com',
      pathRewrite: {
        '^/api': '/'
      }
    }
  },
*/
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
