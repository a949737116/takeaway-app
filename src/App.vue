<template>
  <div id="app">
    <vheader></vheader>
    <v-tab/>
    <router-view/>
    <vfooter></vfooter>
  </div>
</template>

<script>
import vheader from 'vue-components/header/header'
import tabList from 'vue-components/tabList/tabList'
import vfooter from 'vue-components/footer/footer'
export default {
  name: 'App',
  components:{
    vheader,
    'v-tab' : tabList,
    vfooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
