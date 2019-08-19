<template>
  <div class="full-screen login">
    <div class="left-screen"></div>
    <div class="right-screen">

      <el-form v-model="loginForm" status-icon :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="age">
          <el-input v-model="loginForm.loginCode" prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="loginForm.plainPassword" prefix-icon="el-icon-key"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">提交</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Login',
    data() {
      return {
        loginForm: {
          loginCode: null,
          plainPassword: null
        }
      };
    },
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login {
    font-family: "YouYuan","Yuanti SC",Arial, sans-serif;
  }

  .full-screen {
    position: relative;
    height: 100vh;
    width: 100%;
    background-image: url('../assets/img/bg_login.jpg');
    background-repeat: no-repeat;
    background-size:cover;
  }

  .left-screen {
    position: absolute;
    height: 100%;
    width: 50%;
  }

  .right-screen {
    position: absolute;
    height: 50%;
    width: 30%;
    top: 25%;
    right: 10%;
    background-color: #FFFFFF33;
    display: -webkit-flex;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5%;
    box-shadow:4px 4px 20px #000;
  }

  .login input {
    background-color: #FFFFFF80;
  }
</style>
