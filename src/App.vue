<template>
  <div id="app">
    <vheader :dataSeller="seller"></vheader>
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
  data:function(){
    return {
      seller:{}
    }
  },
  components:{
    vheader,
    'v-tab' : tabList,
    vfooter
  },
  created:function(){
    this.$http.get('./api/seller').then(response => {
      if (response.data){
        this.seller = response.data;
        console.log(this.seller)
      }
    },response => {
      console.log(response);
    }
    )
  }
}
</script>

<style rel="stylesheet/stylus" lang="stylus">
@import 'common/stylus/base.styl'
#app 
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  // text-align: center
  //color: #2c3e50
  // margin-top: 60px
</style>
