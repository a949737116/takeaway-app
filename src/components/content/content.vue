<template>
  <div class='content'>
    <div class='menuList' ref='menuContent'>
      <div class='menuBox'>
        <div class='menuLan' v-for='(item,index) in food' :key='index' :class='index === focusIndex ? "hightlight" : "normal"' @click='chooseIndex(index)'>
           <span><i v-if='item.type === 2' class='icon'></i>{{item.name}}</span>
        </div>
    </div>
    </div>
    <div class='foodList' ref='foodContent'>
      <div >
        <div class='foodLan'  v-for='(item,index) in food' :key='index'>
        <!-- 标题栏 -->
        <p>{{item.name}}</p>
        <!-- 具体食物 -->
        <div class='foods' v-for='(item1,index1) in item.foods' :key='index1'>
          <!-- 图 -->
          <div class='imgBox'>
            <img :src="item1.image" class='foodImg'>
          </div>
          <!-- 详情 -->
          <div class='foodInfo'>
            <p class='title'>{{item1.name}}</p>
            <p class='desc' v-show='item1.description'>{{item1.description}}</p>
            <p class='sCount'>月售{{item1.sellCount}}份 好评率{{item1.rating}}</p>
            <p class='price'>
              <span>￥{{item1.price}}</span>
              <span v-if='item1.oldPrice || item1.oldPrice === 0'>￥{{item1.oldPrice}}</span>
              <scrollBtn class='numBall' v-bind:info='item1' @foodChange='receptAction'></scrollBtn>
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Bscroll from 'better-scroll'
  import scrollBtn from 'vue-components/scrollBtn/scrollBtn'
  export default{
    props:{
      food:{
        type: Array
      }
    },
    data(){
      return {
        heightList:[],
        scrollY:0,
        focusIndex:0,
        buyGoods:[]
      }
    },
    //监听一次
    watch: {
      food:{
        handler: 'contactScroller'
      },
      buyGoods:{
        handler: 'buyGoodsChange',
        deep:true
      }
    },
    methods:{
      contactScroller(){
        this.$nextTick( () => {
          console.log(this.food);
           var me = this;
           if (!this.scroll) {
             this.scroll = new Bscroll(this.$refs.foodContent,{probeType:2,click:true,tap:true})
             this.scroll1 = new Bscroll(this.$refs.menuContent,{click:true,tap:true});
           }else{
             this.scroll.refresh();
           }
           let totalLength = 0;
           var boxlist = this.$refs.foodContent.getElementsByClassName('foodLan');
           var foodPositionList = [];
           for (var i = 0;i<boxlist.length;i++){
              totalLength += boxlist[i].clientHeight; 
              foodPositionList[i] = totalLength;
           }
           foodPositionList[foodPositionList.length-1] -= this.$refs.foodContent.clientHeight;
           this.heightList = foodPositionList;
           var ifMenu = false;
           if (this.$refs.menuContent.clientHeight < this.$refs.menuContent.getElementsByClassName('menuBox')[0].clientHeight){
             ifMenu = true;
           }
           this.scroll.on('scroll', (obj) => {
               console.log(me.heightList);
               console.log(Math.round(Math.abs(obj.y)));
               this.scrollY = Math.round(Math.abs(obj.y));
               if (this.scrollY > 0) {
                  var length = me.heightList.length;
                  console.log('用来比较的' + this.scrollY);
                  if (me.scrollY < me.heightList[0]){
                      // 首标签
                      me.focusIndex = 0;
                      console.log('top');
                    }else if (me.scrollY > me.heightList[length - 2]){
                      // 尾标签
                      me.focusIndex = length -1;
                      console.log('end');
                    }else{
                       for (var i = 0; i<=me.heightList.length-1; i++){
                        if( me.scrollY > me.heightList[i] && me.scrollY < me.heightList[i+1] ){
                          me.focusIndex = i + 1;
                          break;  
                       }
                  }
                    }
               }
               console.log('focusIndex现在是' + this.focusIndex);
               if (ifMenu){
                 me.menuAutoScroll(foodPositionList[foodPositionList.length-1]);
               }
             })
        });
      },
      menuAutoScroll(TfY){
        //可供滑动的长度
        var TmY = this.$refs.menuContent.clientHeight - this.$refs.menuContent.getElementsByClassName('menuBox')[0].clientHeight;
        //参照
        var percent = this.scrollY / TfY;
        var relSY = TmY * percent;
        this.scroll1.scrollTo(0,relSY,200);
      },
      chooseIndex(i){
        console.log(i);
        var boxlist = this.$refs.foodContent.getElementsByClassName('foodLan');
        var aimDiv = boxlist[i];
        this.scroll.scrollToElement(aimDiv,200,0,0);
        this.focusIndex = i;
      },
      receptAction(data){
        console.log(data);
        var me = this;
        var iFexist = false;
        me.buyGoods.forEach(
          (item,index) => {
            if (item.name === data.name){
              iFexist = true;
              if (data.count === 0){
                me.buyGoods.splice(index,1);
              }else{
                item.count = data.count;
              }
            }
          }
        )
        if (!iFexist){
          me.buyGoods.push(data);
        }
      },
      buyGoodsChange(){
        var money = 0 ;
        this.buyGoods.forEach(
          (item,index) => {
            money += item.totalMoney
          }
        );
        this.$store.commit('alterMoney',money);
        this.$store.commit('changeGoods',this.buyGoods);
      }
    },
    components:{
      scrollBtn
    }
  }
</script>
<style rel='stylesheet/stylus' lang='stylus'>
  @import '../../common/stylus/border1px';
  @import '../../common/stylus/header';
  /* 公用css类 */
  .hightlight
    background-color white
    >span 
      font-weight 500!important
      color red;
  /* 样式类 */
  .content
    display flex
    display -webkit-flex
    position absolute 
    width 100%
    top 176px
    left 0
    right 0
    bottom 46px
    flex-direction row
    .menuList
      display flex
      display -webkit-flex
      flex-direction column
      width 80px
      flex 0 0 80px
      background #f3f5f7
      overflow hidden
      .menuLan
        width 56px
        height 54px
        padding 0 12px
        & .icon
          ImgSrc(special_3)
          background-size 13px 13px
          width 13px 
          height 13px
          margin-bottom -1.5px
          margin-right 1px
          display inline-block
        & span
          display:-webkit-box;
          // -webkit-box-pack:center;
          -webkit-box-align:center;
          font-size 13px
          font-weight 300
          line-height 14px
          width 56px
          height 54px
          border1px(rgba(7,17,27,0.1))
    .foodList
      display flex
      display -webkit-flex
      flex-direction column
      flex 1
      overflow hidden
      .foodLan
        & > p
          background-color #f3f5f7
          font-size 12px
          color rgb(147,153,159)
          line-height 26px
          height 26px
          text-indent 14px
          border-left 1px solid #d9dde1
        .foods
          padding 18px
          display flex
          position relative
          .imgBox
            flex 0 0 57px
            padding-right 10px
            .foodImg
              width 57px
              height 57px
          .foodInfo
            width 100%
            p
              margin-bottom 8px
              font-size 10px
              color rgb(147,153,159)
              line-height 10px
              height 10px
            .title
              font-size 14px
              color rgb(7,17,27)
              line-height 14px
            .price
              width 100%
              .numBall
                display inline-block
                float right 
              &>span 
                text-decoration line-through
              &>span:first-child
                font-size 14px
                color red
                font-weight 700
                line-height 24px
                padding-right 8px
                text-decoration none
</style>

