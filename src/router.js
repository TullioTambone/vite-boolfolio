import { createRouter, createWebHashHistory } from "vue-router";


const routes = [
    {
        path: '/',
        name: '',
        component: () => import(''),
        meta: { transition: 'fade'}
    },
    {
        path: '/',
        name: '',
        component: () => import(''),
        meta: { transition: 'fade'}
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router