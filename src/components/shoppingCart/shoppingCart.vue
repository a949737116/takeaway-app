<template>
  <div class='shoppingCart'>
    <div class='sTitle'>
        <span>
          购物车
        </span>
        <span>
          清空
        </span>
    </div>
    <div class='sContent'>
      <div class='oneGood'>
        <span>
          商品名称
        </span>
        <span>
          ￥10
        </span>
      </div>
    </div>
  </div>
</template>
<script>
  import scrollBtn from 'vue-components/scrollBtn/scrollBtn'
  export default{
    name:'shoppingCart',
    components:{
      scrollBtn
    }
  }
</script>
<style lang='stylus' rel='stylesheet/stylus'>
    @import '../../common/stylus/border1px.styl';
    .shoppingCart
      z-index 998
      background-color rgb(255,255,255) 
      position absolute
      bottom 46px
      left 0
      width 100%
      .sTitle
        padding 0 18px
        height 40px
        background-color #f3f5f7
        border 1px solid rgba(7,17,27,0.1)
        span
          height 40px
          line-height 40px
          display inline-block
          &:first-child
            font-weight 200
            color rgb(7,17,27)
            font-size 14px
          &:last-child
            font-size 12px
            color rgb(0,160,220)
            float right
      .sContent
          .oneGood
            height 24px
            padding 12px 18px
            background-color rgb(255,255,255)
            border1px(rgba(7,17,27,0.1))
            span
              line-height 24px
              display inline-block
              &:first-child
                color rgb(7,17,27)
                font-size 14px
              &:nth-child(2)
                font-size 14px
                font-weight 700
                color rgb(240,20,20)
                padding-right 12px  
                float right 
            &:last-child
                margin-bottom 35px
</style>

