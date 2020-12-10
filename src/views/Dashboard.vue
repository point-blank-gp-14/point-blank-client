<template>
  <div>
    <h1 class="mb-5"><button @click.prevent="goToHome" class="btn btn-primary">play</button></h1>
    <PlayerCard
      v-for="(player,i) in players"
      :key="i"
      :player="player"
    />
  </div>
</template>

<script>
import PlayerCard from '../components/PlayerCard'

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
      this.$router.push('/home')
      this.$store.commit('doPlay')
    }
  }
}
</script>

<style>

</style>
