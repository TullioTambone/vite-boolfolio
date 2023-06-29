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
    {
        path: '/projects/:slug',
        name: 'SingleProject',
        component: ()=> import('./pages/SingleProject.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: ()=> import('./pages/NotFound.vue')
    }
    ]
});

export default router