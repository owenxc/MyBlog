import VueRouter from 'vue-router'

const mainPage = resolve => require(["@/components/homePage"], resolve);

const routers = [
  { path: '/', redirect: '/homePage' },
  {
    path: '/homePage', name: 'homePage', component: homePage,
  },
]

const router = new VueRouter({
  mode: 'hash',
  routes: routers
})
export default router
