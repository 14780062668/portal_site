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
      meta: {
        keepAlive: true
      }
    },
    {
      path: "/index",
      name: "Index",
      component: () => import('@/views/index/Index.vue'),
      meta: {
        keepAlive: true
      }
    },
    {
      path: "/index_info",
      name: "index_info",
      component: () => import('@/views/index/Info.vue'),
      meta: {
        keepAlive: true
      }
    },
    {
      path: "/about_me",
      name: "about_me",
      component: () => import('@/views/aboutMe/Index.vue'),
      meta: {
        keepAlive: true
      }
    },
    {
      path: "/product",
      name: "product",
      component: () => import('@/views/product/Index.vue'),
      meta: {
        keepAlive: false
      }
    },
    {
      path: "/equipment",
      name: "equipment",
      component: () => import('@/views/equipment/Index.vue'),
      meta: {
        keepAlive: true
      }
    },
    {
      path: "/quality_control",
      name: "quality_control",
      component: () => import('@/views/qualityControl/Index.vue'),
      meta: {
        keepAlive: true
      }
    },
    {
      path: "/contact_us",
      name: "contact_us",
      component: () => import('@/views/contact/Index.vue'),
      meta: {
        keepAlive: true
      }
    },
    {
      path: "/edit",
      name: "edit",
      component: () => import('@/views/edit/Index.vue'),
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/demo',
      name: 'Demo',
      component: () => import('@/views/Demo.vue'),
      meta: {
        keepAlive: true
      }
    },
    {
      path: '*',
      name: 'NoRoute',
      component: () => import('@/views/index/Index.vue'),
      meta: {
        keepAlive: true
      }
    }
  ]
});
