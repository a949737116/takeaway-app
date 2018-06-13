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
    }
  }

})