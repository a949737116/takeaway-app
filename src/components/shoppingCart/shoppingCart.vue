<template>
  <div class='shoppingCart'>
    <div class='sTitle'>
        <span>
          购物车
        </span>
        <span @click='clearAll'> 
          清空
        </span>
    </div>
    <div class='sContent' v-if='goodList.length>0' ref='customization' 
      :class='goodList.length>=5?"onlyHeight":""'
    >
      <div>
        <div class='oneGood' v-for='(item) in goodList' :key='item.name' >
            <span>
              {{item.name}}
            </span>
            <span  class='changeBall' >
              <scrollBtn :info='item' v-if='item' ></scrollBtn>
            </span>
            <span class='Tmoney'>
              ￥{{item.totalMoney}}
            </span>
            <div class='clearFix'>
        </div>
      </div>
      </div>     
    </div>
  </div>
</template>
<script>
  import scrollBtn from 'vue-components/scrollBtn/scrollBtn'
  import Bscroll from 'better-scroll'
  export default{
    name:'shoppingCart',
    components:{
      scrollBtn
    },
    computed:{
      goodList(){
        return this.$store.state.buyGoods
      }
    },
    methods:{
      clearAll(){
        this.$store.commit('changeGoods',[]);
        this.$store.commit('alterMoney',0);
      },
      afreshShow(){
        if (this.goodList.length === 0){
          this.bus.$emit('closeCart');
        }else{
        var me = this;
        this.$nextTick(()=>{
          if (!me.scroll){
            me.scroll = new Bscroll(me.$refs.customization,{click:true,tap:true});
          }else{
            me.scroll.refresh();
          }
        })}
      }
    },
    watch: {
      goodList: {
        handler:'afreshShow'
      }
    }
  }
</script>
<style lang='stylus' rel='stylesheet/stylus'>
    @import '../../common/stylus/border1px.styl';
    .onlyHeight
      height 270px!important
    .clearfix
      clear both
    .shoppingCart
      z-index 998
      background-color rgb(255,255,255) 
      position absolute
      bottom 46px
      left 0
      width 100%
      .sTitle
        padding 0 18px
        height 40px
        background-color #f3f5f7
        border 1px solid rgba(7,17,27,0.1)
        span
          height 40px
          line-height 40px
          display inline-block
          &:first-child
            font-weight 200
            color rgb(7,17,27)
            font-size 14px
          &:last-child
            font-size 12px
            color rgb(0,160,220)
            float right
      .sContent
          overflow hidden
          .oneGood
            height 24px
            padding 12px 18px
            background-color rgb(255,255,255)
            border1px(rgba(7,17,27,0.1))
            span
              line-height 24px
              display inline-block
              &:first-child
                color rgb(7,17,27)
                font-size 14px
            .Tmoney
              font-size 14px
              font-weight 700
              color rgb(240,20,20)
              padding-right 12px  
              float right 
            .changeBall
              float right
              span
                font-size 16px !important
            &:last-child
                margin-bottom 35px
</style>

