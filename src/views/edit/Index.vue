<template>
  <div class="wrapper">
    <div class="box">
      <ul>
        <li class="line">
          <span class="tag">编辑菜单:</span>
          <span
            v-for="item in editNavList"
            :class="['btn', { 'active-btn': item.sort == menuValue }]"
            :key="item.sort"
            @click="handleChangeMenu(item.sort)"
            >{{ item.cnName }}</span
          >
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
        <li class="line">
           <span class="tag">上传图片:</span>
            <upload />
        </li>
        <template v-if="[1, 3, 4, 6].includes(menuValue)">
          <li class="line">
            <span class="tag">内容(中文):</span>
            <wangeditor ref="cnContent" />
          </li>
          <li class="line">
            <span class="tag">内容(英文):</span>
            <wangeditor ref="enContent" />
          </li>
        </template>
        <!-- <template v-else-if="[6].includes(menuValue)">
          <li class="line">
            <span class="tag">内容(中文):</span>
            <a-textarea placeholder="请输入内容(中文)" v-model="cnContent" :rows="4"/>
          </li>
          <li class="line">
            <span class="tag">内容(英文):</span>
            <a-textarea placeholder="请输入内容(英文)" v-model="enContent" :rows="4"/>
          </li>
        </template> -->
      </ul>
    </div>
    <div class="btn-box">
      <span class="btn" @click="sureEdit">
        确定修改
      </span>
    </div>
  </div>
</template>
<script>
import mixins from "../../mixins/index.js";
import Upload from "../../components/ButtonUpload.vue";
import Wangeditor from "../../components/Wangeditor.vue";
import OssUpload from '../../components/OssUpload.vue';
export default {
  mixins: [mixins],
  components: {
    Upload,
    Wangeditor,
    OssUpload
  },
  data() {
    return {
      // 默认首页
      menuValue: -1,
      cnContent: '',
      enContent: ''
    };
  },
  computed: {},
  created() {
    this.pageSort = 1;
    if (this.menuData.length == 0) {
      this.getMenuInfo();
    }
  },
  methods: {
    // 查询菜单详情
    queryMenuContent() {
      // this.axios
      //   .get(`content/query_attachment_by_menu_id?menuId=${this.menuValue}`)
      //   .then(data => {
      //     console.log("res===", data);
      //   });
      console.log("设置富文本值");
      if(this.menuValue == 6){
        this.cnContent = this.pageItem.cnContext;
        this.enContent = this.pageItem.enContext;
      }else{
        let timer = setTimeout(() => {
        if (this.$refs.cnContent && this.$refs.enContent) {
          this.$refs.cnContent.setContent(this.pageItem.cnContext);
          this.$refs.enContent.setContent(this.pageItem.enContext);
          clearTimeout(timer);
        } else {
          clearTimeout(timer);
          this.queryMenuContent();
        }
      }, 1000);
      }
      
    },
    // 选择编辑菜单
    handleChangeMenu(val) {
      console.log("val==", val);
      this.menuValue = val;
      this.pageSort = val;
      this.queryMenuContent();
    },
    // 确定编辑
    sureEdit() {
      if(this.menuValue == -1) return false;
      let index = this.initNavList.findIndex(
        val => val.sort === this.menuValue
      );
      console.log("index==", index, this.initNavList[index]);
      if (index == -1) {
        this.$message.warning('没有这个菜单');
        return false;
      }
      let listItem = this.initNavList[index];
      switch (this.menuValue) {
        case 1:
        case 3:
        case 4:
        case 6:
          let cnContent = this.$refs.cnContent.getContent();
          let enContent = this.$refs.enContent.getContent();
          if (!cnContent) {
            this.$message.warning('文内容不能为空');
            return false;
          }
          if (!enContent) {
            this.$message.warning('英文内容不能为空');
            return false;
          }
          // 中文编辑
          this.axios
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
          this.axios
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
          this.axios
            .post(`content/update_menu_info`, {
              alias: this.aliseCnName,
              context: "",
              id: listItem.cnId,
              name: listItem.name
            })
            .then(({ data }) => {
              console.log("res===", data);
            });
          this.axios
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
      font-size 18px
      color #666
      padding 0 20px
      border 1px solid #d9d9d9
      line-height 40px
      margin-right 10px
      border-radius 4px
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
.btn-box
  margin 20px auto 60px
</style>
