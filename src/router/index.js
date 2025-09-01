import { createRouter, createWebHistory } from 'vue-router'
import IndexVue from '../views/Index.vue'

// Definimos la ruta
const routes = [{ path: '/', component: IndexVue }]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
