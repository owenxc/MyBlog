import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import mavonEditor from 'mavon-editor'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router//router'
import store from './store/store'
import './icons'
import './assets/css/common.less'
import 'mavon-editor/dist/css/index.css'
import particles from 'particles.js'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(particles)
Vue.use(mavonEditor)
Vue.prototype.axios = axios

//导航守卫
router.beforeEach((to,from,next)=>{
  return next()
})



new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
}).$mount('#app')
