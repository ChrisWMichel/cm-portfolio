import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/HomeView.vue";
import About from "./views/AboutView.vue";
import Project from "./views/ProjectsView.vue";
import Contact from "./views/ContactView.vue";
import FrontEnd from "./components/FrontEnd.vue";
import FullStack from "./components/FullStack.vue";
import WordPress from "./components/WordPress.vue";
import CommingSoon from "./components/ComingSoon.vue";

const routes = [
  {
    path: "/",
    component: Home,
    name: "home",
  },
  {
    path: "/about",
    component: About,
    name: "about",
  },
  {
    path: "/projects",
    component: Project,
    name: "projects",
    children: [
      {
        path: "frontend",
        component: FrontEnd,
        name: "frontend",
      },
      {
        path: "fullstack",
        component: FullStack,
        name: "fullstack",
      },
      {
        path: "wordpress",
        component: WordPress,
        name: "wordpress",
      },
      {
        path: "comming-soon",
        component: CommingSoon,
        name: "comming-soon",
      },
    ],
  },
  {
    path: "/contact",
    component: Contact,
    name: "contact",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
});

export default router;
