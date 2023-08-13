import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import { useToast } from 'vue-toast-notification'
import router from './router'
import { plugin , defaultConfig} from "@formkit/vue"
import config from './formkit.config'
const app = createApp(App)
import "vue-toast-notification/dist/theme-sugar.css"

const $toast = useToast({
  duration: 3000,
  position: 'top-right'
})

app.provide('toast', $toast)
app.use(createPinia())
app.use(plugin, defaultConfig(config))
app.use(router)

app.mount('#app')
