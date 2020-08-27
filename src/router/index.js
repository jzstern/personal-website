import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/dev",
    name: "Development",
    component: () => import(/* webpackChunkName: "dev" */ "../views/Development.vue")
  },
  {
    path: "/design",
    name: "Design",
    component: () => import(/* webpackChunkName: "design" */ "../views/Design.vue")
  },
  {
    path: "/music",
    name: "Music",
    component: () => import(/* webpackChunkName: "music" */ "../views/Music.vue")
  },
  {
    path: "/misc",
    name: "Misc",
    component: () => import(/* webpackChunkName: "misc" */ "../views/Misc.vue")
  },
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
