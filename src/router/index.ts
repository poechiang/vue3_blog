import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// import Post from "../views/post/index";
const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        redirect: "/articles",
    },
    {
        path: "/articles",
        name: "Articles",
        component: () => import("@/views/Home").then((m) => m.default),
    },
    {
        path: "/about",
        name: "About",
        component: () => import("@/views/About").then((m) => m.default),
    },
    {
        path: "/post",
        name: "Post",
        component: () => import("@/views/post/index").then((m) => m.default),
    },
    {
        path: "/articles/:id",
        name: "detail",
        component: () => import("@/views/detail/index").then((m) => m.default),
    },
    {
        path: "/test",
        name: "Test",
        component: () => import("@/views/Test").then((m) => m.default),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
