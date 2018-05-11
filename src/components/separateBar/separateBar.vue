<template>
  <div class='separateBox'>
    <div class='line'></div>
    <div class='title'>{{title}}</div>
    <div class='line'></div>
  </div>  
</template>
<script>
  export default {
    name:'separateBar',
    props:{
      title:String
    }
  }
</script>
<style lang="stylus" scoped rel='stylesheet/stylus'>
  .separateBox
    width 100%
    margin-top 28px
    margin-bottom 24px
    display flex
    flex auto 
    .title
      padding 0 12px
      font-size 13px
      font-weight 700
    .line
      width 112px
      border-top 1px solid rgba(255,255,255,0.2)
      margin-top 4px
</style>
