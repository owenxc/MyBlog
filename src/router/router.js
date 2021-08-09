import VueRouter from 'vue-router'

const mainPage = resolve => require(["@/pages/mainPage"], resolve);
const main = resolve => require(["@/pages/main/index"], resolve);
const blogManage = resolve => require(["@/pages/blogManage"], resolve);
const writeBlog = resolve => require(["@/pages/blogManage/writeBlog"], resolve);
const articleManage = resolve => require(["@/pages/blogManage/articleManage"], resolve);
const articleShow = resolve => require(["@/pages/articleShow/index"],resolve);
const login = resolve => require(["@/login"],resolve);
const library = resolve => require(["@/pages/library"],resolve);
const routers = [
  { path: '/', redirect: '/main' },
  {
    path: '/mainPage', name: 'mainPage', component: mainPage,
    children: [
      { path: '/main',name:'main', component: main },
      { path:'/articleShow',name:'articleShow',component:articleShow}
    ]
  },
  {
    path: '/blogManage', name: 'blogManage', component: blogManage,
    children: [
      { path: '/writeBlog',name:'writeBlog', component: writeBlog },
      { path: '/articleManage',name:'articleManage', component: articleManage },
    ]
  },
  {
    path:'/login',name:'login',component:login
  },
  {
    path:'/library',name:'library',component:library
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes: routers
})
export default router
