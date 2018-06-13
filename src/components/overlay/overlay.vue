<template>
  <div class='overlay'>
    <shoppingCart></shoppingCart>
  </div>
</template>
<script>
  import shoppingCart from 'vue-components/shoppingCart/shoppingCart'
  export default{
    name:'overlay',
    components:{
      shoppingCart
    }
  }
</script>
<style scoped rel='stylesheet/stylus' lang='stylus'>
   .overlay
      position fixed
      top 0
      left 0
      width 100%
      height 100%
      background-color rgba(7,17,27,0.6)
      backdrop-filter blur(10px)
      z-index 996
</style>

