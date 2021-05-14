import VueRouter from 'vue-router'

const login = resolve => require(["@/components/login/login"],resolve);
const mainPage = resolve =>require(["@/components/mainPage"],resolve);
import mainPage from '../components/mainPage'
const routers = [
  { path: '/', redirect:'/login'},
  { path:'/login', component:login},
  { path:'/mainPage', component:mainPage
  


  }
]

const router = new VueRouter({
   mode:'hash',
   routes:routers
})
export default router
