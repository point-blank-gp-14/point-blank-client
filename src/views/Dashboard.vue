<template>
  <div>
    <h1>ini dashboard</h1>
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
  }
}
</script>

<style>

</style>
