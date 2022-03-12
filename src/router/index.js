// import { createRouter, createWebHistory } from "vue-router";
import {
  createRouter,
  createWebHashHistory,
} from "vue-router";
const Home = () => import("@/views/Home.vue");
const Profile = () => import("@/views/Profile.vue");
const ShowcaseList = () => import("@/views/ShowcaseList.vue");
const Showcase = () => import("@/views/Showcase.vue");
const BlogList = () => import("@/views/BlogList.vue");
const Blog = () => import("@/views/Blog.vue");
const DownloadCV = () => import("@/views/DownloadCV.vue");

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
        path: "download-cv",
        component: DownloadCV,
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
