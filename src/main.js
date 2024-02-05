import './assets/main.css'
import './assets/global.less'


import { createApp } from 'vue'
import { createPinia } from 'pinia'


import axios from 'axios'
import App from './App.vue'
import router from './router'
import moment from 'moment'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)


app.mount('#app')
