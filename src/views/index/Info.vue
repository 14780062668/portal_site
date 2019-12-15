<template>
  <div class="wrapper">
     <div class="my-pic">
      <img src="./assets/img/info-top.jpg" alt="" />
    </div>
    <div class="box">
      <div class="left-icon">
        <img src="./assets/img/info-1.jpg" alt="" />
        <img src="../qualityControl/assets/img/6.jpg" alt="" />
        <img src="./assets/img/info-3.jpg" alt="" />
      </div>
      <div class="right-info" v-html="pageItem.context">
        <!-- <div class="info-item">
          <h4>先进的设备和专业的员工</h4>
          <p>
            我司拥有60多台高端的数控加工及检测设备，专业的工程技术人员。
            可为客户提供真空领域内最专业的机加工服务。我们的工程技术人员都是机械专业出身，
            在真空设备零配件方面具有20多年的专业的加工经验。我司对于小批量试样和大批量的量产都有加工优势，
            可满足客户的各类工程项目的定制件需要。
          </p>
        </div>
        <div class="info-item">
          <h4>值得信赖的质量</h4>
          <p>
            我们拥有强大的工程技术团队和完善的质量控制体系，员工都受过专业的质量培训，
            我们秉性“持续改善”的生产理念，追求更好的品质。我们对客户的质量标准进行详细的分析，
            所有的产品在生产中和出货前都要实行100%的二次检验，确保不良品不流入下一工序。从我司采购各类真空部件，
            您不再对各类质量问题感到头疼。让客户满意是我们成功的关键。
          </p>
        </div>
        <div class="info-item">
          <h4>及时的交货期</h4>
          <p>
            我们充分的了解按时交货对于我们客户的生产和组装的重要性，我们的项目经理和销售人员会每日监督所负责的项目
            的生产进度并定期召开项目会议，解决各类潜在的风险，确保新样品和量产产品可以及时完工。
            按时交货是我们不变的承诺！
          </p>
        </div>
        <div class="info-item">
          <h4>满意的客服</h4>
          <p>
            从报价伊始直到最后交货，我们一直都和客户保持着密切的联络。我们及时专业的报价，快速的确认订单，
            对生产过程全程管控并汇报给客户。我们认真倾听您的所有需求并给出我们的专业回复和建议。
            客户的满意是我们不懈的追求！
          </p>
        </div>
        <div class="info-item">
          <h4>超低的价格</h4>
          <p>
            我们建立自己的合金材料和本成品仓库，避免材料价格波动的风险。我们公司稳定的员工也有助于我们降低生产成本。
            在追求高品质的同时我们也成功的控制了产品价格。为客户着想，降低采购成本，我们实现了与客户的双赢，确立了长久的战略合作。
          </p>
          <p style="margin-top:30px;">
            专业的机加工服务是我们的核心优势，思豪真空致力于成为您所依赖的机加工供应商。
            我们很高兴的看到我们的加工和服务逐步得到海内外客户的认可。我们将持续为客户提供最好的机加工服务！
          </p>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
import mixins from '../../mixins/index.js';
import Banner from "./components/Banner.vue";
export default {
  mixins: [mixins],
  components: {
    Banner
  },
  data() {
    return {};
  },
  computed: {},
  created() {
    this.pageSort = 1;
    if (this.menuData.length == 0) {
      this.getMenuInfo();
    }
  },
  methods: {}
};
</script>
<style lang="stylus" scoped>
.box
  padding 40px 120px 100px 150px
  display flex
  .left-icon
    width 150px
    padding-top 6px
    img
      width 150px
      height 150px
      border-radius 50%
      &:nth-child(n+2)
        margin-top 146px
  .right-info
    flex 1
    padding-left 70px
    .info-item
      margin-bottom 30px
      h4
        color #1493cf
        font-size 24px
        margin-bottom 4px
      p
        line-height 30px
</style>
