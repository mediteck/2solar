import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAuthenticated: false
  },
  mutations: {
    authenticate(state) {
      state.isAuthenticated = true;
    },
    dethenticate(state) {
      state.isAuthenticated = false;
    }
  },
  actions: {
  },
  modules: {
  }
})
