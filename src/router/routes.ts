import type {RouteType} from "@/router/types";

const routes: RouteType[] = [
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