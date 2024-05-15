import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//创建挂载根实例
const app = createApp(App)
//确保路由实例使整个应用支持路由
app.use(router)

app.mount('#app')
