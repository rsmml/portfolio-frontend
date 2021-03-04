<template>
  <div id='media-btns'>
    <ul v-if="darkMode" class="dark">
      <a href="https://www.linkedin.com/in/rodrigosommacal/" target="blank">
        <li><font-awesome-icon class="dark" :icon="['fab', 'linkedin-in']" /></li>
      </a>
      <a href="https://github.com/rsmml" target="blank">
        <li><font-awesome-icon class="dark" :icon="['fab', 'github']" /></li>
      </a>
    </ul>
    <ul v-else class="light">
      <a href="https://www.linkedin.com/in/rodrigosommacal/" target="blank">
        <li><font-awesome-icon class="light" :icon="['fab', 'linkedin-in']" /></li>
      </a>
      <a href="https://github.com/rsmml" target="blank">
        <li><font-awesome-icon class="light" :icon="['fab', 'github']" /></li>
      </a>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MediaBtns',
  computed: {
    darkMode () {
      return this.$store.state.darkMode
    }
  }
}
</script>

<style scoped>
  ul.dark {
    background-color: #1c1d26;
  }
  ul.light {
    background-color: #eeeeee;
  }
  ul.dark, ul.light {
    list-style: none;
    position: absolute;
    right: 0;
    top: 45%;
    width: 53px;
    padding: 16px 21px 16px 12px;
    border-radius: 4px 0 0 4px;
  }
  svg.dark, svg.light {
    font-size: 24px;
    margin: 16px 0;
    transition: 0.3s ease;
  }
  svg.dark {
    color: white;
  }
  svg.light {
    color: #202231;
  }
  svg:hover {
    transform: scale(1.4);
  }
</style>
