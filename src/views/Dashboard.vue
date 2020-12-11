<template>
  <div class="dashboard">
    <nav class="navbar navbar-light bg-light mx-auto" style="width: 25%;">
      <div class="container d-flex justify-content-center">
        <a class="navbar-brand" href="#">
          POINT BLANK
        </a>
      </div>
    </nav>
    <h1><button @click.prevent="goToHome" class="btn btn-primary mr-5">PLAY</button></h1>
    <div>
      <PlayerCard
        v-for="(player,i) in players"
        :key="i"
        :player="player"
        :i="i"
      />
    </div>
    <video autoplay loop id="myVideo">
      <source src="../assets/Let-the-games-begin.mp4" type="video/mp4">
    </video>
    <div class="content">
      <h1>Objective</h1>
      <p>Shoot the target before your opponents shoot it. Mb1 = shoot. The player with the biggest score wins</p>
    </div>
  </div>
</template>

<script>
import PlayerCard from '../components/PlayerCard'
import Swal from 'sweetalert2'

export default {
  name: 'DashBoard',
  components: {
    PlayerCard
  },
  computed: {
    players () {
      return this.$store.state.players
    }
  },
  created () {
    this.$store.commit('getPlayers')
  },
  methods: {
    goToHome () {
      if (this.players.length < 4) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please wait untill 4 players'
        })
      } else {
        this.$router.push('/home')
        this.$store.commit('doPlay')
      }
    }
  }
}
</script>

<style scoped>
#myVideo {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: -1;
}
.content {
  position: fixed;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  color: #f1f1f1;
  width: 100%;
  padding: 20px;
}

.btn {
  position: fixed;
  bottom: 20vh;
  right: 78vh;
  width: 300px;
  height: 100px;
}
.navbar-brand{
  text-align: center;
}
.player-cards {
  height: 50vh;
  display: flex;
  align-items: center;
  width: 50vw;
}
</style>
