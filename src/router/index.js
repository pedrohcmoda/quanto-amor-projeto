import { createRouter, createWebHistory } from 'vue-router'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

import HomePrincipal from '../views/HomePrincipal.vue'
import Blog from '../views/Blog.vue'
import PontosColeta from '../views/PontosColeta.vue'
import ColetaSeletiva from '../views/ColetaSeletiva.vue'
import Admin from '@/views/Admin.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', name: 'home', component: HomePrincipal },
        { path: '/blog', name: 'blog', component: Blog },
        { path: '/coleta-seletiva', name: 'coleta-seletiva', component: ColetaSeletiva },
        { path: '/pontos-coleta', name: 'pontos-coleta', component: PontosColeta },
        { path: '/admin', name: 'admin', component: Admin, meta: { requiresAuth: true } },
    ]
})

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        const auth = getAuth()
        onAuthStateChanged(auth, (user) => {
            if (user) {
                next()
            } else {
                next('/')
            }
        })
    } else {
        next()
    }
})

export default router
