import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "home",
      meta: { requiresAuth: true },
      component: HomeView,
    },
    {
      path: "/",
      name: "login",
      component: LoginView,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const isAuthenticated = localStorage.getItem("USER") !== null;

  if (requiresAuth && !isAuthenticated) {
    next({ name: "login" });
  } else if (!requiresAuth && isAuthenticated && to.name === "login") {
    next({ name: "home" });
  } else {
    next();
  }
});

export default router;
