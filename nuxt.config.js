export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Nuxt generate
  ** See https://nuxtjs.org/api/configuration-generate/
  */
  generate: {
    fallback: true,
  },
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    titleTemplate: '%s | APCSCamp 2021',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'APCSCamp 2021 程式設計能力培訓營' },
      { hid: "og:site_name", name: "og:site_name", property: "og:site_name", content: "APCSCamp 2021 website" },
      { hid: 'og:description', name: 'og:description', property: 'og:description', content: 'APCSCamp 2021 程式設計能力培訓營' },
      { hid: 'og:title', name: 'og:titlte', property: 'og:title', content: 'APCSCamp 2021 程式設計能力培訓營' },
      { hid: 'og:url', name: 'og:url', property: 'og:url', content: 'https://apcs.camp' },
      { hid: 'og:image', name: 'og:image', property: 'og:image', content: 'https://apcs.camp/icon.png' },
    ],
    htmlAttrs: {
      lang: 'zh-TW',
    },
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  styleResources: {
    scss: [
      '~assets/_vars.scss',
      '~assets/_section-block.scss'
    ],
  },
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/fontawesome',
    '@nuxtjs/google-fonts',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    '@nuxt/content',
    '@nuxtjs/auth',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: 'https://api.apcscamp.org/',
  },
  /*
   ** Google Font module configuration
   ** See https://github.com/nuxt-community/google-fonts-module
   */
  googleFonts: {
    families: {
      'Noto+Sans+TC': [300,600,700,900],
      'Noto+Serif+TC': [300,600,700],
    },
    display: 'swap',
  },
  /*
   ** FontAwesome module configuration
   ** See https://github.com/nuxt-community/fontawesome-module
   */
  fontawesome: {
    icons: {
      solid: [
        'faChevronRight',
        'faBars',
        'faKey',
        'faLock',
        'faCheckDouble',
        'faUnlock',
        'faUnlockAlt',
        'faVenusMars',
        'faSchool',
        'faGraduationCap',
        'faHourglassHalf',
        'faHistory',
        'faTrophy',
        'faListUl',
        'faAlignLeft',
        'faBook',
        'faAward',
        'faCaretDown',
        'faTerminal',
        'faAngleRight'
      ],
      regular: [
        'faEnvelope',
        'faUser',
      ]
    },
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    extractCSS: true,
    transpile: ['@nuxtjs/auth'],
  },
  /*
  ** Router Configureation
  ** See https://nuxtjs.org/api/configuration-router/
  */
  router: {
    trailingSlash: true,
  },
  /*
  ** Hook Configuration
  ** See https://content.nuxtjs.org/advanced for nuxt content hook
  */
  hooks: {
    'content:file:beforeInsert': (document)=> {
      if (document.extension === '.md') {
        for (let children of document.body.children) {
          if (children.tag === 'p') {
            children.children.unshift(
              {
                type: 'element',
                tag: 'font-awesome-icon',
                props: { icon: "angle-right", class: 'p-icon' },
                children: []
              }
            );
          }
        }
      }
    }
  },
  /*
  ** Nuxt.js Auth Module
  */
  auth: {
    redirect: {
      login: '/signin/',
      logout: false,
      home: '/user/edit/',
    },
    rewriteRedirects: true,
    strategies: {
      IOICStrategy: {
        _scheme: '~/schemes/IOICScheme',
        endpoints: {
          login: {
            url: '/api/login',
            method: 'post',
            propertyName: 'token',
          },
          logout: false,
          user: {
            url: '/api/users/apply-form',
            method: 'get',
          }
        },
      }
    }
  },
}
