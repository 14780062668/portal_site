<template>
  <div class="wrapper">
    <div class="my-pic">
      <img src="./assets/img/top-img.jpg" alt="" />
      <div class="text-box">
        <p>PRODUCTS</p>
        <p>产品中心</p>
      </div>
    </div>
    <div class="box">
      <div class="content">
        <div class="introduce">
          <div class="tag box-tag">
            <p class="eng">PRODUCTS</p>
            <p>产品中心</p>
          </div>
          <div class="introduce-detail">
            <div class="detail-info">
              <div class="text">
                <p>
                  Seehow Company was equipped advanced multi-axis CNC machining
                  centers and press machines which is fully supported by the
                  latest CAD or 3D software and has the added ability to accept
                  electronic drawings and models. This is complimented by CNC
                  CMM inspection facilities enabling us to inspect machined
                  components with high accuracy and exactly match other assorted
                  parts for your further assembly Our advantage lies in our
                  ability to respond swiftly to customer requirements through
                  our dynamic and versatile workforce. Our CNC production
                  facility has the capacity to process batches from prototypes
                  to automatic mass production. The latest manufacturing
                  technology and techniques are employed to ensure all our
                  products are supplied correct to drawing and on time.
                </p>
                <p>
                  We deliver machined parts: Zero defects, complex, critical
                  precision machined components and assemblies. We deliver our
                  service: our professional know-how and lean systems reduce
                  costs while improving quality and quick turnaround, and our
                  outstanding engineers offer the technical backup in vacuum
                  fields. We deliver solution: Strategic partnership with our
                  suppliers streamlines production and ensures us provide one
                  stop sourcing or turn-key project for all you needed with an
                  extremely high on-time delivery rate.
                </p>
                <p>
                  Our main CNC Equipments List – From Prototype to Production
                </p>
                <p>
                  6 Sets of Mutiple- axis CNC Machining Centers <br />
                  21 Sets of CNC Lathes <br />
                  4 Sets of CNC Mills <br />
                  2 Sets of Wire EDM Machines <br />
                  2 Sets of Drilling Machines <br />
                  10 Sets of Stamping Machines
                </p>
                <p>
                  CNC Machining Capacities to 50 mm in Diameter Bar for Auto-
                  Feeding and to 200mm in Diameter for Chucked
                </p>
              </div>
            </div>
          </div>
        </div>
        <ul class="img-box">
          <li><img src="./assets/img/1.jpg" alt="" /></li>
          <li><img src="./assets/img/2.jpg" alt="" /></li>
          <li><img src="./assets/img/3.jpg" alt="" /></li>
          <li><img src="./assets/img/4.jpg" alt="" /></li>
          <li><img src="./assets/img/5.jpg" alt="" /></li>
          <li><img src="./assets/img/6.jpg" alt="" /></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mixins: [],
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
        padding 20px 0 40px
        p
          line-height 2
          font-size 16px
          margin-bottom 30px
  .img-box
    padding 100px 0 20px
    display flex
    flex-wrap wrap
    li
      padding 0 14px 14px 0
      height 276px
      &:first-child
        width 33.3%
      &:nth-child(2)
        width 33.3%
      &:nth-child(3)
        width 33.3%
      &:nth-child(4)
        width 45%
      &:nth-child(5)
        width 21.6%
      &:nth-child(6)
        width 33.3%
      img
        width 100%
        height 100%

</style>
