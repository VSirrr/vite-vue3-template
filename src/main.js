// css
import '@vsirrr/normalize.css'
import './style.scss'
import 'aos/dist/aos.css'
// js
import AOS from 'aos'
import App from './App.vue'
import router from './router'
import { createApp } from 'vue'

AOS.init()

createApp(App).use(router).mount('#app')
