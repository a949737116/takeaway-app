import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex);
export default new Vuex.Store({
  state:{
    totalMoney:0
  },
  mutations: {
    alterMoney(state,n){
      state.totalMoney = n;
      console.log(state.totalMoney);
    }
  }

})