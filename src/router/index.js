//? Libraries
import { createRouter, createWebHashHistory } from 'vue-router'
//? Components
import HomePage from '../pages/home-page.vue'
import StatsIndex from '../pages/stats-index.vue'
import ContactIndex from '../pages/contact-index.vue'
import ContactDetails from '../cmps/contact/contact-details.vue'

const routerOptions = {
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      // name: 'home',
      component: HomePage,
    },
    {
      path: '/contact',
      // name: 'contact',
      component: ContactIndex,
    },
    {
      path: '/contact/:_id',
      // name: 'contact',
      component: ContactDetails,
    },
    {
      path: '/stats/',
      // name: 'stats',
      component: StatsIndex,
    },
    {
      path: '/about',
      // name: 'about',
      //? route level code-splitting
      //? this generates a separate chunk (About.[hash].js) for this route
      //? which is lazy-loaded when the route is visited.
      component: () => import('../pages/about-page.vue'),
    },
  ],
}

const router = createRouter(routerOptions)

export default router
