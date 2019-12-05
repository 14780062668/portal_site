import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState({
      // 语言类型
      languageType: "languageType"
    }),
    ...mapGetters({
      // 主导航
      navList: "navList"
    })
  }
};
