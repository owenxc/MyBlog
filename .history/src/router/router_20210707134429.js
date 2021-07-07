import VueRouter from 'vue-router'

const mainPage = resolve => require(["@/pages/mainPage"], resolve);

const routers = [
  { path: '/', redirect: '/mainPage' },
  {
    path: '/mainPage', name: 'homePage', component: homePage,
  },
]

const router = new VueRouter({
  mode: 'hash',
  routes: routers
})
export default router