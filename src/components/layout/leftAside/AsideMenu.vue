<template>
  <div id="left-menu-container">
<!--    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">-->
<!--      <el-radio-button :label="false">展开</el-radio-button>-->
<!--      <el-radio-button :label="true">收起</el-radio-button>-->
<!--    </el-radio-group>-->
    <el-menu
      background-color="#03152A"
      text-color="rgba(255,255,255,.7)"
      active-text-color="#ffffff"
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'aside-menu',
  data () {
    return {
      isCollapse: false
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss">
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-menu-item.is-active {
    background-color: #56a9ff !important
  }
  .el-submenu{
    width: 200px;
  }
  .el-menu-item-group>ul{
    width: 200px;
  }
  #left-menu-container{
    height: 100%;
  }
</style>
