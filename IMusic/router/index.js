import Vue from 'vue'
import Home from '../src/components/Home'
import Recommend from "../src/components/Recommend"
import Billboard from "../src/components/Billboard"
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/recommend',
        name: 'Recommend',
        component: Recommend
      },
      {
        path:'/billboard',
        name:'Billboard',
        component: Billboard
      }
    ]
})