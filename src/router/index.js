import {createRouter, createWebHistory} from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import StartPage from "@/views/StartPage";
import ResPage from "@/views/ResPage";
import HomePage from "@/views/HomePage";
import BigPicPage from "@/views/BigPicPage";

const routes = [
    {
        path: '/',
        name: 'home',
        component: StartPage
    },

    {
        path: '/userGuide',
        name: 'userGuide',
        component: HomePage
    },

    {
        path: '/searchResult',
        name: 'searchResult',
        component: ResPage
    },

    {
        path: '/searchResult/bigImage/:imageOrder',
        name: 'bigImage',
        component: BigPicPage
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
