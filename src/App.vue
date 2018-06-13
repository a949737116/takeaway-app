<template>
  <div id="app">
    <vheader :dataSeller="seller"></vheader>
    <v-tab/>
    <v-content :food="ainfo.goods"></v-content> 
    <router-view/>
    <vfooter :minPrice="seller.minPrice" :deliveryPrice='seller.deliveryPrice'></vfooter>
    <overlay class='hidden' id='overlay'></overlay>
  </div>
</template>

<script>
import vheader from 'vue-components/header/header'
import tabList from 'vue-components/tabList/tabList'
import vfooter from 'vue-components/footer/footer'
import content from 'vue-components/content/content'
import overlay from 'vue-components/overlay/overlay'
export default {
  name: 'App',
  data:function(){
    return {
      seller:{},
      ainfo:{}
    }
  },
  components:{
    vheader,
    'v-tab' : tabList,
    vfooter,
    overlay,
    'v-content': content
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
    );
    this.$http.get('./api/all').then(response => {
      if (response.data){
        this.ainfo = response.data;
        console.log(this.ainfo)
      }
    },response => {
      console.log('error');
    })
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
.hidden
  display none
</style>
