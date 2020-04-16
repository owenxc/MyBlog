import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login/login.vue'
import mainPage from '@/components/mainPage'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect:'/login'},
    {path:'/login',component:login}
  ]
})
