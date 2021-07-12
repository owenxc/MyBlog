import VueRouter from 'vue-router'

const mainPage = resolve => require(["@/pages/mainPage"], resolve);
const main = resolve => require(["@/pages/main/index"], resolve);
const blogManage = resolve => require(["@/pages/blogManage"], resolve);
const writeBlog = resolve => require(["@/pages/blogManage/writeBlog"], resolve);
const articleManage = resolve => require(["@/pages/blogManage/articleManage"], resolve);
const routers = [
  { path: '/', redirect: '/main' },
  {
    path: '/mainPage', name: 'mainPage', component: mainPage,
    children: [
      { path: '/main',name:'main', component: main }
    ]
  },
  {
    path: '/blogManage', name: 'blogManage', component: blogManage,
    children: [
      { path: 'writeBlog',name:'writeBlog', component: writeBlog },
      { path: 'articleManage',name:'articleManage', component: articleManage },
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes: routers
})
export default router
