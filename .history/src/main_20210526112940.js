// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element'
import App from './App'
import router from './router//router'
import store from './store/store'
import './assets/css/common.less'
import particles from 'particles.js'

Vue.config.productionTip = false
Vue.use(Element)
Vue.use(VueRouter)
Vue.use(particles)

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
}).$mount('#app')
