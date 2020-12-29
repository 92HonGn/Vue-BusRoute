import { createWebHistory, createWebHashHistory, createRouter } from "vue-router";
import Home from "./view/Home.vue";

const routes = [
  {
    path: "/:id?",
    name: "Home",
    component: Home,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router;