<template>
  <div class="full-screen login">
    <div class="left-screen"></div>
    <div class="right-screen"
         v-loading="flagLogin"
         :element-loading-text="'['+loginForm.loginCode+']身份验证中...'"
         element-loading-background="rgba(0, 0, 0, 0.1)">
      <el-form :model="loginForm" status-icon :rules="loginRules" ref="loginForm" class="demo-ruleForm form"
               v-show="!flagLogin">
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
        <!--数据加载异常后的提示-->
        <alert-sys-error :isError="flagLoadError" :text="textLoginError"></alert-sys-error>

      </el-form>
      <br/>
    </div>
  </div>
</template>
<script>
  import https from '../common/https';

  export default {
    name: 'Login',
    data() {
      return {
        flagLogin: false,
        //数据加载失败
        flagLoadError: false,

        textLoginError: null,

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
        //错误提示不显示
        if(this.flagLoadError) {
          this.flagLoadError = false;
        }
        //开始提交
        this.$refs['loginForm'].validate(async (valid) => {
          //表单验证成功
          if (valid) {
            //开始登陆标记，加载进度条
            this.flagLogin = true;
            await https.post("/outh/login/", this.loginForm).then((response) => {
              //登陆成功
              if(response.data.status === 200) {
                var token = response.data.data;
                if(token) {
                  localStorage.setItem(this.global.TOKEN,token);
                  this.$router.replace("/Home")
                }
              }
              //登陆失败
              else {
                var textLoginError = response.data.msg;
                if(textLoginError) {
                  this.textLoginError = textLoginError;
                } else {
                  this.textLoginError = this.global.TEXT_LOGIN_ERROR_DEFAULT;
                }
                this.flagLoadError = true;
              }
            }).catch((error) => {
              this.textLoginError = this.global.TEXT_SYS_ERROR;
              this.flagLoadError = true;
            });
          }
          //表单验证失败
          else {
            return false;
          }
          this.flagLogin = false;
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

  .right-screen .form {
    width:80%;
  }

</style>
