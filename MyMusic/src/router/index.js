import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Recommend from "@/components/Recommend"
import Billboard from "@/components/Billboard"

Vue.use(Router)

export default new Router({
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
