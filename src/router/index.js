import { createRouter, createWebHistory } from 'vue-router'
import HomePrincipal from '../views/HomePrincipal.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePrincipal
        },
        {
            path: '/coleta-seletiva',
            name: 'coleta',
        },
        {
            path: '/pontos-coleta',
            name: 'pontos',
        },
        {
            path: '/blog',
            name: 'blog',
        }
    ]
})

export default router;