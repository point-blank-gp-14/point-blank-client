<template>
  <div class="home">
    <nav class="navbar navbar-light bg-light">
      <div class="container d-flex justify-content-between">
        <div v-for="(player,i) in players" :key="i"  class="p-2">{{ player.name }} => {{ player.score }}</div>
      </div>
    </nav>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  computed: {
    players () {
      return this.$store.state.players
    }
  }
}
</script>

<style scoped>
.home{
  background-image: url('https://webstockreview.net/images/jungle-clipart-animation.gif');
  background-size: cover;
  height: 100vh;
  padding:0;
  margin:0;
}
</style>
