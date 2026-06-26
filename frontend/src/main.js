import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router/index.js'
import './assets/main.css'

const app = createApp(App)

app.use(createPinia())  // state management
app.use(router)         // routing

app.mount('#app')
