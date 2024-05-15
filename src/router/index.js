import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import MainHome from '../views/MainHome.vue'
import ProductView from '../views/ProductView.vue'
import KnowView from '../views/KnowView.vue'
import JoinView from '../views/JoinView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
    {
      path: '/aside1',
      name: 'aside1',
      meta:{index:1},
      component: MainHome
    },
    {
      path: '/aside2',
      name: 'aside2',
      meta:{index:2},
      component: ProductView
    },
    {
      path: '/aside3',
      name: 'aside3',
      meta:{index:3},
      component: KnowView
    },
    {
      path: '/aside4',
      name: 'aside4',
      meta:{index:4},
      component: JoinView
    },{
      // 访问‘/’默认首页时重定向回‘aside’首页
      path:'/',
      redirect:'/aside1'
    }
  ]
})

export default router
