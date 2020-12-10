<template>
  <section>
    <div class="card mb-3 rounded-pill p-1 btn-outline-primary mt-5" style="width:25%" >
      <div class="row no-gutters">
        <div class="col-md-4">
          <img
            src="https://robohash.org/YOUR-TEXT.png?set=set4"
            class="card-img rounded-circle"
            alt="..."
          />
        </div>
        <div class="card-body">
          <h5 class="card-title">{{ player.name }}</h5>
          <p class="card-text">oke</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['player']
}
</script>

<style>

</style>
