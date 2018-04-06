import Vue from 'vue'
import Router from 'vue-router'
import test from 'vue-components/test'

Vue.use(Router)

export default new Router({
  //去除url地址里的丑陋hash（#）
  mode: 'history',
  routes: [
    {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})
