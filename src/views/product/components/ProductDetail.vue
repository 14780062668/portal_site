<template>
  <div class="detail">
    <div class="img">
      <img :src="detailData.imgUrl" alt="" />
    </div>
    <ul class="detail-info">
      <li><span class="tag">名称:</span>{{ detailData.cnName }}</li>
      <li><span class="tag">材质:</span>{{ detailData.cnName }}</li>
      <li><span class="tag">特点:</span>{{ detailData.cnName }}</li>
      <li><span class="tag">应用:</span>{{ detailData.cnName }}</li>
    </ul>
    <div class="btn-box">
      <span class="btn" @click="goList">
        返回列表
      </span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    detailData: {
      type: Object,
      default: {}
    }
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  methods: {
    // 返回列表
    goList(){
      this.$emit('goList');
    }
  }
};
</script>
<style lang="stylus" scoped>
.box
  .img
    padding 36px
    border 1px solid #231913
    width 700px
    img
      width 100%
      height 100%
  .detail-info
    padding 54px 18px 120px
    color #1493cf
    li
      display flex
      font-size 18px
      line-height 30px
      margin-bottom 26px
      .tag
        margin-right 10px
</style>
