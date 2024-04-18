import type {RouteRecordRaw} from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "main",
        component: () => import("@/views/MainIndex.vue"),
        meta: {
            middleware: {
                auth: true
            }
        }
    }
];

export default routes;