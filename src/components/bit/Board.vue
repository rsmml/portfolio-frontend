<template>
  <div id="board" class="game-board">
    <div class="wall"></div>
    <div class="wall"></div>
    <div class="wall"></div>
    <div class="wall"></div>
    <div class="wall"></div>
    <div class="wall"></div>
    <div class="wall"></div>
    <div class="wall"></div>
    <div class="wall"></div>
    <div class="wall"></div>
    <div class="wall"></div>
    <div class="wall"></div>
    <div class="wall"></div>
    <div class="wall"></div>
    <div class="wall"></div>
    <div class="wall"></div>
    <div class="wall"></div>

    <div id="31" class="box"></div>

    <div class="wall"></div>
    <div class="wall"></div>
    <!-- 20 -->
    <div class="wall"></div>
    <div class="wall"></div>
    <div class="wall"></div>
    <div class="wall"></div>
    <div class="wall"></div>
    <div class="wall"></div>
    <div class="wall"></div>
    <div class="wall"></div>
    <div class="wall"></div>
    <div class="wall"></div>
    <div class="wall"></div>
    <div class="wall"></div>
    <div class="wall"></div>
    <div class="wall"></div>
    <div class="wall"></div>
    <div class="wall"></div>
    <div class="wall"></div>

    <div id="30" class="box"></div>
    <div id="29" class="box"></div>

    <div class="wall"></div>
    <!-- 40 -->
    <div id="1" class="box active"></div>
    <div id="2" class="box"></div>
    <div id="3" class="box"></div>
    <div id="4" class="box"></div>
    <div id="6" class="box"></div>
    <div id="7" class="box"></div>
    <div id="8" class="box"></div>
    <div id="9" class="box"></div>
    <div id="10" class="box"></div>
    <div id="11" class="box"></div>
    <div id="12" class="box"></div>
    <div id="13" class="box"></div>

    <div class="wall"></div>
    <div class="wall"></div>
    <div class="wall"></div>
    <div class="wall"></div>
    <div class="wall"></div>
    <div class="wall"></div>

    <div id="28" class="box"></div>
    <div id="27" class="box"></div>
    <!-- 60 -->
    <div class="wall"></div>
    <div class="wall"></div>
    <div class="wall"></div>

    <div id="5" class="box"></div>

    <div class="wall"></div>
    <div class="wall"></div>
    <div class="wall"></div>
    <div class="wall"></div>
    <div class="wall"></div>
    <div class="wall"></div>
    <div class="wall"></div>

    <div id="14" class="box"></div>
    <div id="15" class="box"></div>

    <div class="wall"></div>
    <div class="wall"></div>
    <div class="wall"></div>
    <div class="wall"></div>
    <div class="wall"></div>
    <div class="wall"></div>

    <div id="26" class="box"></div>
    <!-- 80 -->
    <div class="wall"></div>
    <div class="wall"></div>
    <div class="wall"></div>
    <div class="wall"></div>
    <div class="wall"></div>
    <div class="wall"></div>
    <div class="wall"></div>
    <div class="wall"></div>
    <div class="wall"></div>
    <div class="wall"></div>
    <div class="wall"></div>
    <div class="wall"></div>

    <div id="16" class="box"></div>

    <div class="wall"></div>
    <div class="wall"></div>
    <div class="wall"></div>
    <div class="wall"></div>

    <div id="23" class="box"></div>
    <div id="24" class="box"></div>
    <div id="25" class="box"></div>
    <!-- 100 -->
    <div class="wall"></div>
    <div class="wall"></div>
    <div class="wall"></div>
    <div class="wall"></div>
    <div class="wall"></div>
    <div class="wall"></div>
    <div class="wall"></div>
    <div class="wall"></div>
    <div class="wall"></div>
    <div class="wall"></div>
    <div class="wall"></div>
    <div class="wall"></div>

    <div id="17" class="box"></div>
    <div id="18" class="box"></div>
    <div id="19" class="box"></div>
    <div id="20" class="box"></div>
    <div id="21" class="box"></div>
    <div id="22" class="box"></div>
  </div>
</template>

<script>
export default {
  name: 'Board'
}
</script>

<style scoped>
  #board {
    position: absolute;
    top: 0;
    z-index: -1;
    background-image: url(../../assets/map.png);
    background-size: contain;
    width: 1440px;
    height: 100vh;
    background-repeat: no-repeat;
  }
  .game-board {
    margin-top: 140px;
    display: grid;
    grid-template-columns: repeat(20, 70px);
  }
</style>
