<template>
    <div class="shoppingInformation" style="position:relative">
        <!-- 店铺信息栏 -->
        <el-row class="shoppingContent" style='z-index:1'>
            <el-col :span="6">
                <div class="leftImg">
                    <!-- 左侧店铺图片 -->                   
                    <img :src="dataSeller.avatar"  width="64" height="64">
                </div>
            </el-col>
            <el-col :span="18">
                <div class="rightSeller">
                    <!-- 标题 -->
                    <div class="SellerTitle">
                        <span></span>
                        <span>{{dataSeller.name}}</span>
                    </div> 
                    <!-- 配送 -->
                    <p class='transport'><span>{{dataSeller.description}}</span>/{{dataSeller.deliveryTime}}分钟送达</p>
                    <!-- 满减 -->
                    <div class='supports'>
                        <span :class='classMap[dataSeller.supports[0].type]' class='iconFix'></span>
                        <span>{{dataSeller.supports[0].description}}</span>
                        <span class='showMoreSupports'>
                            <span>{{dataSeller.supports.length}}个 </span>
                            <i class="icon-keyboard_arrow_right iconRight"></i> 
                        </span>
                    </div>
                </div>
            </el-col>   
        </el-row>       
        <!-- 公告栏 -->
        <div class="noticeBar" style='z-index:1'>
            <div class="noticeContent">
                    <span class="noticeIcon"></span>
                    <span class="noticeWords">{{dataSeller.bulletin}}</span>
                    <i class="icon-keyboard_arrow_right iconRight"></i>
            </div>
        </div>
        <!-- 滤镜背景层 -->
        <div class='background'>
            <img :src="dataSeller.avatar"  width=100% height=100%>
        </div>
    </div>
</template>
<script>
export default {
  name: "vheader",
  props: {
    dataSeller: {
      type: Object
    }
  },
  data:function(){
      return {
          classMap:[
              'decrease',
              'discount',
              'discount',
              'special',
              'special'
          ]
      }
  }
};
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
    @import '../../common/stylus/header.styl'
    @import '../../common/stylus/icon.styl'
    .iconFix
        margin-right 4px
        width 18px
        height 18px
        background-size 18px 18px
        display inline-block
        margin-bottom -4px;
    .rightSeller
        .transport
            margin-top 8px
            margin-bottom 10px
            line-height 12px
            height 12px
        .supports
            vertical-align top
            .showMoreSupports
                float right
                position relative
                vertical-align top
                line-height 24px
                height 24px
                background-color rgba(0,0,0,0.2)
                border-radius 12px
                padding 0 20px 0 8px   
                &>i 
                   position absolute 
                   top 5.5px
                   right 8px
            &>span
                display inline-block
    .leftImg
        &>img 
          padding:24px 0px 18px 24px
          border-radius : 4px
    .noticeBar
        background-color rgba(7,17,27,0.2)
        .noticeContent
            position relative
            vertical-align top
            overflow  hidden 
            white-space nowrap
            text-overflow ellipsis
            padding 0 22px 0 12px
            height 28px
            line-height 28px
            .noticeIcon
                margin-top: 7px
                vertical-align top
                display inline-block
                margin-right 4px
                width 22px
                height 12px
                ImgSrc(bulletin)    
                background-size 22px 12px
            .noticeWords
                vertical-align top
                font-size 10px
            .iconRight
                position absolute 
                top 9px
                right 12px
                font-size 10px

    .rightSeller
        padding 24px 12px 18px 24px
        .SellerTitle
            &>span:first-child
                display inline-block
                ImgSrc(brand)
                background-size 30px 18px
                width 30px
                height 18px
            &>span:nth-child(2)
                font-size 16px
                font-weight bold
                line-height 18px
                height 18px
    .decrease
        ImgSrc(decrease_1)
    .discount
        ImgSrc(discount_1)
    .special
        ImgSrc(special_1)
    .shoppingInformation
        background-color rgba(7,17,27,0.5)
    .background
        position absolute
        top 0
        left 0
        width 100%
        height 100%
        z-index -1
        filter blur(10px)
</style>
