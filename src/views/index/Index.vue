<template>
  <div class="wrapper">
    <banner />  
    <!-- <div class="my-pic">
      Banner
      <img src="../assets/img/index-1.jpg" alt="" />
      <img src="../assets/img/index-2.jpg" alt="" />
      <img src="../assets/img/index-1.jpg" alt="" />
    </div> -->
    <div class="box">
      <div class="content">
        <div class="introduce">
          <div class="tag">
            <p>ABOUT US</p>
            <p>关于我们</p>
          </div>
          <div class="introduce-detail">
            <h4>公 司 介 绍</h4>
            <div class="detail-info">
              <div class="imgs">
                <img src="../../assets/img/index-1.jpg" alt="" />
                <img src="../../assets/img/index-2.jpg" alt="" />
              </div>
              <div class="text">
                <p>
                  余姚市思豪真空科技有限公司是一家集科、工、贸为一体的机械加工企业。我司于2004年初创，
                  专业加工各类特种合金精密零配件，产品主要用于各类真空成套设备及检测仪器。
                  经过十多年的拼搏，我司逐步发展壮大，并于2015年3月重新注册成立并开始向出口型加工企业转型。
                </p>
                <p>
                  我司的加工材料包括各种电渣重熔不锈钢加工件，铜合金加工件，可伐合金加工件，镍铝及镍铬合金加工件，
                  各类镍基高温合金加工件等等各类特殊合金加工件。并可提供配套的镀锌，镀锡，镀金等各种表面加工。
                  我司产品可用于陶瓷及玻璃产品的封接，被广泛应用于各类真空电极，传感器，热电偶的组装。
                  我司拥有国内先进的数控加工设备，可满足客户的各类订单较短纳期的交货需求。我司还配备专业的检测设备
                  并培养熟练的品控人员，从而保证了能及时交付各类加工产品，并保证质量的可靠性。
                </p>
                <p>
                  我司的技术人员及操作员工在机械加工行业均有超过二十年的专业经验，熟悉加工件在各类真空设备上的组装及
                  应用。我司在特种合金加工领域建立了一整套完善的供应链系统，建立了成套的从原材料到成品的存储体系，
                  故我司可及时响应客户的各类产品需求，为客户提供一套完整的特种合金加工方案。
                </p>
                <p>
                  随着我司的战略转型和业务方向调整，为了适应国际贸易的需要，我司于2018年初将海外销售部迁往上海，
                  专业从事我司产品的海外销售及出口手续的办理。目前我司的合金加工制品在欧美的发达市场已逐步获得客户的
                  认可和肯定，海外销售规模逐步扩大，目前我司产品已广泛应用于爱发科，可特莱斯科，欧瑞康等成套真空系统中。
                  希望可以和更多的国内外客商携手，共谋企业发展大业！
                </p>
                <p>“专注于真空设备的精密零配件加工”是我司的核心竞争优势！</p>
              </div>
            </div>
          </div>
        </div>
        <div class="map-area">
            <div class="title">
              <h4>产 品 销 售 区 域</h4>
            </div>
            
            <div class="map">
              <img src="../../assets/img/index-map.jpg" alt="">
            </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import Banner from './components/Banner.vue';
export default {
  mixins: [],
  components: {
    Banner
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
      .tag
        background-image linear-gradient(#31a9e5, #144da2)
        color #e0e0e0
        border-radius 2px
        width 180px
        height 100px
        text-align center
        line-height 36px
        padding-top 80px
        font-size 24px
    .introduce-detail
      flex 1
      padding 142px 0 0 50px
      h4
        color #1493cf
        font-size 18px
        font-weight 400
        position relative
        text-indent 28px
        &:before
          width 14px
          height 14px
          content ''
          background #1493cf
          border-radius 1px
          display inline-block
          vertical-align middle
          position absolute
          left 0
          top 6px
      .detail-info
        padding 30px 0 40px
        display flex
        .imgs
          width 44%
          padding-right 40px
        .text
          width 56%
          color #3e3f3f
          p
            line-height 2
            margin-bottom 16px
            text-indent 28px
  .map-area
    .title
      h4
        margin-left 230px
        color #1493cf
        font-size 18px
        font-weight 400
        position relative
        text-indent 28px
        
        &:before
          width 14px
          height 14px
          content ''
          background #1493cf
          border-radius 1px
          display inline-block
          vertical-align middle
          position absolute
          left 0
          top 6px
</style>
