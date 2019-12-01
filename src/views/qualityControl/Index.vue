<template>
  <div class="wrapper">
    <div class="my-pic">
      <img src="./assets/img/top-img.jpg" alt="" />
      <div class="text-box">
        <p>QUALITY CONTROL</p>
        <p>质量控制</p>
      </div>
    </div>
    <div class="box">
      <div class="content">
        <div class="introduce">
          <div class="tag box-tag">
            <p class="eng">QUALITY<br />CONTROL</p>
            <p>质量控制</p>
          </div>
          <div class="introduce-detail">
            <div class="detail-info">
              <div class="text">
                <p>
                  Seehao Company made quality the cornerstone of our business.
                  Quality control is paramount inside of our company. ISO 9001
                  accreditation ensures that all work is controlled and
                  monitored with an emphasis on continual improvement. To
                  guarantee the machined parts are to the quality you required,
                  we have invested in the latest inspection equipments including
                  projector, CMM. We ensure that raw materials, machined
                  components, sub-contract services, heat treatments and surface
                  treatments are completed match to each customers’
                  specification. Full standard and bespoke documentation and
                  material traceability are provided.
                </p>
                <p>
                  Having documented-controlled processes, professional quality
                  technicians and experienced production teams, we are able to
                  meet your specific quality requirements. Through the use of
                  various tools that include PPAP, APQP, FEMA and SPC, we
                  continually and successfully guarantee that our commitments to
                  you are met.
                </p>
                <p>
                  We are committed to enlisting the full support of all our
                  employees to continuously improve our machining and enhance
                  quality, thereby fulfilling our customer's needs with zero
                  defect machined products and services, on time and every time.
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
        width 45%
      &:nth-child(2)
        width 21.6%
      &:nth-child(3)
        width 33.3%
      &:nth-child(4)
        width 33.3%
      &:nth-child(5)
        width 33.3%
      &:nth-child(6)
        width 33.3%
      img
        width 100%
        height 100%
</style>
