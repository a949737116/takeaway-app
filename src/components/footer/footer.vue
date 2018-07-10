<template>
    <div class='footer'>
        <div class='left'>
            <div class='logo'>
                <div class='logoIcon icon-shopping_cart' v-if='
                !isBuy'>

                </div>
                <div class='logoIcon icon-shopping_cart logoIcon1' v-else @click='openShopCart'>
                    <span>
                        {{goodsInfo.count}}
                    </span>
                </div>
            </div>
            <div class='price' v-if='!isBuy'>
                ￥{{price}}
            </div>
            <div class='price price1' v-else>
                ￥{{price}}
            </div>
            <div class='leastPrice'>
                另需配送费{{deliveryPrice}}元
            </div>
        </div>
        <div class='right' v-if='!isBuy'>
            ￥{{leastPrice}}起送
        </div>
        <div class='right right1' v-else-if='leastPrice>0'>
            还差￥{{leastPrice}} 起送
        </div>
        <div class='right right2' v-else>
            去结算
        </div>
    </div>
</template>

<script>
    let ifShow = false;
    export default{
        name:'vfooter',
        props:{
           minPrice:Number,
           deliveryPrice:Number
        },
        methods:{
            openShopCart(){
                if (!ifShow){
                    console.log(document.getElementById('overlay'));
                    document.getElementById('overlay').classList.remove('hidden');
                    ifShow = true;
                }else{
                    document.getElementById('overlay').classList.add('hidden');
                    ifShow = false;
                }
                
            }
        },
        computed:{
            price(){
                return this.$store.state.totalMoney || 0
            },
            leastPrice(){
                let nMoney = this.$store.state.totalMoney || 0;
                let money = this.minPrice > nMoney ? this.minPrice - nMoney : 0;
                return money;
            },
            isBuy(){
                let is = false;
                if (this.$store.state.totalMoney > 0 ){
                    is = true;
                }
                return is;
            },
            goodsInfo(){
                const goodsArray = this.$store.state.buyGoods;
                let num = 0 ;
                console.log(goodsArray);
                goodsArray.forEach(
                    (item,index) => {
                        num += item.count;
                    }
                );
                let goodInfo = {
                    count:num
                }
                return goodInfo
            }
        },
        mounted(){
            this.bus.$on('closeCart',this.openShopCart);
        }
    }
</script>

<style scoped rel="stylesheet/stylus" lang="stylus">
    @import '../../common/stylus/icon.styl'
    @import '../../common/stylus/border1px.styl'
    .footer
        z-index 998
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
                .logoIcon1
                    background-color rgb(0,160,220)
                    color rgb(255,255,255)
                    position relative
                    span 
                        position absolute 
                        border-radius: 45%;
                        right: -6px;
                        top: -6px;
                        display inline-block
                        font-size 9px
                        color inherit
                        font-weight 700
                        line-height 16px
                        width 24px
                        height 16px
                        background-color rgb(240,20,20)
                        box-shadow 0px 2px 4px 0px rgba(0,0,0,0.4)
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
            .price1
                color rgb(255,255,255)
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
        .right2
            color #fff
            background-color green
</style>

