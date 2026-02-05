import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import axios from 'axios'
import './assets/css/style.css'

// Настройка axios
axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// Добавляем перехватчик для логирования
axios.interceptors.request.use(request => {
  console.log('Starting Request', request)
  return request
})

axios.interceptors.response.use(
  response => {
    console.log('Response:', response)
    return response
  },
  error => {
    console.error('Response Error:', error)
    return Promise.reject(error)
  }
)

const app = createApp(App)

app.config.globalProperties.$axios = axios

app.use(router)
app.mount('#app')
app.provide('app', app.config.globalProperties)