<template>
  <div class="header-box">
    <header>
      <img class="logo" src="../assets/img/logo.png" alt="" />
      <nav class="nav-main">
        <span :class="[{ activeNav: active == 1 }]">关于思豪</span>
        <span :class="[{ activeNav: active == 2 }]">产品中心</span>
        <span>生产设备</span>
        <span>质量控制</span>
        <span>联系我们</span>
      </nav>
      <div class="change-language">
        <span>CN</span>
        <span>EN</span>
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
      active: 1
    };
  },
  computed: {},
  created() {},
  methods: {}
};
</script>
<style lang="stylus" scoped>
.header-box
  background #272b2f
  height 80px
  header
    padding 20px 40px
    .logo
      height 45px
      vertical-align middle
      margin-right 40px
    .nav-main
      display inline-block
      color #babbbb
      font-size 24px
      width calc(100% - 300px)
      span
        cursor pointer
        display inline-block
        padding 0 30px
        &:hover
          color #1593d0
    .change-language
      display inline-block
      span
        width 50px
        height 50px
        line-height 50px
        display inline-block
        border 1px solid #ffffff
        color #fff
        border-radius 50%
        font-size 18px
        text-align center
        &:nth-child(n+2)
          margin-left 16px

</style>
