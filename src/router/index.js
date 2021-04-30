import Vue from "vue";
import VueRouter from "vue-router";

import { Auth } from "@aws-amplify/auth";

import AuthLayout from "../layout/AuthLayout";
import Login from "../views/Login";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../views/Dashboard";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        components: { default: Dashboard },
      },
    ],
  },
  {
    path: "/auth",
    component: AuthLayout,
    children: [
      {
        path: "login",
        name: "login",
        components: { default: Login },
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  Auth.currentAuthenticatedUser()
    .then(() => {
      next();
    })
    .catch(() => {
      if (to.name !== "login") next({ name: "login" });
      else next();
    });
});

export default router;
