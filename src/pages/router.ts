import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/articles',
    },
    {
        path: '/articles',
        name: 'Articles',
        component: () => import('@pages/Articles').then((m) => m.Articles),
    },
    {
        path: '/articles/:id',
        name: 'Detail',
        component: () => import('@pages/NotFound').then((m) => m.NotFound),
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@pages/About').then((m) => m.About),
    },
    {
        path: '/post/:id?',
        name: 'Post',
        component: () => import('@pages/NotFound').then((m) => m.NotFound),
    },
    {
        path: '/articles/:id',
        name: 'Detail',
        component: () => import('@pages/NotFound').then((m) => m.NotFound),
    },
    {
        path: '/404',
        name: 'NotFound',
        component: () => import('@pages/NotFound').then((m) => m.NotFound),
    },
    {
        path: '/:catchAll(.*)',
        redirect: '/404',
    },
];

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
