<template>
  <div class="full-screen login">
    <div class="left-screen"></div>
    <div class="right-screen">

      <el-form :model="loginForm" status-icon :rules="loginRules" ref="loginForm" class="demo-ruleForm"
               :disabled="flagLogin">
        <el-form-item prop="loginCode">
          <el-input v-model="loginForm.loginCode" prefix-icon="el-icon-user" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item prop="plainPassword">
          <el-input type="password" v-model="loginForm.plainPassword" prefix-icon="el-icon-key"
                    placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" :loading="flagLogin" @click="login">登陆</el-button>
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
        flagLogin: false,
        loginForm: {
          loginCode: null,
          plainPassword: null
        },
        loginRules: {
          loginCode: [
            {required: true, message: '请输入账号', trigger: 'blur'}
          ],
          plainPassword: [
            {required: true, message: '请输入密码', trigger: 'blur'}
          ]
        }
      };
    },
    methods: {
      login() {
        this.$refs['loginForm'].validate((valid) => {
          if (valid) {
          } else {
            return false;
          }
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login {
    font-family: "YouYuan", "Yuanti SC", Arial, sans-serif;
  }

  .full-screen {
    position: relative;
    height: 100vh;
    width: 100%;
    background-image: url('../assets/img/bg_login.jpg');
    background-repeat: no-repeat;
    background-size: cover;
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
    border-radius: 2%;
    box-shadow: 4px 4px 20px #000;
  }

</style>
