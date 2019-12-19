<template>
  <div class="wrapper">
    <div class="box">
      <ul>
        <li>
          <span class="tag">编辑菜单:</span>
          <div class="tag-content">
            <span
              v-for="item in editNavList"
              :class="['btn', { 'active-btn': item.sort == menuValue }]"
              :key="item.sort"
              @click="handleChangeMenu(item.sort)"
              >{{ item.cnName }}</span
            >
          </div>
        </li>
        <!-- <li>
          <span class="tag">别名(中文):</span>
          <a-input
            v-model="aliseCnName"
            placeholder="请输入别名(中文)"
            size="large"
          />
        </li>
        <li>
          <span class="tag">别名(英文):</span>
          <a-input
            v-model="aliseEnName"
            placeholder="请输入别名(英文)"
            size="large"
          />
        </li> -->
        <!-- <li>
          <span class="tag">上传图片:</span>
          <upload />
        </li> -->
        <template v-if="[1, 3, 4, 6].includes(menuValue)">
          <li>
            <span class="tag">内容(中文):</span>
            <wangeditor ref="cnContent" />
          </li>
          <li>
            <span class="tag">内容(英文):</span>
            <wangeditor ref="enContent" />
          </li>
        </template>
        <template v-else-if="[2].includes(menuValue)">
          <li>
            <span class="tag">一级产品目录:</span>
            <div class="tag-content">
              <span
                v-for="item in pageItem.subMenus"
                :class="['btn', { 'active-btn': item.id == productId1 }]"
                :key="item.id"
                @click="handleChangeSubmenu(item, 1)"
                >{{ item.name }}</span
              >
            </div>
          </li>
          <li>
            <span class="tag">二级产品目录:</span>
            <div class="tag-content">
              <span
                v-for="item in secondProductList"
                :class="['btn', { 'active-btn': item.id == productId2 }]"
                :key="item.id"
                @click="handleChangeSubmenu(item, 2)"
                >{{ item.name }}</span
              >
              <span class="btn"><i class="iconfont iconjia"></i> 添加</span>
            </div>
          </li>
          <li>
            <span class="tag"
              >{{ languageType == 1 ? "产品名称" : "ProductName" }}:</span
            >
            <a-input
              v-model="productName"
              placeholder="请输入名称"
              size="large"
            />
          </li>
          <li>
            <span class="tag">材质:</span>
            <a-input v-model="material" placeholder="请输入材质" size="large" />
          </li>
          <li>
            <span class="tag">特点:</span>
            <a-input
              v-model="specialty"
              placeholder="请输入特点"
              size="large"
            />
          </li>
          <li>
            <span class="tag">应用:</span>
            <a-input
              v-model="adhibition"
              placeholder="请输入应用"
              size="large"
            />
          </li>
          <!-- <li>
            <span class="tag">英文名:</span>
            specialty: '',
            // 应用
            adhibition: '',
            <a-input v-model="enName" placeholder="请输入英文名" size="large" />
          </li> -->
          <li>
            <span class="tag">上传图片:</span>
            <upload class="upload" @changeFile="changeFile" />
          </li>
        </template>
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
import OssUpload from "../../components/OssUpload.vue";
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
      editorTimer: "",
      menuValue: -1,
      // 名称
      productName: "",
      // 材质
      material: "",
      // 特点
      specialty: "",
      // 应用
      adhibition: "",
      productId1: "",
      productId2: "",
      secondProductList: [],
      // 内容
      cnContent: "",
      enContent: "",
      // 文件列表
      fileList: []
    };
  },
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
      if (this.menuValue == 6) {
        this.cnContent = this.pageItem.cnContext;
        this.enContent = this.pageItem.enContext;
      } else {
        this.editorTimer = setTimeout(() => {
          if (this.$refs.cnContent && this.$refs.enContent) {
            this.$refs.cnContent.setContent(this.pageItem.cnContext);
            this.$refs.enContent.setContent(this.pageItem.enContext);
            clearTimeout(this.editorTimer);
          } else {
            clearTimeout(this.editorTimer);
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
      if ([1, 3, 4, 6].includes(val)) {
        this.queryMenuContent();
      } else {
        clearTimeout(this.editorTimer);
      }
    },
    // 选择产品
    handleChangeSubmenu(item) {
      console.log(item);
      this.productId1 = item.id;
      this.secondProductList = item.subMenus;
    },
    // 选择文件
    changeFile(file) {
      this.fileList = file;
    },
    // 确定编辑
    sureEdit() {
      if (this.menuValue == -1) return false;
      let index = this.initNavList.findIndex(
        val => val.sort === this.menuValue
      );
      console.log("index==", index, this.initNavList[index]);
      if (index == -1) {
        this.$message.warning("没有这个菜单");
        return false;
      }
      let listItem = this.initNavList[index];
      // 参数
      let params = {};
      switch (this.menuValue) {
        case 1:
        case 3:
        case 4:
        case 6:
          let cnContent = this.$refs.cnContent.getContent();
          let enContent = this.$refs.enContent.getContent();
          if (!cnContent) {
            this.$message.warning("文内容不能为空");
            return false;
          }
          if (!enContent) {
            this.$message.warning("英文内容不能为空");
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
        case 2:
          if (!this.productId1) {
            this.$message.warning("请选择一级产品");
            return false;
          }
          if (!this.productName) {
            this.$message.warning("请输入产品名称");
            return false;
          }
          if (!this.material) {
            this.$message.warning("请输入材质");
            return false;
          }
          if (!this.specialty) {
            this.$message.warning("请输入产品特点");
            return false;
          }
          if (this.fileList.length < 1) {
            this.$message.warning("请导入图片");
            return false;
          }

          params = {
            adhibition: this.adhibition,
            attachment: this.fileList[0].url,
            material: this.material,
            menuId: this.productId1,
            name: this.productName,
            specialty: this.specialty
          };
          console.log("params==", params);
          this.axios
            .post(`product/add_product`, params)
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
    width 90%
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
    .tag-content
      flex 1
      display flex
      flex-wrap wrap
      .btn
        font-size 18px
        color #666
        padding 0 20px
        border 1px solid #d9d9d9
        line-height 40px
        margin 0 10px 10px 0
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
    .upload
      flex 1
.btn-box
  margin 20px auto 60px
</style>
