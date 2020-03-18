<template>
  <div>
    <p>首页</p>
    <el-button @click="visible = true">Button</el-button>
    <el-dialog :visible.sync="visible" title="Hello world">
      <form>
        <el-input v-model="name" placeholder="名称" style="width:200px"></el-input>
        <el-input v-model="price" placeholder="价格" style="width:200px"></el-input>
        <el-button type="primary" @click="addUser">提交</el-button>
      </form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
      visible: false,
      name: '',
      price: ''
    }
  },
  methods: {
    addUser () {
      var name = this.name
      var price = this.price
      this.$http.post('/api/user/addUser', {
        name: name,
        price: price
      }, {}).then((res) => {
        console.log(res)
      })
    }
  }
}
</script>

<style scoped>

</style>
