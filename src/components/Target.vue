<template>
  <div>
    <!-- <button >klik</button> -->
    <img src="./image/kucing2.png" class="kucing" alt="gambar kucing" v-if="index == currentPosition" @click.prevent="trigger">
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
.kucing {
    margin-top: 15%;
    position: relative;
    bottom: 25px;
    cursor: url(image/shot.png), auto;
}
</style>
