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
      <el-form-item label="编号" prop="name" v-show=false>
        <el-input v-model="ruleForm.id"></el-input>
      </el-form-item>
      <el-form-item label="角色" prop="name" v-show=false>
        <el-input v-model="ruleForm.role"></el-input>
      </el-form-item>
      <el-form-item label="用户名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="用户密码" prop="name">
        <el-input v-model="ruleForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
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
        id: '001',
        role: 'leader',
        name: '',
        password: ''
      },
      rules: {
        name: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
          {min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur'}
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
          this.$message({
            message: '登陆成功',
            type: 'success'
          })
          console.log('result:', result)
          document.cookie = 'loginUserName=' + result.name
          document.cookie = 'loginUserId=' + result.id || ''
          this.$store.dispatch('setUser', result)
          this.$router.push('/view/home')
          // window.location.href = 'http://localhost:10020'
        })
        .catch(err => {
          this.$message.error(err.message)
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
    margin: 100px auto 20px;
  }
  h2 {
    text-align: center;
  }
</style>
