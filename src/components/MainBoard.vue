<template>
      <div class="main-board">
       <div class="gameBoard">
        <div class="container">
          <div class="box item0">0<Target :index="0"></Target></div>
          <div class="box item1">1<Target :index="1"></Target></div>
          <div class="box item2">2<Target :index="2"></Target></div>
          <div class="box item3">3<Target :index="3"></Target></div>
          <div class="box item4">4<Target :index="4"></Target></div>
          <div class="box item5">5<Target :index="5"></Target></div>
          <div class="box item6">6<Target :index="6"></Target></div>
          <div class="box item7">7<Target :index="7"></Target></div>
          <div class="box item8">8<Target :index="8"></Target></div>
          <div class="box item9">9<Target :index="9"></Target></div>
        </div>
      </div>
      <div class="scoreBoard">
        <h1>Leaderboard</h1>
          <table class="table table-striped table-dark">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Score</th>
              </tr>
            </thead>
            <tbody class="tbody-light">
              <tr v-for="(player, i) in getLeadboards" :key="i">
                <th scope="row">{{i+1}}</th>
                <td>{{player.name}}</td>
                <td>{{player.score}}</td>
              </tr>
            </tbody>
          </table>
      </div>
    </div>
</template>

<script>
import Target from './Target.vue'

export default {
  components: { Target },
  name: 'mainBoard',
  computed: {
    getLeadboards (state) {
      return this.$store.getters.getLeadboards
    }
  }
}
</script>

<style>
  .main-board {
   display: flex;
   /* background: url(https://images.wallpaperscraft.com/image/snow_winter_trees_136654_3840x2160.jpg)center no-repeat */
 }
 .scoreBoard {
   margin-left: 10%;
   width: 20%;
 }

 .scoreBoard, h1 {
   margin-top: 10px;
   margin-bottom: 30px;
   color: white;
 }
 .container {
    display: grid;
    grid-gap: 30px;
    margin-left: 20px;
    padding-left: 40px;
  }
  .box {
    display: block;
    width: 250px;
    height: 200px;
    background: url(image/kucing2.png)center no-repeat;
    background-size: 100%;
    text-align: center;
    /* padding: 20px; */
    font-size: 30px;
  }
  .item0 {
    grid-column: 4;
    grid-row: 2;
  }
  .item1 {
    grid-column: 1 / span 3;
    grid-row: 1;
  }
  .item2 {
    grid-column: 3;
    grid-row: 1 / span 2;
  }
  .item3 {
    grid-column: 1 / span 4;
    grid-row: 4;
  }
  .item4 {
    grid-column: 3;
    grid-row: 3;
  }
  .item8 {
    grid-column: 4;
    grid-row: 4;
  }
  .item9 {
    grid-column: 2;
    grid-row: 3;
  }
</style>
