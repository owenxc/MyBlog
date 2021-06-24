import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
    plugins:[createPersistedState()],
    state:{
        UM:'',
        isLogin:false,
        asideDrawer:false,
    },
    mutations:{
        changeUM(state,value){
            state.UM = value;
        },
        changeIsLogin(state,value){
            state.IsLogin = value
        },
        changeAsideDrawer(state,value){
            state.asideDrawer = value
        }
    },
    actions:{
        actionChangeUM(contex,value){
            contex.commit('changeUM',value)
        },
        actionChangeIsLogin(contex,value){
            contex.commit('changeIsLogin',value)
        },
        actionChangeAsideDrawer(contex,value){
            contex.commit
        }
    }
})

export default store