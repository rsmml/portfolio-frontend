<template>
  <div id="work-a" class="animate__animated animate__fadeIn">
    <div class="work-container">
      <h1>Cashles-386</h1>
      <p></p>
      <div>
        <a href="https://github.com/rsmml/cashless_386" target="_blank">Github</a>
        <a href="https://cashless-386.herokuapp.com/" target="_blank">Website</a>
      </div>
    </div>
    <div class="work-container">
      <h1>Boat-Bnb</h1>
      <p></p>
      <div>
        <a href="https://github.com/rsmml/boat-bnb" target="_blank">Github</a>
        <a href="http://boat-bnb-386.herokuapp.com/" target="_blank">Website</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkA'
}
</script>

<style scoped>
  @media (max-width: 767px) {
    h1 {
      font-size: 32px;
    }
    .work-container {
      background-color: #202231;
      padding: 8px;
      color: white;
      transition: 0.3s ease;
      margin: 12px 0;
      text-align: start;
    }
    .work-container:hover {
      background-color: transparent;
      transform: scale(1.05);
      color: #202231 !important;
      cursor: pointer;
    }
    a {
      text-decoration: none;
      color: white !important;
      background-color: #202231;
      padding: 2px 8px;
    }
    a:hover {
      cursor: pointer !important;
      text-decoration: none;
    }
  }
  @media (min-width: 767px) {
    .work-container {
      background-color: #202231;
      padding: 20px;
      color: white;
      transition: 0.3s ease;
      margin: 24px 0;
      text-align: start;
    }
    .work-container:hover {
      background-color: transparent;
      transform: scale(1.05);
      color: #202231 !important;
      cursor: pointer;
    }
    a {
      text-decoration: none;
      color: white !important;
      background-color: #202231;
      padding: 4px 12px;
    }
    a:hover {
      cursor: pointer !important;
      text-decoration: none;
    }
  }
</style>

