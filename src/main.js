// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
//import { Carousel,Input, Select, message, Radio, Confirm } from "ant-design-vue";
import ant from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import store from "./store/index.js";
import instance from "./util/axios.js";

// Vue.use(Carousel);
// Vue.use(Input);
// Vue.use(Select);
// Vue.use(Radio);
Vue.use(ant);

// Vue.prototype.$message = message;
// console.log('confirm', ant);
// Vue.prototype.$confirm = Confirm;

Vue.config.productionTip = false;

// 引入地图
import BaiduMap from "vue-baidu-map";
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: "eBRLlQlHgoayk0sfP2mg8G3sLIqZyLPg"
});

// 引入css
import "./assets/style/default.styl";

//将axios挂载到Vue的原型上
Vue.prototype.axios = instance;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
