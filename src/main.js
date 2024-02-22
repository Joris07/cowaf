import './assets/main.css'

import { createApp } from 'vue'
import router from './router'
import Home from './views/Home.vue'

const app = createApp(Home)

app.use(router)

app.mount('#app')