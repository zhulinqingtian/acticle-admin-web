<template>
  <div id="app">
  <!-- <img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  @import "assets/css/common.scss";

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  * {
    line-height: 1.7;
    margin: 0;
    box-sizing: border-box;
  }
</style>
