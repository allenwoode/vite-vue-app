import { createWebHistory, createRouter } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", name: 'home', component: () => import("../views/Home.vue") },
        { path: "/about", name: 'about', component: () => import("../views/About.vue") },
        { path: "/login", name: 'login', component: () => import("../views/Login.vue") },
    ]
})

router.beforeEach(async (to, from) => {
    console.log(to, from)
    // if (to.name !== 'login') {

    //     console.log('to.name is not login...', to.name)
    //     return { name: 'login' }
    // }
})

router.afterEach(async (to, from) => {
    console.log(to, from)
})

export default router