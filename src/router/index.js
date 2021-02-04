import { createRouter, createWebHistory } from 'vue-router'
import appHeader from "@/components/appShared/appHeader";
import appFooter from "@/components/appShared/appFooter";
const routes = [
  {
    path: '/',
    name: 'HomePage',

    components: {

      default: () => import('../views/Home.vue'),
      appHeader, appFooter
    }
  },
  {
    path: '/contact',
    name: 'Contact',

    components: {

      default: () => import('../views/ContactUs.vue'),
      appHeader, appFooter
    }

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
