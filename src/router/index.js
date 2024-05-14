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
      path: '/',
      name: 'aside1',
      component: MainHome
    },
    {
      path: '/aside2',
      name: 'aside2',
      component: ProductView
    },
    {
      path: '/aside3',
      name: 'aside3',
      component: KnowView
    },
    {
      path: '/aside4',
      name: 'aside4',
      component: JoinView
    }
  ]
})

export default router