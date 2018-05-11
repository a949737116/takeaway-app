<template>
  <div class='starBox'>
    <div>
      <i v-for='(item,index) in createScore' :key='index' :class="item"></i>
    </div>
    <!-- <i class='starOn36'></i>
    <i class='starHalf36 '></i>
    <i class='starOff36'></i> -->
  </div>
</template>
<script>
  export default {
    name:'star',
    props:{
      score:Number,
      size:String
    },
    computed:{
      createScore(){
        const size = this.size;
        console.log(this.score);
        const length = 5;
        let ifFloat = false;
        let scoreArray = [];
        let realScore = Math.round(this.score - 0.5);
        const ScoreCount = realScore;
        if (this.score - realScore>=0.5){
          realScore += 0.5;
          ifFloat = true;
        };
        for (var i = 0;i<=realScore-1;i++){
          scoreArray.push('starOn' + size);
        }
        if (ifFloat){
          scoreArray.push('starHalf' + size);
        }
        const offLength = length - scoreArray.length;
        for(var i = 0;i<=offLength-1;i++){
          scoreArray.push('starOff' + size);
        }
        console.log(scoreArray)
        return scoreArray
      }
    }
  }
</script>
<style rel='stylesheet/stylus' scoped lang='stylus' scpoed>
  @import '../../common/stylus/header.styl'
  .starBox
    text-align center
    & .starOn32
      ImgSrc(star36_on)
      width 30px
      height 30px
      background-size 30px 30px
      display inline-block
    & .starHalf32
      ImgSrc(star36_half)
      width 30px
      height 30px
      background-size 30px 30px
      display inline-block
    & .starOff32
      ImgSrc(star36_off)
      width 30px
      height 30px
      background-size 30px 30px
      display inline-block
    & .starOn24
      ImgSrc(star24_on)
      width 30px
      height 30px
      background-size 30px 30px
      display inline-block
    & .starHalf24
      ImgSrc(star24_half)
      width 30px
      height 30px
      background-size 30px 30px
      display inline-block
    & .starOff24
      ImgSrc(star24_off)
      width 30px
      height 30px
      background-size 30px 30px
      display inline-block
    & .starOn48
      ImgSrc(star48_on)
      width 30px
      height 30px
      background-size 30px 30px
      display inline-block
    & .starHalf48
      ImgSrc(star48_half)
      width 30px
      height 30px
      background-size 30px 30px
      display inline-block
    & .starOff48
      ImgSrc(star48_off)
      width 30px
      height 30px
      background-size 30px 30px
      display inline-block
</style>

