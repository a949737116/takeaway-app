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
          this.emitFater();
        };
      },
      reduceFood(){
        if (this.serverFood.count > 0){
          this.serverFood.count -= 1;
          this.emitFater();
        }
      },
      emitFater(){
        this.$emit('foodChange',this.serverFood);
      }
    },
    data(){
      return {
        serverFood:{
          count:0,
          totalCount:this.info.sellCount,
          price:this.info.price,
          name:this.info.name
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
      font-size 20px !important
      line-height 20px
      vertical-align top
      display inline-block
    .count
      font-size 18px !important
      display inline-block
      width 24px

  // vue-transition的动画制作
  //进入的开始状态与离开的最后状态的时候状态
  .scroll-enter,.scroll-leave-to
    transform translate3d(24px,0,0)
    -webkit-transform translate3d(24px,0,0)
    opacity 0
  //动画过程定义
  .scroll-enter-active,.scroll-leave-active
    transition : all 0.3s linear;
  //进入的最后状态与离开的开始状态
  .scroll-enter-to,.scroll-leave
    transform translate3d(0px,0,0)
   -webkit-transform translate3d(0px,0,0)
    opacity 1
</style>

