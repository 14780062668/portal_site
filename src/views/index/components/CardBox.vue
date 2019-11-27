<template>
  <div class="card-box">
    <div class="title-box">
      <div class="tag">
        <p>QUALITY</p>
        <p>CONTROL</p>
        <p>质量控制</p>
      </div>
    </div>
    <ul class="card-list">
      <li>
        <img src="../../../assets/img/card/1.jpg" alt="">
      </li>
      <li>
        <img src="../../../assets/img/card/2.jpg" alt="">
      </li>
      <li>
        <img src="../../../assets/img/card/3.jpg" alt="">
      </li>
      <li>
        <img src="../../../assets/img/card/4.jpg" alt="">
      </li>
    </ul>
  </div>
</template>
<script>
export default {
 mixins:[],
 props:{},
 components:{},
  data(){
    return {
    }
  },
  computed:{},
  created(){},
  methods:{},
}
</script>
<style lang="stylus" scoped>
.card-box
  .title-box
    position relative
    &:after
      content ''
      position absolute
      left 190px
      top 92px
      right 0
      height 1px
      background #3f3f3f
      opacity 0.4
    .tag
      background-image linear-gradient(#31a9e5, #144da2)
      color #e0e0e0
      border-radius 2px
      width 172px
      height 162px
      padding 22px 0 0 16px
      font-size 24px
      p
        margin-bottom 0
        color #fff
  .card-list
    margin-top 60px
    display flex
    flex-flow wrap
    li
      width 274px
      height 368px
      &:nth-child(n+2)
        margin-left 40px
        border 1px solid #9f9f9f
      img
        width 100%
        height 100%
</style>