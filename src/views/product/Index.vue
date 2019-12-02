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
        <div class="tag box-tag">
          <p class="eng">PRODUCTS</p>
          <p>产品中心</p>
        </div>
        <div class="product-box">
          <ul class="nav-list">
            <li
              v-for="item in navList"
              :key="item.id"
              @click="changeNav(item)"
              :class="[{ activeNav: activeNav == item.id }]"
            >
              {{ item.cnName }}
            </li>
          </ul>
          <div class="product-content">
            <product-detail v-if="hasDetail"
              :detailData="detailData"
              @goList="goList" />
            <product-list  
              v-else
              :productList="productList"
              @goDetail="goDetail"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProductList from "./components/ProductList.vue";
import ProductDetail from "./components/ProductDetail.vue";
export default {
  components: {
    ProductList,
    ProductDetail
  },
  data() {
    return {
      navList: [
        {
          id: 1,
          cnName: "不锈钢加工件",
          enName: "CNC Machined Steel Parts",
          children: [
            {
              id: 1,
              cnName: "电渣重熔316不锈钢加工件",
              enName: "Electroslag Remelting 316SS Parts"
            },
            {
              id: 2,
              cnName: "304和316不锈钢加工件",
              enName: "304SS and 316SS Machined Parts"
            },
            {
              id: 3,
              cnName: "真空法兰",
              enName: "KF Flanges and CF Flanges"
            },
            {
              id: 4,
              cnName: "机加工接头",
              enName: "Machined Terminals and Connectors"
            },
            {
              id: 5,
              cnName: "BNC和SHV接头外壳",
              enName: "BNC & SHV Adapter Sockets"
            },
            {
              id: 6,
              cnName: "其它钢铁加工件",
              enName: "Other Machined Steel Component"
            }
          ]
        },
        {
          id: 2,
          cnName: "可伐合金加工件",
          enName: "CNC Machined Kovar Parts",
          children: [
            {
              id: 1,
              cnName: "可伐连接器",
              enName: "Kovar Machined Adapters and Sockets"
            },
            {
              id: 2,
              cnName: "可伐插针",
              enName: "Machined Kovar Terminal Pins"
            },
            {
              id: 3,
              cnName: "可伐连接针",
              enName: "Machined Kovar Conatcts and Conductors"
            },
            {
              id: 4,
              cnName: "可伐端帽",
              enName: "Machined Kovar Sleeves and Caps"
            },
            {
              id: 5,
              cnName: "可伐法兰",
              enName: "Kovar Flanges and Rings"
            },
            {
              id: 6,
              cnName: "其它可伐加工件",
              enName: "Other Machined Kovar Components"
            }
          ]
        },
        {
          id: 3,
          cnName: "英科镍加工件",
          enName: "CNC Machined Inconel and Incoloy Parts",
          children: [
            {
              id: 1,
              cnName: "英科镍加工件",
              enName: "Inconel Machined Parts"
            },
            {
              id: 2,
              cnName: "因科镍加工件",
              enName: "IncoloyMachined Parts"
            }
          ]
        },
        {
          id: 4,
          cnName: "镍铝及镍铬加工件",
          enName: "CNC Machined Chromel and Alumel Parts",
          children: [
            {
              id: 1,
              cnName: "镍铬插针",
              enName: "Machined Chromel Terminal Pins"
            },
            {
              id: 2,
              cnName: "镍铬插针",
              enName: "Machined Alumel Terminal Pins"
            }
          ]
        },
        {
          id: 5,
          cnName: "铜加工件",
          enName: "CNC Machined Copper Parts",
          children: [
            {
              id: 1,
              cnName: "铍铜加工件",
              enName: "Beryllium Copper Machined Parts"
            },
            {
              id: 2,
              cnName: "其他铜端子",
              enName: "Machined Copper Ternimals and Connectors"
            }
          ]
        },
        {
          id: 6,
          cnName: "其他合金加工件",
          enName: "Other CNC Machined Parts",
          children: [
            {
              id: 1,
              cnName: "蒙乃尔合金加工件",
              enName: "Monel Machined Parts"
            },
            {
              id: 2,
              cnName: "哈氏合金加工件",
              enName: "Hastelloy Machined Parts"
            },
            {
              id: 3,
              cnName: "因瓦合金加工件",
              enName: "Invar Machined Parts"
            },
            {
              id: 4,
              cnName: "其它镍合金加工件",
              enName: "Nickel Alloy Machined Parts"
            },
            {
              id: 5,
              cnName: "铝合金加工件",
              enName: "Aluminum Alloy Machined Parts"
            },
            {
              id: 6,
              cnName: "钼合金加工件",
              enName: "Molybdenum Machined Parts"
            }
          ]
        },
        {
          id: 7,
          cnName: "陶瓷金属封接件",
          enName: "Ceramic to Metal Assemblies",
          children: [
            {
              id: 1,
              cnName: "各类封接件",
              enName: "Ceramic to Metal Brazed Parts"
            }
          ]
        }
      ],
      activeNav: 1,
      // 是否在详情
      hasDetail: false,
      detailData: {}
    };
  },
  computed: {
    productList() {
      let result = [];
      let item = this.navList.find(val => val.id === this.activeNav);
      if (item.children) {
        result = item.children;
      }
      return result;
    }
  },
  created() {},
  methods: {
    // 切换nav
    changeNav(item) {
      this.activeNav = item.id;
      this.goList();
    },
    // 查看资源详情
    goDetail(item) {
      console.log("item=-==", item);
      this.detailData = item;
      this.hasDetail = true;
    },
    // 返回列表
    goList(){
      this.hasDetail = false;
      this.detailData = {};
    }
  }
};
</script>
<style lang="stylus" scoped>
$color-main = #1493cf
.box
  border-top 2px solid #6e6e6e
  .content
    padding 40px 24px 20px
    .product-box
      display flex
      margin-top 30px
      .nav-list
        width 300px
        li
          font-size 18px
          color #333
          margin-bottom 30px
          cursor pointer
          &:before
            content ''
            width 14px
            height 14px
            display inline-block
            border-radius 1px
            margin-right 16px
        .activeNav
          &:before
            background $color-main
      .product-content
        flex 1
        padding 10px 0 80px
  .activeNav
    color $color-main
</style>
