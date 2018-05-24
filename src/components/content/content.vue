<template>
  <div class='content'>
    <div class='menuList' ref='menuContent'>
      <div>
        <div class='menuLan' v-for='(item,index) in food' :key='index'>
        <span><i v-if='item.type === 2' class='icon'></i>{{item.name}}</span>
      </div>
    </div>
    </div>
    <div class='foodList' ref='foodContent'>
      <div >
        <div class='foodLan'  v-for='(item,index) in food' :key='index'>
        <!-- 标题栏 -->
        <p>{{item.name}}</p>
        <!-- 具体食物 -->
        <div class='foods' v-for='(item1,index1) in item.foods' :key='index1'>
          <!-- 图 -->
          <div class='imgBox'>
            <img :src="item1.image" class='foodImg'>
          </div>
          <!-- 详情 -->
          <div class='foodInfo'>
            <p class='title'>{{item1.name}}</p>
            <p class='desc' v-show='item1.description'>{{item1.description}}</p>
            <p class='sCount'>月售{{item1.sellCount}}份 好评率{{item1.rating}}</p>
            <p class='price'><span>￥{{item1.price}}</span><span v-if='item1.oldPrice || item1.oldPrice === 0'>￥{{item1.oldPrice}}</span></p>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Bscroll from 'better-scroll'
  export default{
    props:{
      food:{
        type: Array
      }
    },
    mounted() {
      this.$nextTick(
        () => {
          this.scroll = new Bscroll(this.$refs.foodContent,{})
          this.scroll = new Bscroll(this.$refs.menuContent,{})
        }
      )
    }
  }
</script>
<style rel='stylesheet/stylus' lang='stylus'>
  @import '../../common/stylus/border1px';
  @import '../../common/stylus/header';
  .content
    display flex
    display -webkit-flex
    position absolute 
    width 100%
    top 176px
    left 0
    right 0
    bottom 46px
    flex-direction row
    .menuList
      display flex
      display -webkit-flex
      flex-direction column
      width 80px
      flex 0 0 80px
      background #f3f5f7
      .menuLan
        width 56px
        height 54px
        padding 0 12px
        & .icon
          ImgSrc(special_3)
          background-size 13px 13px
          width 13px 
          height 13px
          margin-bottom -1.5px
          margin-right 1px
          display inline-block
        & span
          display:-webkit-box;
          // -webkit-box-pack:center;
          -webkit-box-align:center;
          font-size 13px
          font-weight 300
          line-height 14px
          width 56px
          height 54px
          border1px(rgba(7,17,27,0.1))
    .foodList
      display flex
      display -webkit-flex
      flex-direction column
      flex 1
      overflow hidden
      .foodLan
        & > p
          background-color #f3f5f7
          font-size 12px
          color rgb(147,153,159)
          line-height 26px
          height 26px
          text-indent 14px
          border-left 1px solid #d9dde1
        .foods
          padding 18px
          display flex
          .imgBox
            flex 0 0 57px
            padding-right 10px
            .foodImg
              width 57px
              height 57px
          .foodInfo
            p
              margin-bottom 8px
              font-size 10px
              color rgb(147,153,159)
              line-height 10px
              height 10px
            .title
              font-size 14px
              color rgb(7,17,27)
              line-height 14px
            .price
              span 
                text-decoration line-through
              span:first-child
                font-size 14px
                color red
                font-weight 700
                line-height 24px
                padding-right 8px
                text-decoration none
</style>

