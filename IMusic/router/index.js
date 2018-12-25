import Vue from 'vue'
import Home from '../src/components/Home'
import Recomd from "../src/components/Recomd"
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
        path: '/recomd',
        name: 'Home',
        component: Recomd
      },
    ]
})