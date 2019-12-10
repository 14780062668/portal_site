<template>
  <ul id="list-box">
    <li v-for="item in list" :key="item.id" @click="goProduct(item)">
      <div class="img-box">
        <img :src="item.imgUrl" alt="" />
        <div class="hover-text">
          <p>{{ item.name }}</p>
          <p><i class="iconfont iconjia"></i></p>
        </div>
      </div>
    </li>
  </ul>
</template>
<script>
import mixins from "../../../mixins/index.js";
export default {
  mixins: [mixins],
  data() {
    return {
      listData: [
        {
          id: 3,
          cnName: "真空法兰",
          enName: "KF Flanges and CF Flanges",
          imgUrl: require("../assets/product/2.jpg")
        },
        {
          id: 5,
          cnName: "BNC和SHV接头外壳",
          enName: "BNC & SHV Adapter and Sockets",
          imgUrl: require("../assets/product/1.jpg")
        },
        {
          id: 7,
          cnName: "可伐连接器",
          enName: "Kovar Machined Adapters and headers",
          imgUrl: require("../assets/product/3.jpg")
        },
        {
          id: 9,
          cnName: "可伐连接针",
          enName: "Machined Kovar Conatcts and Conductors",
          imgUrl: require("../assets/product/5.jpg")
        },
        {
          id: 18,
          cnName: "其他铜端子",
          enName: "Machined Copper Ternimals and Connectors",
          imgUrl: require("../assets/product/4.jpg")
        },
        {
          id: 19,
          cnName: "蒙乃尔合金加工件",
          enName: "Monel Machined Parts",
          imgUrl: require("../assets/product/6.jpg")
        }
      ]
    };
  },
  computed: {
    list() {
      return this.listData.map(val => {
        return {
          id: val.id,
          name: this.languageType == 1 ? val.cnName : val.enName,
          imgUrl: val.imgUrl
        };
      });
    }
  },
  methods: {
    // 到产品详情
    goProduct(item){
      console.log('item==', item);
      this.$router.push({
        path: 'product',
        query: {
          id: item.id
        }
      })
    }
  }
};
</script>
<style lang="stylus" scoped>
ul
  display flex
  flex-flow wrap
  padding-right 60px
  width 1200px
  margin 0 auto
li
  border 1px solid #231913
  border-radius 1px
  padding 26px
  cursor pointer
  margin 0 0 60px 60px
  .img-box
    width 266px
    height 266px
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
