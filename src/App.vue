<template>
  <div id="app">
    <header-com></header-com>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <!-- <router-view></router-view> -->
    <footer-com></footer-com>
  </div>
</template>
<script>
import HeaderCom from "./components/HeaderCom.vue";
import FooterCom from "./components/FooterCom.vue";
export default {
  name: "App",
  components: {
    HeaderCom,
    FooterCom
  },
  created() {
    // 查询菜单
    // this.axios
    //   .get(`content/query_attachment_by_menu_id?menuId=${1}`)
    //   .then(data => {
    //     console.log("res===", data);
    //   });
    // // 查询菜单详情
    // this.axios.get(`content/query_menu_info`).then(({ data }) => {
    //   console.log("res===", data);
    // });

    //query_menu_info
  }
};
</script>
