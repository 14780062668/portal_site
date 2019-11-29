import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "hash",
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
      name: "homePage",
      redirect: '/index',
      component: () => import('@/views/index/Index.vue'),
    },
    {
      path: "/index",
      name: "Index",
      component: () => import('@/views/index/Index.vue'),
    },
    {
      path: "/index_info",
      name: "index_info",
      component: () => import('@/views/index/Info.vue'),
    },
    {
      path: "/about_me",
      name: "about_me",
      component: () => import('@/views/aboutMe/Index.vue'),
    },
    {
      path: "/equipment",
      name: "equipment",
      component: () => import('@/views/equipment/Index.vue'),
    },
    {
      path: "/quality_control",
      name: "quality_control",
      component: () => import('@/views/qualityControl/Index.vue'),
    },
    {
      path: '/demo',
      name: 'Demo',
      component: () => import('@/views/Demo.vue'),
    },
    {
      path: '*',
      name: 'NoRoute',
      component: () => import('@/views/index/Index.vue')
    }
  ]
});
