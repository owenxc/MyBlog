import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
    plugins:[createPersistedState()],
    state:{
        UM:'',
    },
    mutations:{
        changeUM(state,value){
            state.UM = value;
        }
    },
    actions:{
        actionChangeUM(contex,value){
            // contex.commit('changeUM',value)
        }
    }
})

export default store