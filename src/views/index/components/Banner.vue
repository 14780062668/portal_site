<template>
  <div class="banner-box">
    <img src="../../../assets/img/index-1.jpg" alt="" />
    <!-- <ul id="list">
      <li>
        <img src="../../../assets/img/index-1.jpg" alt="" />
      </li>
      <li><img src="../../../assets/img/index-2.jpg" alt="" /></li>
    </ul> -->
    <!-- <a-carousel autoplay>
      <div class="item"><img src="../../../assets/img/index-1.jpg" alt="" /></div>
      <div class="item"><img src="../../../assets/img/index-2.jpg" alt="" /></div>
      <div class="item"><img src="../../../assets/img/index-1.jpg" alt="" /></div>
      <div class="item"><img src="../../../assets/img/index-2.jpg" alt="" /></div>
    </a-carousel> -->
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
  created() {},
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
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 700px;
  line-height: 700;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
</style>
