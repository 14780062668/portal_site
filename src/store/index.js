import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    // 语言类型
    languageType: 1,
    navListBase: [
      {
        id: 1,
        enId: 13,
        level: 1,
        sort: 1,
        cnName: "首页",
        enName: "index",
        pathName: "index",
        isShow: false
      },
      {
        id: 25,
        enId: 26,
        level: 1,
        sort: 6,
        cnName: "关于思豪",
        enName: "About Us",
        pathName: "about_me",
        isShow: true
      },
      {
        id: 2,
        enId: 14,
        level: 1,
        sort: 2,
        cnName: "产品中心",
        enName: "Proudcts",
        pathName: "product",
        isShow: true
      },
      {
        id: 3,
        enId: 15,
        level: 1,
        sort: 3,
        cnName: "生产设备",
        enName: "Equipments",
        pathName: "equipment",
        isShow: true
      },
      {
        id: 4,
        enId: 16,
        level: 1,
        sort: 4,
        cnName: "质量控制",
        enName: "Quality Control",
        pathName: "quality_control",
        isShow: true
      },
      {
        id: 5,
        enId: 17,
        level: 1,
        sort: 5,
        cnName: "联系方式",
        enName: "Contact Us",
        pathName: "contact_us",
        isShow: true
      },
      // {
      //   id: 1000,
      //   enId: 1000,
      //   level: 1,
      //   sort: 1000,
      //   cnName: "编辑",
      //   enName: "edit",
      //   pathName: "edit",
      //   isShow: false
      // }
    ]
  },
  mutations: {
    // 修改语言类型
    changeLanguage(state, val) {
      state.languageType = val;
    }
  },
  getters: {
    navList(state) {
      let list = [];
      for (let item of state.navListBase) {
        if (item.isShow) {
          list.push({
            id: state.languageType == 1 ? item.id : item.enId,
            pathName: item.pathName,
            sort: item.sort,
            name: state.languageType == 1 ? item.cnName : item.enName
          });
        }
      }
      return list;
    },
    initNavList(state) {
      let list = [];
      for (let item of state.navListBase) {
        list.push({
          id: state.languageType == 1 ? item.id : item.enId,
          pathName: item.pathName,
          sort: item.sort,
          name: state.languageType == 1 ? item.cnName : item.enName
        });
      }
      return list;
    }
  }
});
export default store;
