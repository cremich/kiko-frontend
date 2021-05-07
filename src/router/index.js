import Vue from "vue";
import VueRouter from "vue-router";

import { Auth } from "@aws-amplify/auth";

import AuthLayout from "@/layout/AuthLayout";
import DashboardLayout from "@/layout/DashboardLayout";

import Login from "@/views/Login";
import Dashboard from "@/views/Dashboard";
import PrivacyPolicy from "@/views/PrivacyPolicy";

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
        meta: {
          requiresAuthentication: true,
        },
      },
    ],
  },
  {
    path: "/privacy-policy",
    component: DashboardLayout,
    children: [
      {
        path: "/",
        name: "privacy-policy",
        components: { default: PrivacyPolicy },
        meta: {
          requiresAuthentication: false,
        },
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
        meta: {
          requiresAuthentication: false,
        },
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
      if (to.name === "login") {
        next({ name: "dashboard" });
      }
      next();
    })
    .catch(() => {
      if (to.meta.requiresAuthentication) {
        next({ name: "login" });
      } else {
        next();
      }
    });
});

export default router;
