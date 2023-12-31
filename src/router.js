import { createRouter, createWebHistory } from "vue-router";
import AppHome from "./pages/AppHome.vue";
import ProjectList from "./pages/ProjectList.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
    {
        path: '/',
        name: 'home',
        component: AppHome
    },
    {
        path: '/projects',
        name: 'projects',
        component: ProjectList
    },
    {
        path: '/projects/:slug',
        name: 'SingleProject',
        component: ()=> import('./pages/SingleProject.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    }
    ]
});

export default router