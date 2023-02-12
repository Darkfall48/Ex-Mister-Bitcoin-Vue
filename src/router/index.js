import { createRouter, createWebHashHistory } from 'vue-router'

import HomePage from '../pages/home-page.vue'

const routerOptions = {
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/about',
      // name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/about-page.vue'),
    },
  ],
}

const router = createRouter(routerOptions)

export default router
