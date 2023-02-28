import App from '@/App.vue'
import { router } from '@/router'
import '@/styles/style.scss'
import { MotionPlugin } from '@vueuse/motion'
import { createApp } from 'vue'

const app = createApp(App)

app.use(MotionPlugin)
app.use(router)
app.mount('#app')
