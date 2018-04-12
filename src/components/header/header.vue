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
                <div class="grid-content">

                </div>
            </el-col>
        </el-row>       
        <!-- 公告栏 -->
        <div class="noticeBar">
            <div class="noticeContent">
                <span class="noticeIcon"></span>
                <div class="noticRight">
                    <p class="noticeWords">{{dataSeller.bulletin}}</p>
                    <i class="icon-keyboard_arrow_right iconRight"></i>
                </div>
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
            vertical-align top
            .noticeIcon
                display inline-block
                margin-right 4px
                margin-left 12px
                width 22px
                height 12px
                ImgSrc(bulletin)
                background-size 22px 12px
                margin-bottom 8.5px
            .noticRight
                position relative
                display inline-block
                width 80%
                .noticeWords
                    padding-right 10px
                    overflow  hidden 
                    white-space nowrap
                    text-overflow ellipsis
                    height 28px
                    line-height 28px
                .iconRight
                    position absolute 
                    top 0
                    right 0
</style>
