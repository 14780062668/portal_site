import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  //base: "",
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
      redirect: '/index',
      component: () => import('@/views/index/Index.vue'),
    },
    {
      path: "/index",
      name: "Index",
      component: () => import('@/views/index/Index.vue'),
    },
    {
      path: "/about_me",
      name: "about_me",
      component: () => import('@/views/aboutMe/Index.vue'),
    },
    {
      path: '/demo',
      name: 'Demo',
      component: () => import('@/views/Demo.vue'),
    },
    {
      path: '*',
      name: 'Index',
      component: () => import('@/views/index/Index.vue')
    }
  ]
});
