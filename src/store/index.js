import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    position: 1,
    players: [],
    playerName: '',
    winner: ''
  },
  getters: {
    getLeadboards (state) {
      return state.players.sort((a, b) => {
        if (a.score > b.score) return -1
        if (a.score < b.score) return 1
        return 0
      })
    }
  },
  mutations: {
    REGISTER (state, payload) {
      this._vm.$socket.emit('register', payload)
      router.push('/dashboard')
      state.playerName = payload
    },
    randomPosition (state, payload) {
      this._vm.$socket.emit('GET_POSITION', state.position)
    },
    SOCKET_GET_NEW_POSITION (state, payload) {
      state.position = +payload
    },
    getPlayers (state, payload) {
      this._vm.$socket.emit('getPlayers')
    },
    SOCKET_FETCH_USER (state, payload) {
      state.players = payload
    },
    doPlay (stay, payload) {
      this._vm.$socket.emit('play')
    },
    SOCKET_DO_PLAY (state, payload) {
      router.push('/home')
    },
    addScore (state, payload) {
      console.log(state.playerName)
      this._vm.$socket.emit('addScore', state.playerName)
    },
    SOCKET_END_TRIGGER (state, payload) {
      console.log(payload)
      router.push('/dashboard')
      state.winner = payload
      Swal.fire({
        title: 'Sweet!',
        text: payload + ' is the winner.',
        imageUrl: 'https://pngimg.com/uploads/crown/crown_PNG16.png',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image'
      })
      this._vm.$socket.emit('restart')
    },
    SOCKET_TRIGGER_SOUND (state, payload) {
      console.log('duar')
    }
  },
  actions: {
  },
  modules: {
  }
})
