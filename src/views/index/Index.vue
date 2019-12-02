<template>
  <div class="wrapper">
    <banner />
    <div class="box">
      <div class="why-box">
        <h2>Why Choose us?</h2>
        <div class="why-btn">
          <span @click="gotoInfo">为什么选择我们</span>
          <i @click="gotoInfo" class="iconfont icondianji-"></i>
        </div>
        <div class="why-intro">
          <p>在真空领域内的机械加工厂非常多，为什么是您最合适的选择？</p>
          <p>因为我们更专业！我们的优势在于如下几点：</p>
        </div>
        <div class="why-Advantage">
          <div class="item circle">专业</div>
          <div class="item plus"><i class="iconfont iconjia"></i></div>
          <div class="item circle">质优</div>
          <div class="item plus"><i class="iconfont iconjia"></i></div>
          <div class="item circle">纳期</div>
        </div>
        <product-list class="product" /> 
      </div>
       <card-box  class="card-box"/>
    </div>
  </div>
</template>
<script>
import Banner from "./components/Banner.vue";
import ProductList from './components/ProductList.vue';
import CardBox from './components/CardBox.vue';
export default {
  mixins: [],
  components: {
    Banner,
    ProductList,
    CardBox
  },
  data() {
    return {};
  },
  computed: {},
  created() {},
  methods: {
    gotoInfo(){
      this.$router.push({
        name: 'index_info'
      });
    }
  }
};
</script>
<style lang="stylus" scoped>
.box
  padding-top 30px
  .why-box 
    text-align center
    margin-bottom 40px
    h2
      color #1493cf
      font-size 80px
      margin-bottom 0
    .why-btn
      width 590px
      margin 0 auto 46px
      display flex
      span
        color #fff
        background #1493cf
        width 480px
        display inline-block
        height 64px
        line-height 64px
        text-align center
        font-size 41px
        border-radius 4px
        letter-spacing 16px
        margin 34px 30px 0 0
        cursor pointer
      .icondianji-
        color #1493cf
        font-size 90px
        cursor pointer
    .why-intro
      color #1493cf
      font-size 28px
      text-align center
      p
        margin-bottom 4px
    .why-Advantage
      width 950px
      margin 80px auto
      display flex
      .item
        width 190px
        line-height 190px
        text-align center
        border-radius 50%
      .circle
        background #1493cf
        font-size 50px
        color #fff
      .plus
        color #687c6e
        font-size 50px
.card-box
  padding 0 3% 50px
</style>
