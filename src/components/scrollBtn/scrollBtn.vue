<template>
  <div class='sbb'>
    <transition
        name='scroll'
    >
        <span class='icon-remove_circle_outline left' @click= 'reduceFood' v-show='serverFood.count>0'>

        </span>
    </transition>
    <span class='count'>
      {{this.serverFood.count}}
    </span>
    <span class="icon-add_circle" @click= 'addFood' >
    </span>
  </div>
</template>
<script>
  export default{
    name:'scrollBtn',
    props:{
      info : {
        type: Object
      }
    },
    methods:{
      addFood(){
        if (this.serverFood.count < this.serverFood.totalCount){
          this.serverFood.count += 1;
          this.serverFood.totalMoney = this.serverFood.count * this.serverFood.price;
          this.emitFater();
        };
      },       
      reduceFood(){
        if (this.serverFood.count > 0){
          this.serverFood.count -= 1;
          this.serverFood.totalMoney = this.serverFood.count * this.serverFood.price;
          this.emitFater();
        }
      },
      emitFater(){
        if (this.serverFood.ifBar){
          console.log('来到了购物车BAR')
          this.bus.$emit('countChange',this.serverFood.count,this.serverFood.name)
        }else{
          this.bus.$emit('foodChange',this.serverFood);
        }
      }
    },
    mounted(){  
      this.bus.$on('countChange',()=>{
        console.log(2222222)
      })
    },
    watch:{
      "info.count":function(n,o){
        this.serverFood.count = n;
      }
    },
    data(){
      return {
        serverFood:{
          count:this.info.count || 0,
          price:this.info.price,
          name:this.info.name,
          totalMoney:this.info.totalMoney || 0,
          totalCount:this.info.sellCount || this.info.totalCount,
          ifBar:this.info.ifBar || false
        }
      }
    }
  }
</script>
<style scoped lang='stylus' rel='stylesheet/stylus'>
  @import '../../common/stylus/icon.styl'
  .sbb
    &>span
      text-align center
      color rgb(0,160,220) !important
      font-size 20px 
      line-height 20px
      vertical-align top
      display inline-block
      position relative
      z-index 888
    .count
      font-size 18px 
      display inline-block
      width 24px
    .flyingBall
      position absolute 
      top 0
      left 0
      width 20px
      height 20px
      display inline-block
      background-color rgb(0,160,220)
      border-radius 50%
.ball-container
  .ball
    position fixed
    left: 32px
    bottom: 22px
    z-index:200
    transition: all .6s cubic-bezier(0.49, -0.29, 0.75, 0.41)
    .inner
      width 16px
      height 16px
      border-radius 50%
      background rgb(0,160,220)
      transition: all .6s linear
// vue-transition的动画制作
//进入的开始状态与离开的最后状态的时候状态
.scroll-enter,.scroll-leave-to
  transform translate3d(24px,0,0) rotate(180deg)
  -webkit-transform translate3d(24px,0,0) rotate(180deg)
  opacity 0
//动画过程定义
.scroll-enter-active,.scroll-leave-active
  transition : all 0.3s linear;
//进入的最后状态与离开的开始状态
.scroll-enter-to,.scroll-leave
  transform translate3d(0px,0,0) rotate(0)
  -webkit-transform translate3d(0px,0,0) rotate(0)
  opacity 1
</style>

f