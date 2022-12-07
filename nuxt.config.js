import privateRuntimeConfig from './config/privateRuntime'

export default {
  target: 'static',
  // Private config
  privateRuntimeConfig,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'flutterwave-nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  image: {
    domains: ['techcrunch.com']
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/static/assets/css/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vuex-persist.client'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/html-validator',
    '@nuxt/image',
    ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxt/image'
  ],

  "compilerOptions": {
    "types": ["@nuxt/types", "@nuxt/image"]
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      title: 'Flutterwave Checkout Test',
      author: 'Damilare ADEMESO',
    },
    manifest: {
      name: 'This is a test',
      short_name: 'FLW',
      lang: 'en',
    },
    workbox: {
      /* workbox options */
      autoRegister: true,
      skipWaiting: true,
      enabled: true,
      // preCaching:['~/static/assets'],
      offlineStrategy: 'NetworkFirst',
      cleanupOutdatedCaches: true

    }
  },
  htmlValidator: {
    usePrettier: false,
    logLevel: 'verbose',
    failOnError: false,
    options: {
      extends: [
        'html-validate:document',
        'html-validate:recommended',
        'html-validate:standard'
      ],
      rules: {
        'svg-focusable': 'off',
        'no-unknown-elements': 'error',
        // Conflicts or not needed as we use prettier formatting
        'void-style': 'off',
        'no-trailing-whitespace': 'off',
        // Conflict with Nuxt defaults
        'require-sri': 'off',
        'attribute-boolean-style': 'off',
        'doctype-style': 'off',
        // Unreasonable rule
        'no-inline-style': 'off'
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
