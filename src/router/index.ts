import { createWebHistory, createRouter } from 'vue-router'
import Landing from '../pages/landing.vue'
import Login from '../pages/auth/login.vue'
import Join from '../pages/auth/join.vue'
import NotFound from '../pages/not-found.vue'

const routes = [
  { path: '/', component: Landing },
  { path: '/login', component: Login },
  { path: '/join', component: Join },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

// Create the router instance and pass the `routes` option
const router = createRouter({
  // Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(import.meta.env.BASE_URL), //add the BASE_URL
  routes,
})
export default router
