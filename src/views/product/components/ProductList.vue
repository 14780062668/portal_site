<template>
  <ul id="list-box">
    <li v-for="item in productList" :key="item.id" @click="goDetail(item)">
      <div class="img-box">
        <img :src="item.imgUrl" alt="">
        <div class="hover-text">
          <p>{{item.cnName}}</p>
          <p><i class="iconfont iconjia"></i></p>
        </div>
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    productList: {
      type: Array,
      default: []
    }
  },
  components: {},
  data() {
    return {
    };
  },
  computed: {},
  methods: {
    // 查看详情
    goDetail(item){
      this.$emit('goDetail', item);
    }
  }
};
</script>
<style lang="stylus" scoped>
ul
  display flex
  flex-flow wrap
li
  border 1px solid #231913
  border-radius 2px
  padding 36px
  cursor pointer
  margin 0 0 80px 80px
  .img-box
    width 260px
    height 260px
    border-radius 2px
    position relative
    overflow hidden
    img
      width 100%
      height 100%
    .hover-text
      position absolute
      left 0
      right 0
      top 86px
      color #fff
      font-size 22px
      opacity 0
      z-index 2
      p
        margin-bottom 0
        text-align center
        padding 0 30px
        i
          font-size 40px
          font-weight 700 
  &:hover
    .img-box
      img
        transform scale(1.2)
        transition 0.5s
      &:after
        content ''
        width 100%
        height 100%
        background #1493cf
        opacity 0.6
        display block
        position absolute
        left 0
        top 0
      .hover-text
        opacity 1
        transition 0.5s
</style>