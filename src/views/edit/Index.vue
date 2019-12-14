<template>
  <div class="wrapper">
    <div class="box">
      <ul>
        <li class="line">
          <span class="tag">编辑菜单:</span>
          <a-select v-model="menuValue" size="large" @change="handleChangeMenu">
            <a-select-option v-for="item in initNavList" :key="item.sort">{{
              item.name
            }}</a-select-option>
          </a-select>
        </li>
        <li class="line">
          <span class="tag">别名(中文):</span>
          <a-input
            v-model="aliseCnName"
            placeholder="请输入别名"
            size="large"
          />
        </li>
        <li class="line">
          <span class="tag">别名(英文):</span>
          <a-input
            v-model="aliseEnName"
            placeholder="请输入别名"
            size="large"
          />
        </li>
      </ul>
    </div>
    <div class="btn-box">
      <span class="btn" @click="sureEdit">
        确定修改
      </span>
    </div>
    <upload />
    <!-- <wangeditor /> -->
  </div>
</template>
<script>
import mixins from "../../mixins/index.js";
import Upload from "../../components/ButtonUpload.vue";
import Wangeditor from "../../components/Wangeditor.vue";
export default {
  mixins: [mixins],
  components: {
    Upload,
    Wangeditor
  },
  data() {
    return {
      // 默认首页
      menuValue: 1,
      // 别名
      aliseCnName: "",
      aliseEnName: ""
    };
  },
  computed: {},
  created() {
    this.queryMenuContent();

  },
  methods: {
    // 查询菜单详情
    queryMenuContent() {
      this.$ajax
        .get(`content/query_attachment_by_menu_id?menuId=${this.menuValue}`)
        .then(data => {
          console.log("res===", data);
        });
    },
    // 选择编辑菜单
    handleChangeMenu(val) {
      console.log("val==", val);
      this.menuValue = val;
      this.queryMenuContent();
    },
    // 确定编辑
    sureEdit() {
      let index = this.initNavList.findIndex(
        val => val.sort === this.menuValue
      );
      console.log("index==", index);
      if (index == -1) return false;
      let param = {
        alias: this.aliseCnName,
        context: null,
        id: this.menuValue,
        name: this.initNavList[index].name
      };
      this.$ajax.post(`content/update_menu_info`, param).then(({ data }) => {
        console.log("res===", data);
      });

      console.log("编辑==", this.param);
      // 更新菜单
      // this.$ajax
      //   .post(`content/update_menu_info`, {
      //     alias: "222",
      //     context: "w w",
      //     id: 1,
      //     name: "首页"
      //   })
      //   .then(({ data }) => {
      //     console.log("res===", data);
      //   });
    }
  }
};
</script>
<style lang="stylus" scoped>
.box
  margin-top 40px
  ul
    width 800px
    margin 80px auto 100px
  li
    display flex
    margin-bottom 30px
    .tag
      font-size 26px
      color #333
      padding-right 20px
      width 180px
      text-align right
    .ant-input
      width calc(100% - 200px)
    .ant-select
      width calc(100% - 200px)
</style>
