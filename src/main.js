import "./plugins/route.js"
import { createApp } from 'vue'
import { router } from "./plugins/route.js"
import { vuetify } from "./plugins/vuetify.js"

import App from "./App.vue"

createApp(App)
  .use(vuetify)
  .use(router)
  .mount('#app')