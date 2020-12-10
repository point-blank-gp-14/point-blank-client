import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
    REGISTER (state, payload) {
      this._vm.$socket.emit('register', payload)
    }
  },
  actions: {
  },
  modules: {
  }
})
