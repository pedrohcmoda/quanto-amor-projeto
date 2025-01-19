import { createRouter, createWebHistory } from 'vue-router'

import HomePrincipal from '../views/HomePrincipal.vue'
import Blog from '../views/Blog.vue'
import PontosColeta from '../views/PontosColeta.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePrincipal
        },
        {
            path: '/blog',
            name: 'blog',
            component: Blog
        },
        {
            path: '/pontos-coleta',
            name: 'pontos-coleta',
            component: PontosColeta
        }
    ]
})

export default router
