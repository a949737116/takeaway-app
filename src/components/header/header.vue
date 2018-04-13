<template>
    <div class="shoppingInformation" style="background-color:#909399">
        <!-- 店铺信息栏 -->
        <el-row class="shoppingContent">
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
                    <p><span>{{dataSeller.description}}</span>/{{dataSeller.deliveryTime}}分钟送达</p>
                    <!-- 满减 -->
                    <div>
                        <span></span>
                        <span>{{dataSeller.supports[0].description}}</span>
                    </div>
                </div>
            </el-col>   
        </el-row>       
        <!-- 公告栏 -->
        <div class="noticeBar">
            <div class="noticeContent">
                    <span class="noticeIcon"></span>
                    <span class="noticeWords">{{dataSeller.bulletin}}</span>
                    <i class="icon-keyboard_arrow_right iconRight"></i>
            </div>
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
              'discount_1',
              
          ]
      }
  }
};
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
    @import '../../common/stylus/header.styl'
    @import '../../common/stylus/icon.styl'
    .leftImg
        &>img 
          padding:24px 0px 18px 24px
          border-radius : 4px
    .noticeBar
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
</style>
