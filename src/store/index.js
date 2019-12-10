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
        cnName: "关于思豪",
        enName: "About Us",
        pathName: "about_me"
      },
      {
        id: 2,
        cnName: "产品中心",
        enName: "Proudcts",
        pathName: "product"
      },
      {
        id: 3,
        cnName: "生产设备",
        enName: "Equipments",
        pathName: "equipment"
      },
      {
        id: 4,
        cnName: "质量控制",
        enName: "Quality Control",
        pathName: "quality_control"
      },
      {
        id: 5,
        cnName: "联系方式",
        enName: "Contact Us",
        pathName: "contact_us"
      },
      {
        id: 6,
        cnName: "edit",
        enName: "edit",
        pathName: "edit"
      }
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
      return state.navListBase.map(val => {
        return {
          id: val.id,
          pathName: val.pathName,
          name: state.languageType == 1 ? val.cnName : val.enName
        };
      });
    }
  }
});
export default store;
