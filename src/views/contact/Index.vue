<template>
  <div class="wrapper">
    <div class="my-pic">
      <img src="./assets/img/top-pic.jpg" alt="" />
      <div class="text-box">
        <p>CONTACT US</p>
        <p>联系我们</p>
      </div>
    </div>
    <div class="box">
      <div class="content">
        <div class="introduce">
          <div class="tag box-tag">
            <p>CONTACT US</p>
            <p>联系我们</p>
          </div>
          <div class="introduce-detail">
            <div class="detail-info">
              <div class="text">
                <div class="info-name">
                  <h2 class="cn-name">余姚市思豪真空科技有限公司</h2>
                  <p>YUYAO SEEHAO VACUUM TECHNOLOGY CO.LTD</p>
                </div>
                <div class="info-message">
                  <div class="tag-line">
                    <span class="tag">地址:</span>
                    浙江省余姚市凤山街道九垒山村下陈渡86号
                  </div>
                  <div class="tag-line">
                    <span class="tag">电话:</span>
                    0574-62676122
                    <span class="tag" style="margin-left:14px;">传真:</span>
                    0574-62676802
                  </div>
                  <div class="tag-line">
                    <span class="tag">联系人:</span>周泉君
                  </div>
                  <div class="tag-line">
                    <span class="tag">手机:</span>13335844026
                  </div>
                  <div class="tag-line">
                    <span class="tag">邮件:</span>tony@fine-boon.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <area-map class="area-map" />
      </div>
    </div>
  </div>
</template>
<script>
import AreaMap from '../../components/AreaMap.vue';
export default {
  components: {
    AreaMap
  },
  data() {
    return {};
  },
  computed: {},
  created() {},
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
      padding 136px 0 0 120px
      flex 1
      .detail-info
        padding 20px 0 40px 80px
        .info-name
          margin-bottom 60px
          h2
            color #1493cf
            margin-bottom 0
            font-size 50px
            line-height 54px
            font-weight 400
          p
           color #1493cf
           font-size 27px
        .info-message
          .tag-line
            font-size 28px
            color #333
            padding 8px 0
            .tag
              margin-right 12px
  .area-map
    padding 50px 0 160px
</style>
