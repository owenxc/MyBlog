import VueRouter from 'vue-router'

const mainPage = resolve => require(["@/pages/mainPage"], resolve);
const main =  resolve => require(["@/pages"])
const routers = [
  { path: '/', redirect: '/mainPage' },
  {path: '/mainPage', name: 'mainPage', component: mainPage,
    children:[
      {path:'/main',component:main}
    ]
  },
]

const router = new VueRouter({
  mode: 'hash',
  routes: routers
})
export default router
