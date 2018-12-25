import Vue from 'vue'
import App from './App.vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import router from '../router/index'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(MintUI)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
