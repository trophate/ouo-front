import {createApp} from 'vue'
import App from "./App.vue"
import "./jss/route.js"
import {router} from "./jss/route.js";

createApp(App)
    .use(router)
    .mount('#app');