<template>
  <div class="wrapper">
    <div class="my-pic">
      <img src="./assets/img/top-img.jpg" alt="" />
      <div class="text-box">
        <p>ABOUT US</p>
        <p>关 于 我 们</p>
      </div>
    </div>
    <div class="box">
      <div class="content">
        <div class="introduce">
          <div class="tag box-tag">
            <p class="eng">ABOUT US</p>
            <p>关于我们</p>
          </div>
          <div class="introduce-detail">
            <h4>{{tagName.name1}}</h4>
            <div class="detail-info">
              <div class="imgs">
                <img src="../../assets/img/index-1.jpg" alt="" />
                <img src="../../assets/img/index-2.jpg" alt="" />
              </div>
              <div class="text" v-html="pageItem.context"></div>
            </div>
          </div>
        </div>
        <div class="map-area">
          <div class="title">
            <h4>{{tagName.name2}}</h4>
          </div>
          <div class="map">
            <img v-if="languageType==1" src="../../assets/img/index-map.jpg" alt="" />
            <img v-else src="../../assets/img/index-map2.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import mixins from "../../mixins/index.js";
export default {
  mixins: [mixins],
  data() {
    return {};
  },
  computed: {
    tagName() {
      if (this.languageType == 1) {
        return {
          name1: "公司介绍",
          name2: "产品销售区域"
        };
      } else {
        return {
          name1: "Company Introduction",
          name2: "Product Sales Area"
        };
      }
    }
  },
  created() {
    this.pageSort = 6;
    if (this.menuData.length == 0) {
      this.getMenuInfo();
    }
  },
  methods: {}
};
</script>
<style lang="stylus" scoped>
.box
  border-top 2px solid #6e6e6e
  .content
    padding 40px 24px 20px
    .introduce
      display flex
    .introduce-detail
      flex 1
      padding 100px 0 0 40px
      h4
        color #1493cf
        font-size 23px
        font-weight 400
        position relative
        text-indent 30px
        &:before
          width 20px
          height 20px
          content ''
          background #1493cf
          border-radius 1px
          display inline-block
          vertical-align middle
          position absolute
          left 0
          top 8px
      .detail-info
        padding 20px 0 40px
        display flex
        .imgs
          width 44%
          padding-right 40px
          img
            margin-bottom 10px
        .text
          width 56%
          color #3e3f3f
          text-align justify
  .map-area
    .title
      margin-bottom 10px
      h4
        margin-left 220px
        color #1493cf
        font-size 23px
        font-weight 400
        position relative
        text-indent 30px
        &:before
          width 20px
          height 20px
          content ''
          background #1493cf
          border-radius 1px
          display inline-block
          vertical-align middle
          position absolute
          left 0
          top 8px
</style>
