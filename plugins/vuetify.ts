import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import {createVuetify} from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'light',
      themes: {
        light: {
          colors: {
            primary: '#013366',
            secondary: '#ef233c',
            error: '#d90429',
            success: '#107317'
          }
        }
      }
    }
  })
  app.vueApp.use(vuetify)
})