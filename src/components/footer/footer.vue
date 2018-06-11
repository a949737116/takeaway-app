<template>
    <div class='footer'>
        <div class='left'>
            <div class='logo'>

            </div>
            <div class='price'>

            </div>
            <div class='leastPrice'>

            </div>
        </div>
        <div class='right'>
            ￥{{minPrice}}起送
        </div>
    </div>
</template>

<script>
    export default{
        name:'vfooter',
        props:{
           minPrice:Number
        }
    }
</script>

<style scoped rel="stylesheet/stylus" lang="stylus">
    .footer
        position absolute
        bottom 0
        left 0
        right 0
        width 100%
        height 46px
        display flex
        justify-content row
        .left
            flex-grow 1
            background-color #141d27
            &>div
                display inline-block
        .right
            flex 110px 0 0
            background-color #2b333b
            width 110px     
            color rgba(255,255,255,0.4)
            font-weight 700
            line-height 46px
            box-sizing: border-box;
            padding: 0 8px;
            text-align: center;    
</style>

