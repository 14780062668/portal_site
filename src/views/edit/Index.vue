<template>
  <div class="wrapper">
    <div class="box">
      <ul>
        <li class="line">
          <span class="tag">编辑菜单:</span>
          <span v-for="item in editNavList"
            :class="['btn', {'active-btn':item.sort==menuValue}]"
            :key="item.sort" @click="handleChangeMenu(item.sort)">{{item.cnName}}</span>
          <!-- <a-select v-model="menuValue" size="large" @change="handleChangeMenu">
            <a-select-option v-for="item in editNavList" :key="item.sort">{{
              item.cnName
            }}</a-select-option>
          </a-select> -->
        </li>
        <!-- <li class="line">
          <span class="tag">别名(中文):</span>
          <a-input
            v-model="aliseCnName"
            placeholder="请输入别名(中文)"
            size="large"
          />
        </li>
        <li class="line">
          <span class="tag">别名(英文):</span>
          <a-input
            v-model="aliseEnName"
            placeholder="请输入别名(英文)"
            size="large"
          />
        </li> -->
        <template v-if="[1,3, 4, 6].includes(menuValue)">
          <li class="line">
            <span class="tag">内容(中文):</span>
            <wangeditor ref="cnContent" />
          </li>
          <li class="line">
            <span class="tag">内容(英文):</span>
            <wangeditor ref="enContent" />
          </li>
        </template>
      </ul>
    </div>
    <div class="btn-box">
      <span class="btn" @click="sureEdit">
        确定修改
      </span>
    </div>
    <upload />
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
      menuValue: 1
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
      console.log("index==", index, this.initNavList[index]);
      if (index == -1) return false;
      let listItem = this.initNavList[index];
      switch (this.menuValue) {
        case 1:
        case 3:
        case 4:
        case 6:
          let cnContent = this.$refs.cnContent.getContent();
          let enContent = this.$refs.enContent.getContent();
          if (!cnContent) {
            return false;
          }
          if (!enContent) {
            return false;
          }
          // 中文编辑
          this.$ajax
            .post(`content/update_menu_info`, {
              alias: this.cnName,
              context: cnContent,
              id: listItem.cnId,
              name: listItem.name
            })
            .then(({ data }) => {
              console.log("res===", data);
            });
          // 英文文编辑
          this.$ajax
            .post(`content/update_menu_info`, {
              alias: this.enName,
              context: enContent,
              id: listItem.enId,
              name: listItem.enName
            })
            .then(({ data }) => {
              console.log("res===", data);
            });
          break;
        default:
          // 只修改别名  this.menuValue=5
          this.$ajax
            .post(`content/update_menu_info`, {
              alias: this.aliseCnName,
              context: "",
              id: listItem.cnId,
              name: listItem.name
            })
            .then(({ data }) => {
              console.log("res===", data);
            });
          this.$ajax
            .post(`content/update_menu_info`, {
              alias: this.aliseEnName,
              context: "",
              id: listItem.enId,
              name: listItem.name
            })
            .then(({ data }) => {
              console.log("res===", data);
            });
      }

      console.log("编辑==", this.param);
    }
  }
};
</script>
<style lang="stylus" scoped>
.box
  margin-top 40px
  ul
    width 860px
    margin 80px auto 100px
  li
    display flex
    margin-bottom 40px
    .tag
      font-size 24px
      color #333
      padding-right 20px
      width 220px
      text-align right
    .btn
      font-size 20px
      color #333
      padding 2px 20px
      border 1px solid #d9d9d9
      margin-right 10px
      border-radius 30px
      cursor pointer
      &:hover
        color #ffffff
        background #1493cf
        border-color #1493cf
    .active-btn
      color #ffffff
      background #1493cf
      border-color #1493cf
    .ant-input
      flex 1
    .ant-select
      flex 1
    .editor-box
      flex 1
</style>
