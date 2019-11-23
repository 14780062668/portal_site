<template>
  <div class="header-box">
    <header>
      <img class="logo" src="../assets/img/logo.png" alt="" />
      <nav class="nav-main">
        <span :class="[{ activeNav: active == 1 }]" @click="changeNav(1)"
          >关于思豪</span
        >
        <span :class="[{ activeNav: active == 2 }]" @click="changeNav(2)"
          >产品中心</span
        >
        <span :class="[{ activeNav: active == 3 }]" @click="changeNav(3)"
          >生产设备</span
        >
        <span :class="[{ activeNav: active == 4 }]" @click="changeNav(4)"
          >质量控制</span
        >
        <span :class="[{ activeNav: active == 5 }]" @click="changeNav(5)"
          >联系我们</span
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
      active: 1,
      languageVal: 1
    };
  },
  computed: {},
  created() {},
  methods: {
    // 切换nav
    changeNav(type) {
      this.active = type;
    },
    // 切换语言
    changeLanguage(type) {
      this.languageVal = type;
    }
  }
};
</script>
<style lang="stylus" scoped>
</style>
