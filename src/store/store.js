import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
    plugins:[createPersistedState()],
    state:{
        isLogin:false,
        asideDrawer:false,
        isMobile:false,
        userInfo:{name:'owen',type:'admin'}
    },
    mutations:{
        changeIsLogin(state,value){
            state.isLogin = value
        },
        changeAsideDrawer(state,value){
            state.asideDrawer = value
        },
        changeUserInfo(state,value){
            state.userInfo = value
        },
        changeIsMobile(state,value){
            state.isMobile = value
        }
    },
    actions:{
        actionChangeIsLogin(contex,value){
            contex.commit('changeIsLogin',value)
        },
        actionChangeAsideDrawer(contex,value){
            contex.commit('changeAsideDrawer',value)
        },
        actionChangeUserInfo(contex,value){
            contex.commit('changeUserInfo',value)
        },
        actionChangeIsMobile(contex,value){
            contex.commit('changeIsMobile',value)
        }
    }
})

export default store