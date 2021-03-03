<template>
  <div id='media-btns'>
    <ul>
      <li><font-awesome-icon :icon="['fab', 'linkedin-in']" /></li>
      <li><font-awesome-icon :icon="['fab', 'github']" /></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MediaBtns'
}
</script>

<style scoped>
  ul {
    background-color: #1c1d26;
    list-style: none;
    position: absolute;
    right: 0;
    top: 45%;
    width: 53px;
    padding: 16px 21px 16px 12px;
    border-radius: 4px 0 0 4px;
  }
  svg.fa-linkedin-in, svg.fa-github {
    color: white;
    font-size: 24px;
    margin: 16px 0;
  }
</style>
