import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('../views/general/Main.vue'),
    meta: { title: 'Licenciado Punk' }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not_found',
    component: () => import('../views/general/NotFound.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
