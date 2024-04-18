import {createRouter, createWebHistory} from 'vue-router'
import routes from "@/router/routes";
import type {Router} from "vue-router";

const router: Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
