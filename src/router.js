import { createRouter, createWebHistory } from "vue-router";


const router = createRouter({
    history: createWebHistory(),
    routes: [
    {
        path: '/',
        name: 'home',
        component: ()=> import('./pages/AppHome.vue')
    },
    {
        path: '/projects',
        name: 'projects',
        component: ()=> import('./pages/ProjectList.vue')
    },
    ]
});

export default router