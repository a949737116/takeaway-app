<template>
    <div class='business-box' ref='bbox'>
        <div class='business'>
            <div class='business-basic'>
                <div class='basic-row1'>
                    <div class='br-left'>
                        <p class='br-title'>{{sellerData.name}}</p>
                        <star :score=sellerData.score size='24' class='br-star'></star>
                        <span style='margin-left:8px'>({{sellerData.ratingCount}})</span>
                        <span style='margin-left:12px'>月售{{sellerData.sellCount}}单</span>    
                    </div>
                    <div class='br-right'>
                        <i class='icon-favorite collect' :class='isFavorite?"favorite":"unfavorite"' @click='turnFavorite'>

                        </i>
                    </div>
                </div>
                <div class='basic-row2'>
                    <el-row>
                        <el-col :span="8" class='shop'>
                            <p>起送价</p>
                            <p>{{sellerData.minPrice}}元</p>
                        </el-col>
                        <el-col :span="8" class='shop'>
                            <p>商家配送</p>
                            <p>{{sellerData.deliveryPrice}}元</p>
                        </el-col>
                        <el-col :span="8" class='shop'>
                            <p>平均配送时间</p>
                            <p>{{sellerData.deliveryTime}}分钟</p>
                        </el-col>
                    </el-row>
                </div>
            </div>
            <div class='business-notice'>
                <p>公告与活动</p>
                <div class='notice-content'>
                    {{sellerData.bulletin}}
                </div>
                <ul>
                    <li v-for='(item,index) in sellerData.supports' :key=index >
                        <span :class=classMap[item.type] class='iconFix'></span>
                        {{item.description}}</li>
                </ul>
            </div>
            <div class='business-scene'>
                <p style='margin-bottom:12px'>商家实景</p>
                <div class='ImgBox' ref='imgbox'>
                    <div :style='"width:" + countHeight'>
                        <img v-for='(item,index) in sellerData.pics' :key='index'
                        :src=item alt="">
                    </div>
                </div>
            </div>
            <div class='business-info'>
                <p style='margin-bottom:12px'>商家信息</p>
                <ul>
                    <li v-for='(item,index) in sellerData.infos' :key=index >{{item}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import bscroll from 'better-scroll'
    import star from 'vue-components/star/star'
    export default {
        name:'seller',
        data(){
            return {
                isFavorite:false,
                sellerData:[],
                classMap:[
                    'decrease',
                    'discount',
                    'discount',
                    'special',
                    'special'
                    ]
            }
        },
        components:{
            star:star
        },
        computed:{
            countHeight(){
                if (this.sellerData.pics){
                    return (this.sellerData.pics.length+1)*126-6 + 'px'
                }else{
                    return 0
                }
                
                // var iheight = this.sellerData.pics.length*126-6;
                // return {
                //     height : iheight
                // }
            }
        },
        methods:{
            turnFavorite(){
                this.isFavorite = ! this.isFavorite
            }
        },
        created(){
            var me = this;
            this.$http.get('api/seller').then(response => {
                console.log(response.body);
                this.sellerData = response.body;
                this.$nextTick(()=>{
                    if (!me.roll){
                        me.roll = new bscroll(
                            me.$refs.bbox
                        )
                    }else{
                        me.roll.refresh()
                    }
                    if (!me.roll1){
                        me.roll1 = new bscroll(
                            me.$refs.imgbox,{
                                scrollY:false,
                                scrollX:true
                            }
                        )
                    }else{
                        me.roll1.refresh()
                    }
                })
            },
            response => {
                console.log(response)
            } 
            )
        }
    }
</script>

<style scoped rel='stylesheet/stylus' lang='stylus'>
    @import '../../common/stylus/icon'
    @import '../../common/stylus/border1px'
    @import '../../common/stylus/header'
    .ImgBox
        width 100%
        overflow-x:hidden;
        div
            height 90px
            overflow auto
            img 
                float left
                display inline-block
                width 120px
                height 90px
                margin-right 6px
    .decrease
        ImgSrc(decrease_3)
    .discount
        ImgSrc(discount_3)
    .special
        ImgSrc(special_3)
    .iconFix
        margin-right 4px
        width 18px
        height 18px
        background-size 18px 18px
        display inline-block
        margin-bottom -4px;    
    .favorite
        &:after
            content '已收藏'
            display block
            text-align center
            font-size 10px
            color rgb(77,85,93)
            line-height 10px
    .unfavorite
        &:after
            content '未收藏'
            display block
            text-align center
            font-size 10px
            color rgb(77,85,93)
            line-height 10px
    .business-box
        background-color: #f3f5f7;
        position absolute
        top 176px
        left 0px    
        bottom 46px
        width 100%
        overflow hidden
        .business-basic
            background-color: #fff;
            padding 18px 18px
            .basic-row1
                 padding-bottom 18px
                 .br-left
                    float left
                    p
                        font-size 15px
                        color rgb(7,17,27)
                        line-height 15px
                        margin-bottom 8px
                        font-weight 800
                    .br-star
                        text-align left
                        display inline-block
                    span
                        font-size 10px
                        color rgb(77,85,93)
                        line-height 18px
                 .br-right
                     float right
                     margin-top 5px
                     text-align center
                     .collect
                        font-size 24px
                        line-height 24px
                    .favorite
                        color rgb(240,20,20)
                    .unfavorite
                        color #93999f
                 &:after
                     clear both
                     content '.'
                     visibility hidden
            .basic-row2
                margin-top 18px
                borderT1px(rgba(7,17,27,0.1))
                padding-top 18px
                .shop
                    text-align center
                    p:first-child
                        font-size 10px
                        color rgb(147,153,159)
                        line-height 10px
                        margin-bottom 4px
                    p:last-child
                        font-size 20px
                        font-weight 200
                        color rgb(7,17,27)
                        line-height 24px
                    &:nth-child(2)
                        borderL1px(rgba(7,17,27,0.1))
                    &:nth-child(3)
                        borderL1px(rgba(7,17,27,0.1))
        .business-notice,.business-info,.business-scene
            margin-top 15px
            background-color #fff
            padding 18px 18px
            padding-bottom 0px
            p
                font-size 15px
                color rgb(7,17,27)
                line-height 15px
                font-weight 800
                margin-bottom 8px
            .notice-content
                padding 0 12px 16px 12px
                font-size 12px
                font-weight 300
                color rgb(240,20,20)
                line-height 24px
            ul 
                li
                    padding 16px 12px
                    font-size 12px
                    font-weight 200
                    color rgb(7,17,27)
                    line-height 16px
                    borderT1px(rgba(7,17,27,0.1))
        
</style>