<template>
  <div class="content">
    <el-form
      id='loginForm'
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
      action="/api/login"
    >
      <el-form-item label="用户名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="用户密码" prop="name">
        <el-input v-model="ruleForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="toSubmit">登录</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script type="text/babel">
import API from '../assets/js/common/api'
export default {
  name: 'login',
  data () {
    return {
      ruleForm: {
        name: '',
        password: ''
      },
      rules: {
        name: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
          {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
        ]
      }
    }
  },
  created: function () {},
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.toSubmit()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    toSubmit () {
      API.login(this.ruleForm)
        .then(result => {
          console.log('result:', result)
        })
        .catch(err => {
          console.log('err:', err)
          window.location.href = 'http://localhost:10020'
        })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  },
  components: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .content{
    width: 500px;
    margin: 0 auto;
  }
  h2 {
    text-align: center;
  }
</style>
