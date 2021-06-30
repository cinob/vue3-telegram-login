import { createApp } from 'vue'
import App from './App.vue'
import telegramLogin from '../lib/main.js'

createApp(App)
  .use(telegramLogin)
  .mount('#app')
