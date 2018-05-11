<template>
  <div class='content'>
    <div class='menuList'>
      <div class='menuLan' v-for='(item,index) in food' :key='index'>
        <span><i v-if='item.type === 2' class='icon'></i>{{item.name}}</span>
      </div>
    </div>
    <div class='foodList'>
      <div class='foodLan'  v-for='(item,index) in food' :key='index'>
        <!-- 标题栏 -->
        <p>{{item.name}}</p>
        <!-- 具体食物 -->
        <div class='foods' v-for='(item1,index1) in item.foods' :key='index1'>
          <!-- 图 -->
          <div>
            <img src="item1.image">
          </div>
          <!-- 详情 -->
          <div>
            <p>{{item1.name}}</p>
            <p>{{item1.description}}</p>
            <p>月售{{item1.sellCount}}份 好评率{{item1.rating}}</p>
            <p><span></span><span></span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    props:{
      food:{
        type: Array
      }
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
    background-color red
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
</style>

