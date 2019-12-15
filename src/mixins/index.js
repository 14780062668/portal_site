import { mapState, mapGetters } from "vuex";
export default {
  computed: {
    ...mapState({
      // 语言类型
      languageType: "languageType",
      // 菜单总数据
      menuData: 'menuData'
    }),
    ...mapGetters({
      // 主导航
      navList: "navList",
      // 全部导航
      initNavList: "initNavList",
      // 可编辑的导航
      editNavList: 'editNavList'
    }),
    pageItem() {
      let items = [];
      if (this.menuData.length == 0) return {};
      items = this.menuData.filter(val => val.sort == this.pageSort);
      let enItem = {};
      let cnItem = {};
      for (let item of items) {
        if (item.isCh) {
          cnItem = item;
        } else {
          enItem = item;
        }
      }
      return {
        cnId: cnItem.id,
        cnName: cnItem.name,
        cnAlias: cnItem.alias,
        enId: enItem.id,
        enAlias: enItem.alias,
        enName: enItem.name,
        sort: this.pageSort,
        context: this.languageType == 1 ? cnItem.context : enItem.context
      };
    }
  },
  data() {
    return {
      pageSort: 1
    };
  },
  methods: {
    /**
     * 获取uuid
     */
    riseUuid() {
      let time = new Date().getTime();
      let random = Math.ceil(Math.random() * 10000);
      let random2 = Math.ceil(Math.random() * 10000);
      return `id-${time}-${random}-${random2}`;
    },
    // 获取菜单数据
    getMenuInfo() {
      this.$ajax.get(`content/query_menu_info`).then(({ data }) => {
        console.log("res===", data);
        this.$store.commit('changeMenuData', data);
      });
    }
  }
};
