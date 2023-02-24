import { createRouter, createWebHashHistory } from "vue-router";
import routerPages from "./routerPages/pages";
const router = createRouter({
  history: createWebHashHistory(),
  routes: [...routerPages],
});

export default router;
