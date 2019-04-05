import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  props: true,
  routes: [
    {
      path: "/:page",
      name: "home",
      component: Home
    },
    { path: "/", redirect: "/Kradus" }
  ]
});
