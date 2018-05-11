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
                    <div v-if='dataSeller.supports' class='supports'>
                        <span :class='classMap[dataSeller.supports[0].type]' class='iconFix'></span>
                        <span>{{dataSeller.supports[0].description}}</span>
                        <span class='showMoreSupports'>
                            <span>{{dataSeller.supports.length}}个 </span>
                            <i class="icon-keyboard_arrow_right iconRight" @click='toShow'></i> 
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
                    <i class="icon-keyboard_arrow_right iconRight" @click='toShow'></i>
            </div>
        </div>
        <!-- 滤镜背景层 -->
        <div class='background'>
            <img :src="dataSeller.avatar"  width=100% height=100%>
        </div>
        <!-- 弹出层 -->
        <div class='popDiv' v-show='ifShow'>
            <div class='clearfix ContentWrap'>
                <div class='popContent'>
                    <p>{{dataSeller.name}}</p>
                    <div class='star'>
                        <!-- size有 24 32 48 -->
                        <star :score="dataSeller.foodScore" size="32" ></star>
                    </div>
                    <separateBar title='优惠信息'></separateBar>   
                    <div v-if='dataSeller.supports' class='supports'>
                        <p v-for='(one,code) in dataSeller.supports' :key='code'>
                            <span :class='classMap[code]' class='iconFixPop'></span>
                            <span>{{one.description}}</span>
                        </p>
                    </div> 
                    <separateBar title='商家公告'></separateBar>
                    <div class='notice'>
                        {{dataSeller.bulletin}}
                    </div>
                </div>
            </div>
            <div class='popClose' @click='toClose'>
                <span class='icon-close'></span>
            </div>
        </div>
    </div>
</template>
<script> 
import star from 'vue-components/star/star'
import separateBar from 'vue-components/separateBar/separateBar'
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
          ],
          ifShow:false
      }
  },
  methods:{
      toShow(){
          this.ifShow = true;
      },
      toClose(){
          this.ifShow = false;
      }
  },
  components:{
      star,
      separateBar
  }
};
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
    @import '../../common/stylus/icon.styl'
    @import '../../common/stylus/header.styl'
    .iconFix
        margin-right 4px
        width 18px
        height 18px
        background-size 18px 18px
        display inline-block
        margin-bottom -4px;
    .iconFixPop
        margin-right 6px
        width 16px
        height 16px
        background-size 16px 16px
        display inline-block;
        vertical-align top
        margin-top 3.5px
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
    .popDiv
        // 值一、content-box 
        // 这是由 CSS2.1 规定的宽度高度行为。
        // 宽度和高度分别应用到元素的内容框。
        // 在宽度和高度之外绘制元素的内边距和边框。
        // 值二、border-box 
        // 为元素设定的宽度和高度决定了元素的边框盒。
        // 就是说，为元素指定的任何内边距和边框都将在已设定的宽度和高度内进行绘制。
        // 通过从已设定的宽度和高度分别减去边框和内边距才能得到内容的宽度和高度。
        box-sizing border-box
        position fixed 
        top 0
        left 0
        padding 0 36px
        background-color rgba(7,17,27,0.8)
        backdrop-filter blur(10px)
        width 100%
        height 100%
        z-index 999
        overflow auto 
        & .ContentWrap
            min-height 100%
            width 100%
            & .popContent
                position relative
                box-sizing inherit
                width 100%
                height 100%
                padding-bottom 32px
                padding-top 64px
                &>p
                    font-size 16px
                    font-weight 700
                    color rgb(255,255,255)
                    line-height 16px
                    width 100%
                    text-align center
                    margin-bottom 16px
                & .supports
                    padding  0 12px 28px 12px
                    & >p 
                        margin-bottom 12px
                        &:last-child
                            margin-bottom 0
                        &>span 
                            font-size 12px
                            font-weight 200
                            color rgb(255,255,255)
                            line-height 24px
                            vertical-align top
                & .notice
                    padding 0 12px
                    font-size 12px
                    font-weight 200
                    color rgb(255,255,255)
                    line-height 24px
                    height 24px
        & .popClose
            position relative
            margin-top -32px
            text-align center
            &>span 
                font-size 32px
                width 32px
                height 32px 
</style>


