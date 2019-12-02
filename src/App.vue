<template>
  <div id="app">
    <header-com></header-com>
    <router-view/>
    <footer-com></footer-com>
  </div>
</template>
<script>
import HeaderCom from './components/HeaderCom.vue';
import FooterCom from './components/FooterCom.vue';
export default {
  name: 'App',
  components: {
    HeaderCom,
    FooterCom
  },
  created(){
    document.title = '思豪科技';
  }
}
</script>
