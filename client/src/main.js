// import './assets/main.css'

import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

const pinia = createPinia()

pinia.use(({ store }) => {
  store.router = markRaw(router) // gunakan ini jika di dalam store mau akses this.router
})

app.use(pinia)
app.use(router)

app.mount('#app')
