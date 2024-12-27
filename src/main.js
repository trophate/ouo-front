import "./plugins/route.js"
import { createApp } from 'vue'
import { router } from "./plugins/route.js"

import App from "./App.vue"

createApp(App)
  .use(router)
  .mount('#app')