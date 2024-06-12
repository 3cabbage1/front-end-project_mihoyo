import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { observe } from './components/directives'
import { observe1 } from './components/directives'
//创建挂载根实例
const app = createApp(App)
//确保路由实例使整个应用支持路由
app.use(router)
// app. directive("observe",observe);
app.mount('#app')
app.directive('observe', observe)
app.directive('observe1', observe1)
// Vue.prototype.$direction= 0;//全局变量，组件滑动方向标记（1：向上；-1：向下；0：不动）
// app.directive('observe', observe)