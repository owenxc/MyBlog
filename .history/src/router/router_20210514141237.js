import VueRouter from 'vue-router'

import login from '../components/login/login'
import mainPage from '../components/mainPage'
Vue.use(VueRouter)


const routes = [
  { path: '/', redirect:'/login'},
  { path:'/login', component:login},
  { path:'/mainPage', component:mainPage,
    //  children:[
    //    {path:'/asiderBar', component:asiderBar, meta:{isLogin:true}}
    //  ]


  }
]

const router = new VueRouter({
  mode:'has'
   routes:routes
})
export default router
