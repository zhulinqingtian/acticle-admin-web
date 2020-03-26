<template>
  <div id="left-menu-container">
    <el-menu
      router
      :default-active="this.$route.path"
      background-color="#03152A"
      text-color="rgba(255,255,255,.7)"
      active-text-color="#ffffff"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse">
      <template v-for="(item, index) in $store.getters.routers" v-if="!item.hidden">
        <el-submenu v-if="item.children.length > 0" :index="index+''" :key="index+''">
          <template slot="title">
            <i :class="item.iconCls ? item.iconCls : ['fa', 'fa-server']"></i>
            <span slot="title">{{ item.name }}</span>
          </template>
          <menu-ul :menuData="item.children"></menu-ul>
        </el-submenu>
        <el-menu-item :index="item.path" v-else :key="index+''">
          <i :class="item.iconCls ? item.iconCls : ['fa', 'fa-server']"></i>
          <span slot="title">{{ item.name }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
import MenuUl from './MenuUl'

export default {
  name: 'aside-menu',
  data () {
    return {
      isCollapse: false
    }
  },
  components: {
    MenuUl
  },
  watch: {
    // 监听浏览器直接输入路由，将此路由添加到tabnavBox
    '$route.path': function () {
      // this.selectmenu(val)
    }
  },
  created () {
    this.$store.dispatch('getRoutes')
    console.log('this:', this.$store.getters)
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
