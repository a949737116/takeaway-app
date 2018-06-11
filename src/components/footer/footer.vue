<template>
    <div class='footer'>
        <div class='left'>
            <div class='logo'>
                <div class='logoIcon icon-shopping_cart'>

                </div>
            </div>
            <div class='price'>
                ￥{{price}}
            </div>
            <div class='leastPrice'>
                另需配送费￥{{leastPrice}}元
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
        },
        computed:{
            price(){
                return this.$store.state.totalMoney || 0
            },
            leastPrice(){
                let nMoney = this.$store.state.totalMoney || 0;
                let money = this.minPrice > nMoney ? this.minPrice - nMoney : 0;
                return money;
            }
        }
    }
</script>

<style scoped rel="stylesheet/stylus" lang="stylus">
    @import '../../common/stylus/icon.styl'
    @import '../../common/stylus/border1px.styl'
    .footer
        position absolute
        bottom 0
        left 0
        right 0
        width 100%
        height 46px
        display flex
        justify-content row
        overflow visible 
        .left
            flex-grow 1
            background-color #141d27
            padding-left 15px
            overflow visible
            .logo
                margin-right 10px
                width 46px
                height 44px
                padding 6px 6px 8px 6px
                position relative
                top -22px
                background-color inherit 
                border-radius 50%
                .logoIcon
                    background-color rgba(255,255,255,0.4)
                    font-size 24px
                    color rgba(255,255,255,0.4)
                    line-height 44px
                    width 100%
                    height 100%
                    text-align center
                    vertical-align middle
                    border-radius 50%
            &>div
                display inline-block
            .price
                vertical-align top
                height 46px
                font-size 14px
                color rgba(255,255,255,0.4)
                font-weight 700
                line-height 46px
                margin-right 8px
            .leastPrice
                vertical-align middle
                padding-left 8px
                font-size 14px
                color rgba(255,255,255,0.4)
                line-height 24px
                height 24px
                position relative
                top -10.5px
                borderL1px(rgba(255,255,255,0.4))
        .right
            flex 110px 0 0
            background-color #2b333b
            width 110px     
            color rgba(255,255,255,0.4)
            font-weight 700
            line-height 46px
            font-size 14px
            box-sizing: border-box;
            padding: 0 8px;
            text-align: center;    
</style>

