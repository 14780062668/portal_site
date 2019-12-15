<template>
  <footer class="footer-box">
    <div class="home-tit">
      <i class="iconfont iconxiaoxi1"></i>
      {{ homeName }}
    </div>
    <div class="my-info">
      <div v-if="languageType == 1" class="info-message">
        <p class="info-base">
          <i class="iconfont icondianhua"></i>
          <span class="tag">电话: 0574-62676122</span>
          <span class="tag">传真: 0574-62676802</span>
          <span class="tag">联系人: 周泉君</span>
          <span class="tag">手 机: 13335844026</span>
          <i class="iconfont iconyouxiang email-icon"></i>
          <span class="tag">tony@fine-boon.com</span>
        </p>
        <p class="info-adress">
          <i class="iconfont icondizhi"></i>
          <span class="tag">地址: 浙江省余姚市凤山街道九垒山村下陈渡86号</span>
        </p>
      </div>
      <div v-else class="info-message info-en">
        <p class="info-base">
          <i class="iconfont icondianhua"></i>
          <span class="tag">Tel: +86-574-62676122</span>
          <span class="tag">Fax: 0574-62676802</span>
          <span class="tag">Contact: Tony Liu</span>
          <span class="tag">Mobile: 13335844026</span>
          <i class="iconfont iconyouxiang email-icon"></i>
          <span class="tag">Email: tony@fine-boon.com</span>
        </p>
        <p class="info-adress">
          <i class="iconfont icondizhi"></i>
          <span class="tag"
            >Factory Address: No.86 XIANCHENDU, JIULEISHAN VILLAGE, FENGSHAN
            TOWN, YUYAO CITY, ZHEJIANG PROVINCE, P.R.CHINA</span
          >
        </p>
      </div>
    </div>
    <div class="company-info">
      <img class="logo" src="../assets/img/logo.png" alt="" />
      <div class="info-name">
        <p>YUYAO SEEHAO VACUUM TECHNOLOGY CO.LTD</p>
        <p class="cn-name">余姚市思豪真空科技有限公司</p>
      </div>
      <div class="nav">
        <router-link
          v-for="item in navList"
          :key="item.id"
          :to="{
            path: item.pathName
          }"
          >{{ item.name }}</router-link
        >
      </div>
    </div>
  </footer>
</template>
<script>
import mixins from "../mixins/index.js";
export default {
  mixins: [mixins],
  computed: {
    homeName() {
      return this.languageType == 1 ? "联系我们" : "ABOUT US";
    }
  },
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>
<style lang="stylus" scoped></style>
