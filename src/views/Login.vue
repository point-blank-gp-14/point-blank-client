<template>
  <section id="login" style="height: 100vh;">
    <div class="d-flex bg-dark justify-content-center align-items-center" style="height: 100%;">
      <div class="p-5 bg-light shadow" style="width: 20%; border-radius: 10px;">
        <div>
          <h1 class="text-center">Point Blank.io</h1>
          <img class="w-100" src="../assets/image.png" alt="login page">
          <form class="mt-4" @submit.prevent="login">
            <div class="form-group">
              <input class="form-control" v-model="name" type="text" placeholder="your username" id="username">
            </div>
            <button class="btn btn-block text-white" type="submit" style="background-color: #42b0f8;">Play now!</button>
          </form>
          <!-- <br> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'Login',
  data () {
    return {
      name: ''
    }
  },
  methods: {
    login () {
      const user = this.name
      console.log(user, 'ini nama dari metod')
      if (user) {
        if (this.$store.state.players.length < 4) {
          this.$store.commit('REGISTER', this.name)
          console.log('dia lewat')
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Sorry, room is already full'
          })
        }
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please dont leave username empty'
        })
      }
    }
  },
  created () {
    this.$store.commit('getPlayers')
  }
}
</script>

<style scoped>
h1{
  color:gold;
}

</style>
