import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Index from "@/views/index/Index.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: "/",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index
    },
    {
      path: "hello",
      name: "HelloWorld",
      component: HelloWorld
    }
  ]
});
