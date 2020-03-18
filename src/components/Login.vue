<template>
  <div class="content">
    <div class="option-detail-box">
      <form action="/login" method="post" id="loginForm" onsubmit="toLogin">
        <table class="option-detail">
          <tr>
            <td colspan="2"><h2>登录</h2></td>
          </tr>
          <tr>
            <td>用户名：</td>
            <td>
              <Input name="name" v-model="userName" placeholder="请输入用户名" style="width: 300px"/>
            </td>
          </tr>
          <tr>
            <td>密码：</td>
            <td>
              <Input type='password' name="password" v-model="userPass" placeholder="请输入密码"
                     style="width: 300px"/>
            </td>
          </tr>
          <tr>
            <td style="text-align: center" colspan="2">
              <input type="submit" class="login-btn ivu-btn" value="登录"/>
            </td>
          </tr>
        </table>
      </form>
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
      if (!this.userName) {
        return this.$Message.warning('请输入用户名！')
      }
      if (!this.userPass) {
        return this.$Message.warning('请输入密码！')
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
    margin-right: 20px;

  }

  h2 {
    text-align: center;
  }
</style>
