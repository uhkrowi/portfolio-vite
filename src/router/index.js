// import { createRouter, createWebHistory } from "vue-router";
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import Home from "@/views/Home.vue";
import Profile from "@/views/Profile.vue";
import ShowcaseList from "@/views/ShowcaseList.vue";
import Showcase from "@/views/Showcase.vue";
import BlogList from "@/views/BlogList.vue";
import Blog from "@/views/Blog.vue";

// const createHistory = process.env.SERVER
//   ? createMemoryHistory
//   : process.env.VUE_ROUTER_MODE === "history"
//   ? createWebHistory
//   : createWebHashHistory;

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "",
        redirect: (to) => "about",
      },
      {
        path: "/about",
        component: Profile,
      },
      {
        path: "showcase",
        component: ShowcaseList,
      },
      {
        path: "showcase/:id",
        component: Showcase,
      },
      {
        path: "blog",
        component: BlogList,
      },
      {
        path: "blog/:id",
        component: Blog,
      },
      {
        path: "/:catchAll(.*)*",
        // redirect: (to) => "blog",
        // component: Blog,
        component: () => import("@/views/404.vue"),
      },
    ],
  },
];

const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(),
  // mode: "hash",
  routes,
});

export default router;
