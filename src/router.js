import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      alias: '/home',
      component: () => import('@/views/Home/index.vue'),
    },
    {
      path: '/about',
      component: () => import('@/views/About/index.vue'),
    },
    {
      path: '/:pathMatch(.*)',
      redirect: '/',
    },
  ],
})

export default router
