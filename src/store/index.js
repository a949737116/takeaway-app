import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex);
export default new Vuex.Store({
  state:{
    totalMoney:0,
    buyGoods:[]
  },
  mutations: {
    alterMoney(state,n){
      state.totalMoney = n;
      console.log(state.totalMoney);
    },
    changeGoods(state,m){
      state.buyGoods = m;
    },
    toChangeGoods(state,ndata){
      console.log(ndata);
      console.log('仓库修改');
      state.buyGoods.forEach((v,i)=>{
        if (v.name === ndata.name){
          if (ndata.count === 0){
            state.buyGoods.splice(i,1);
            return;
          }else{
            state.buyGoods[i].count = ndata.count;
            state.buyGoods[i].totalMoney = state.buyGoods[i].count * state.buyGoods[i].price;
          }
        }
      })
    }
  }

})