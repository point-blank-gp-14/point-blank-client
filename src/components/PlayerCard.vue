<template>
  <section style="width: 20%; margin-left: 30px;">
    <div class="card mb-3 rounded-pill p-1 btn-outline-primary">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img
            :src="image"
            class="card-img rounded-circle"
            alt="..."
          />
        </div>
        <div class="card-body">
          <h5 class="card-title">{{ player.name }} P{{ i + 1 }}</h5>
          <p class="card-text">your score: {{ player.score }}</p>
          <p class="card-text">Ready!</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['player', 'i'],
  data () {
    return {
      image: `https://robohash.org/${this.player.name}.png?set=set4`
    }
  }
}
</script>

<style>

</style>
