<template>
  <div class="header-box">
    <header>
      <img
        class="logo"
        @click="goHomePage"
        src="../assets/img/logo.png"
        alt=""
      />
      <nav class="nav-main">
        <router-link
          tag="span"
          v-for="item in navList"
          :key="item.id"
          :class="[{ activeNav: active == item.id }]"
          :to="{
            path: item.pathName
          }"
          >{{ item.name }}</router-link
        >
      </nav>
      <div class="change-language">
        <span
          :class="[{ 'active-language': languageVal == 1 }]"
          @click="changeLanguage(1)"
          >CN</span
        >
        <span
          :class="[{ 'active-language': languageVal == 2 }]"
          @click="changeLanguage(2)"
          >EN</span
        >
      </div>
    </header>
  </div>
</template>
<script>
import mixins from '../mixins/index.js';
export default {
  mixins: [mixins],
  data() {
    return {
      languageVal: 1
    };
  },
  computed: {
    active() {
      let result = 0;
      let { name } = this.$route;
      switch (name) {
        case "about_me":
          result = 1;
          break;
        case "product":
          result = 2;
          break;
        case "equipment":
          result = 3;
          break;
        case "quality_control":
          result = 4;
          break;
        case "contact_us":
          result = 5;
          break;
        default:
          result = 0;
      }
      return result;
    }
  },
  created() {},
  methods: {
    // 去首页
    goHomePage() {
      this.$router.push({
        name: "Index"
      });
    },
    // 切换语言
    changeLanguage(type) {
      this.languageVal = type;
      this.$store.commit("changeLanguage", type);
    }
  }
};
</script>
<style lang="stylus" scoped></style>
