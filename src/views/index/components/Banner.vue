<template>
  <div class="banner-box">
    <a-carousel autoplay >
      <div><img src="../../../assets/img/index-1.jpg" alt=""></div>
      <div><img src="../../../assets/img/index-2.jpg" alt=""></div>
      <div><img src="../../../assets/img/index-1.jpg" alt=""></div>
      <div><img src="../../../assets/img/index-2.jpg" alt=""></div>
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
.banner-box
  margin-bottom 40px
  position relative
  overflow hidden
  width 100%
  height 700px
  .content
    display flex
    .list
      overflow hidden
      flex-shrink 0
.ant-carousel >>> .slick-slide {
  text-align: center;
  width: 100%;
  height: 700px;
  line-height: 700px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel >>> .slick-slide img {
  width: 100%;
  height: 700px;
}
</style>
