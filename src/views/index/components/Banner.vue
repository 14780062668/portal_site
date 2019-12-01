<template>
  <div class="banner-box">
    <a-carousel>
      <div class="item">
        <img src="../assets/img/banner-0.jpg" alt="" />
        <div class="text-box">
          <div class="info">
            <p>Precision Machining Service autoplay</p>
            <p>Professional Manufacturer for CNC Machined Parts</p>
          </div>
        </div>
      </div>
      <div class="item">
        <img src="../assets/img/banner-1.jpg" alt="" />
      </div>
      <div class="item">
        <img src="../assets/img/banner-2.jpg" alt="" />
      </div>
      <div class="item">
        <img src="../assets/img/banner-3.jpg" alt="" />
      </div>
      <div class="item">
        <img src="../assets/img/banner-4.jpg" alt="" />
      </div>
    </a-carousel>
  </div>
</template>
<script>
export default {
  mixins: [],
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  mounted() {
    // let $box = document.querySelector(".banner-box");
    // let outWidth = $box.offsetWidth;
    // let $content = $box.querySelector(".content");
    // let $list = $content.querySelectorAll(".list");
    // let style = document.styleSheets;
    // this.listStyle = {
    //   width: `${outWidth}px`
    // };
    // let listLen = $list.length;
    // let contentWidth = outWidth * listLen;
    // this.contentStyle = {
    //   width: `${contentWidth}px`,
    //   animation: `run  2s linear infinite`
    // };
    // alert(outWidth);
  },
  methods: {}
};
</script>
<style lang="stylus" scoped>
$bannerHeight = 500px
.banner-box
  margin-bottom 40px
  position relative
  overflow hidden
  width 100%
  height $bannerHeight
  .text-box
    font-size 26px
    color #fff
    position absolute
    left 0
    right 0
    top 180px
    text-align left
    .info
      width 628px
      margin 0 auto
    p
      margin-bottom 0

.ant-carousel >>> .slick-slide {
  text-align: center;
  width: 100%;
  height: $bannerHeight;
  background: #364d79;
  overflow: hidden;
  position: relative;
}

.ant-carousel >>> .slick-slide img {
  width: 100%;
  height: $bannerHeight;
}
</style>
