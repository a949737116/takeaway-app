<template>
    <div class='rating-case'>
        <div class='rating-content'>
            <div class='grade-row'>
                <div class='grade-left'>
                    <p>3.9</p>
                    <p>综合评分</p>
                    <p>高于周边商家69.2%</p>
                </div>
                <div class='grade-right'>
                    <div>服务态度<star class='forStar' :score=4 size='24'></star><span class='score'>3.9</span></div>
                    <div>商品质量<star class='forStar' :score=4 size='24'></star><span class='score'>3.9</span></div>
                    <div>送达时间 <span class='sTime'>44分钟</span> </div>
                </div>
            </div>
            <div class='rating-row' ref='ratingBox'>
                <div class='rating-comment' v-if='ratingList.length>0'>
                    <div class='comment-row' v-for=' (item,indexx) in ratingList' :key='indexx'>
                        <div class='comment-img'> 
                            <img :src="item.avatar" alt="">
                        </div>
                        <div class='comment-content'>
                            <div class='content-row1'>
                                <div class='content-name'>
                                    {{item.username}}
                                </div>
                                <div class='content-date'>
                                    {{new Date(item.rateTime).format('yyyy-MM-dd hh:ss')}}
                                </div>    
                            </div>
                            <p class='content-row2'>
                                <star  class='forStar' :score=item.score size='24' style='padding-left:0'></star>
                                <span v-show='item.deliveryTime'>{{item.deliveryTime}}分钟送达</span>
                            </p>
                            <p class='content-row3'>
                                {{item.text}}
                            </p>
                            <div class='content-row4'>
                                <i :class='item.rateType >0? "icon-thumb_down" : "icon-thumb_up"'></i>
                                <span v-if='item.recommend.length>0' v-for='(item1,index) in item.recommend' :key='index' >{{item1}}</span>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    Date.prototype.format = function(fmt){  
        var o = {   
            "M+" : this.getMonth()+1,                 //月份   
            "d+" : this.getDate(),                    //日   
            "h+" : this.getHours(),                   //小时   
            "m+" : this.getMinutes(),                 //分   
            "s+" : this.getSeconds(),                 //秒   
            "q+" : Math.floor((this.getMonth()+3)/3), //季度   
            "S"  : this.getMilliseconds()             //毫秒   
        };   
        if(/(y+)/.test(fmt))   
            fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));   
        for(var k in o)   
            if(new RegExp("("+ k +")").test(fmt))   
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
        return fmt;   
    };
    import star from 'vue-components/star/star'
    import bscroll from 'better-scroll'
    export default {
        name:'ratings',
        components:{
            star:star
        },
        data(){
            return{
                ratingList:[]
            }
        },
        watch:{
            ratingList:function(){
                var me = this;
                me.$nextTick(()=>{
                if (me.scroll){
                    me.scroll.refresh();
                }else{
                    me.scroll = new bscroll(me.$refs.ratingBox);     
                }
                });
            }
        },
        created(){
            this.$http.get('/api/ratings').then(function(data){
                console.log(data);
                this.ratingList = data.body;
            },
            response => {
                console.log(response)
            }
            )
            
        }
    }
</script>

<style scoped rel='stylesheet/stylus' lang='stylus'>
    @import '../../common/stylus/icon.styl'
    .icon-thumb_down
        color rgb(183,187,191) !important
    .forStar
        display inline-block
        vertical-align top
        padding-left 12px
    .rating-case
        position absolute 
        top 176px
        left 0px
        width 100%      
        bottom 46px
        .rating-content
            height 100%
            overflow hidden
        .grade-row
            display flex
            flex-direction row
            flex-wrap nowrap
            border-bottom: 1px solid #d9dde1;
            .grade-left 
                flex 137.5px 0 0 
                padding 18px 0 24px 0
                text-align center
                &>p:first-child
                    font-size 24px
                    color rgb(255,153,0)
                    line-height 28px
                    height 28px
                    margin-bottom 6px
                &>p:nth-child(2)
                    font-size 12px
                    color rgb(7,17,27);
                    line-height 12px
                    height 12px
                    margin-bottom 8px
                &>p:nth-child(3)
                    font-size 10px
                    color rgb(7,17,27)
                    line-height 10px
                    height 10px
       
            .grade-right
                flex 237px 1 1
                padding:0 24px
                margin 18px 0 24px 0
                &>div
                    font-size 12px
                    color rgb(7,17,27)
                    line-height 18px
                    height 18px
                    margin-bottom 8px
                    .score
                        padding-left 12px
                        color rgb(255,153,0)
                    .sTime
                        padding-left 12px
                        color rgb(147,153,159)
        .rating-row
            overflow hidden
            height 100%
            .comment-row:last-child
                padding-bottom 200px
            .comment-row
                display flex
                .comment-img
                    flex 38.7px 0 0
                    padding 18px 12px 0 18px
                    img 
                        width 28px
                        height 28px
                        border-radius 50%
                .comment-content
                    width 100%
                    .content-row1
                        padding 18px 18px 0 0
                        margin-bottom 4px
                        div
                            font-size 10px
                            line-height 12px
                            height 12px
                            display inline-block
                        .content-name
                            font-size 10px
                            color rgb(7,17,27)  
                            vertical-align top                   
                        .content-date
                            float right                           
                            font-weight 200
                            color rgb(147,153,159)
                    .content-row2
                        margin-bottom 6px
                        span
                            padding-left 6px
                            font-size 10px
                            font-weight 200
                            color rgb(147,153,159)
                            line-height 12px
                    .content-row3
                        font-size 12px
                        color rgb(7,17,27)
                        line-height 18px
                    .content-row4
                        margin-top 8px
                        i
                            color rgb(0,160,220)
                            font-size 12px
                            line-height 16px
                        span 
                            padding 0 6px 0 6px
                            display inline-block
                            margin-left 8px
                            border 1px rgba(7,17,27,0.1) solid
                            border-radius 2px
                            background-color rgb(255,255,255)
                            font-size 9px
                            color rgb(147,153,159)
                            line-height 16px


</style>