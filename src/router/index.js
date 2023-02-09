import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'IndexView',
    component: () => import(/* webpackChunkName: "about", webpackPrefetch:true */ '../views/IndexView.vue')
  },
  {
    path: '/login',
    name: 'LoginView',
    component: () => import(/* webpackChunkName: "about", webpackPrefetch:true */ '../views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "about", webpackPrefetch:true */ '../views/RegisterView.vue')
  },
  {
    path: '/noticboard',
    name: 'Notic',
    component: () => import(/* webpackChunkName: "about", webpackPrefetch:true */ '../views/NoticView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
