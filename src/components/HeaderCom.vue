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
export default {
  mixins: [],
  props: {},
  components: {},
  data() {
    return {
      languageVal: 1,
      navList: [
        {
          id: 1,
          name: "关于思豪",
          pathName: "about_me"
        },
        {
          id: 2,
          name: "产品中心",
          pathName: "product"
        },
        {
          id: 3,
          name: "生产设备",
          pathName: "equipment"
        },
        {
          id: 4,
          name: "质量控制",
          pathName: "quality_control"
        },
        {
          id: 5,
          name: "联系方式",
          pathName: "contact_us"
        }
      ]
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
    }
  }
};
</script>
<style lang="stylus" scoped></style>
