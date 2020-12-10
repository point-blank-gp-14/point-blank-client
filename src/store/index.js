import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    position: 0
  },
  mutations: {
    REGISTER (state, payload) {
      this._vm.$socket.emit('register', payload)
    },
    randomPosition (state, payload) {
      this._vm.$socket.emit('GET_POSITION', state.position)
    },
    SOCKET_GET_NEW_POSITION (state, payload) {
      state.position = +payload
    }
  },
  actions: {
  },
  modules: {
  }
})
