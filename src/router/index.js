import Vue from 'vue'
import Router from 'vue-router'
import test from 'vue-components/test'
import food from 'vue-components/food/food'
import seller from 'vue-components/seller/seller'
import ratings from 'vue-components/ratings/ratings'
import content from 'vue-components/content/content'

Vue.use(Router)

export default new Router({
  //去除url地址里的丑陋hash（#）
  mode: 'history',
  linkExactActiveClass : 'tab-active',
  routes: [
    {
      path: '/',
      redirect: '/food',
      meta:{
        keepAlive:true
      }
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: ratings
    },
    {
      path: '/seller',
      name: 'seller',
      component: seller
    },
    {
      path: '/food',
      name: 'food',
      component: content
    }
  ]
})
