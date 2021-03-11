<template>
  <div id="work-b" class="animate__animated animate__fadeIn">

    <div class="work-container">
      <h1>McMakler</h1>
      <p></p>
      <div>
        <a href="https://github.com/rsmml/mcmakler-back-end" target="_blank">Github</a>
        <a href="https://mcmakler-challenge-rsmml.herokuapp.com/" target="_blank">Website</a>
      </div>
    </div>

    <div class="work-container">
      <h1>SmartLinks</h1>
      <p></p>
      <div>
        <a href="https://smart-links-fe.herokuapp.com/" target="_blank">Website</a>
      </div>
    </div>

    <div class="work-container">
      <h1>Messages API</h1>
      <p></p>
      <div>
        <a href="https://github.com/rsmml/spectrm-challenge" target="_blank">Github</a>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'WorkB'
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
      height: inherit;
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
  @media (min-width: 767px) and (max-width: 1440px) {
    #work-b {
      width: 100%;
      height: 72%;
      overflow-y: auto !important;
      overflow-x: hidden !important;
    }
    .work-container {
      background-color: #202231;
      padding: 20px;
      color: white;
      transition: 0.3s ease;
      margin: 24px 0;
      text-align: start;
      height: max-content;
    }
    .work-container:hover {
      background-color: transparent;
      transform: scale(1.02);
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
  @media (min-width: 1441px) {
    .work-container {
      background-color: #202231;
      padding: 20px;
      color: white;
      transition: 0.3s ease;
      margin: 24px 0;
      text-align: start;
      height: max-content;
    }
    .work-container:hover {
      background-color: transparent;
      transform: scale(1.02);
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
