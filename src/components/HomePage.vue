<template>
  <div>
    <p class="my-element">首页</p>
    <p>
      <el-link href="/login" target="_blank" type="primary">登陆</el-link>
    </p>
    <p>
      <el-link href="/view/hello" target="_blank" type="primary">hello</el-link>
    </p>
    <p>
      <el-link href="/view/mainLayout" target="_blank" type="primary">MainLayout</el-link>
    </p>
    <img src="imgs/logo.jpg" alt="">
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {}
  },
  methods: {}
}
</script>

<style scoped lang="scss">
  .red{
    color: red
  }
</style>
