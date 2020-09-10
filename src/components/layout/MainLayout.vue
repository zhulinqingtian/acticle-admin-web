<template>
  <div id="layout">
    <el-container id="container">
      <layoutAside/>
      <el-container>
        <layoutHeader/>
        <el-main id="elmain">
          <transition name="main" mode="out-in">
            <router-view/>
          </transition>
        </el-main>
        <el-footer>
          <Footer/>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import layoutAside from './leftAside/AsideMenu'
import layoutHeader from './Header'
import Footer from './Footer'

export default {
  name: 'dc-home',
  components: {
    layoutHeader,
    Footer,
    layoutAside
  },
  created () {}
}
</script>

<style>
  .main-enter, .main-leave-to {
    opacity: 0;
    transform: translateY(30px);

  }

  .main-enter-active {
    transition: all 0.2s;
  }

  .main-leave-active {
    position: absolute;
    transition: all 0.3s;
  }
</style>
<style lang="scss">
  * {
    margin: 0px;
    padding: 0px;
  }
  body {
    background-color: #f2f2f2;
    font-size: 14px;
    color: #333333;
  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  $top: top;
  $bottom: bottom;
  $left: left;
  $right: right;
  $leftright: ($left, $right);
  %w100 {
    width: 100%;
  }
  %h100 {
    height: 100%;
  }
  %cursor {
    cursor: pointer;
  }
  html, body, .el-container, #asideNav, ul.el-menu {
    @extend %h100;
  }
  @mixin set-value($side, $value) {
    @each $prop in $leftright {
      #{$side}-#{$prop}: $value;
    }
  }
  #elmain {
    margin-top: 16px;
  }
</style>
<style lang="scss">
  #container{
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    background-color: #f0f2f5;
  }
</style>
