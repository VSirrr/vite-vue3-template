import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      alias: '/home',
      component: () => import('./views/Home.vue'),
    },
    {
      path: '/plan',
      component: () => import('./views/Plan.vue'),
    },
    {
      path: '/:pathMatch(.*)',
      redirect: '/',
    },
  ],
})

export default router
