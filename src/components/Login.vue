<template>
  <div class="content">
    <div class="option-detail-box">
      <p>登录</p>
    </div>

  </div>
</template>

<script type="text/babel">

export default {
  name: 'login',
  data () {
    return {
      userName: '',
      userPass: ''
    }
  },
  created: function () {},
  methods: {
    // 登录
    toLogin () {
      console.log(1)
      if (!this.userName) {
        return this.$message('请输入用户名！')
      }
      if (!this.userPass) {
        return this.$message('请输入密码！')
      }

      return document.getElementById('loginForm').submit()
    },
    removeHeader () {
      document.querySelector('#nav-bar').remove()
    }
  },
  components: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .content {
    padding: 0;
    padding-top: 100px;
  }

  .option-detail tr td {
    font-size: 14px;
  }

  .tr-label {
    width: 100px;
    text-align: right;
    font-weight: bold;
  }

  .option-detail-box {
    width: 500px;
    height: 280px;
    margin: 0 auto;
    padding: 40px 20px;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 14px 1px rgba(0, 0, 0, 0.2);
    background-color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 60px;
    margin: auto;
  }

  .option-detail {
    margin: 0 auto;
  }

  .option-detail tr {
    height: 50px;
    line-height: 50px;
  }

  .option-detail tr td:nth-child(2) {
    padding-left: 30px;
  }

  .login-btn {
    color: #fff;
    background-color: #409eff;
    border: 1px solid #409eff;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    padding: 6px 20px;
    font-size: 14px;
    border-radius: 4px;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    font: 400 14px Arial;
  }

  h2 {
    text-align: center;
  }
</style>
