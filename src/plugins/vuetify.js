import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#4CAF50',
          background: '#E8F5E9',
          success: '#4CAF50',
        },
      },
    },
  },
  defaults: {
    VBtn: {
      size: 'large',
    }
  }
})
