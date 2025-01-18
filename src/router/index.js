import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/HomePrincipal.vue')
        },
        {
            path: '/glob',
            name: 'blog',
            component: () => import('../views/Blog.vue')
        }
    ]
})

export default router
