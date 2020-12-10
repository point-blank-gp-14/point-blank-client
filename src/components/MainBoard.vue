<template>
      <div class="main-board">
       <div class="gameBoard">
        <div class="container">
          <div class="box item1">1</div>
          <div class="box item2">2</div>
          <div class="box item3">3</div>
          <div class="box item4">4</div>
          <div class="box item5">5</div>
          <div class="box item6">6</div>
          <div class="box item7">7</div>
          <div class="box item8">8</div>
          <div class="box item9">9</div>
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
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
              </tr>
            </tbody>
          </table>
      </div>
    </div>
</template>

<script>
export default {
  name: 'mainBoard'
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
