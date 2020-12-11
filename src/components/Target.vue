<template>
  <div>
    <button v-if="index == currentPosition || currentPosition == 0" @click.prevent="trigger">klik</button>
  </div>
</template>

<script>
export default {
  name: 'Target',
  props: ['index'],
  computed: {
    currentPosition () {
      return this.$store.state.position
    }
  },
  methods: {
    trigger () {
      console.log(this.index, this.currentPosition)
      this.$store.commit('randomPosition')
      this.$store.commit('addScore')
    }
  }
}
</script>

<style>

</style>
