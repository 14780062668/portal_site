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
    }
  }
};
