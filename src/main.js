// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import Antd from 'ant-design-vue';
import store from './store/index.js'

Vue.config.productionTip = false;
Vue.use(Antd);

// 引入css
import './assets/style/default.styl';

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
