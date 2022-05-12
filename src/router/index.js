import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import StartPage from "@/views/StartPage";

const routes = [
  {
    path: '/',
    name: 'home',
    component: StartPage
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
