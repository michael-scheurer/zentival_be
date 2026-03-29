import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        {
          name: 'description',
          content: 'Zentival - Träum weiter!',
        },
        // open graph
        {
          property: 'og:title',
          content: 'Zentival - Träum weiter!',
        },
        {
          property: 'og:description',
          content:
            'Eine Nacht. Eine Bühne. Drei Bands. Ein Tanz. Das ist unser Zentival. Am östlichen Stadtrand Berns, eingebettet zwischen Industriecharme und Wohnquartier.\n' +
            '\n' +
            'Eine WG und drei Familien organisieren das Zentival nach 2023 in der vierten Auflage. Für die Stadt. Fürs Quartier. Für Freunde und die Freude.\n' +
            'Unsere Motivation sind kleine aber feine Acts. Kein professionelles aber ein umso kreativeres Ambiente.',
        },
        {
          property: 'og:url',
          content: 'https://soundcrowd.ch/',
        },
        {
          property: 'og:image:type',
          content: 'image/png',
        },
        {
          property: 'og:image',
          content: 'https://soundcrowd.ch/_nuxt/intro.Bk_3QTlR.webp',
        },
        // twitter
        { name: 'twitter:card', content: 'summary' },
        {
          name: 'twitter:title',
          content: 'Zentival - Träum weiter!',
        },
        {
          name: 'twitter:description',
          content:
            'Eine Nacht. Eine Bühne. Drei Bands. Ein Tanz. Das ist unser Zentival. Am östlichen Stadtrand Berns, eingebettet zwischen Industriecharme und Wohnquartier.',
        },
        {
          property: 'twitter:image',
          content: 'https://soundcrowd.ch/_nuxt/intro.Bk_3QTlR.webp',
        },
      ],
      link: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
    },
  },
  devtools: { enabled: true },

  nitro: {},

  runtimeConfig: {
    mollieApiKey: process.env.NUXT_MOLLIE_API_KEY,
    stripeApiKey: process.env.NUXT_STRIPE_API_KEY,
    public: {
      paymentProvider: process.env.NUXT_PUBLIC_PAYMENT_PROVIDER,
    },
  },

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config.plugins?.push(vuetify({ autoImport: true }))
      })
    },
    '@pinia/nuxt',
    '@nuxt/eslint',
  ],
  eslint: {
    // options here
  },
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  css: ['@/assets/styles/styles.scss', '@/assets/styles/typography.scss'],
})
