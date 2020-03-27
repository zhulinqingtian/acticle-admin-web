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

  // 抽屉组件样式
  .el-drawer__title{
    padding: 24px;
  }

  .panel{
    background-color: #fff;
    padding: 24px;
  }

  @mixin flex-Justify($val) {
    justify-content: $val;
  }
  @mixin width($val) {
    width: $val;
  }
  .flex-container{
    display: flex;
    justify-content: space-between;
  }
  .flex-width{
    padding: 16px;
    &.flex-width-500{
      width: 500px
    }
  }
  .flex-auto{
    flex: 1;
    padding: 16px;
  }
  .space-between{
    @include  flex-Justify(space-between)
  }

  @mixin text-overflow($val) {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: $val;
    overflow: hidden;
  }
</style>
