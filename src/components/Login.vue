<template>
  <div class="full-screen login">
    <div class="left-screen"></div>
    <div class="right-screen"></div>
<!--    <el-row style="height:100%;">-->
<!--      <el-col :span="12">111</el-col>-->
<!--      <el-col :span="12">-->
<!--        <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">-->
<!--          <el-form-item-->
<!--            prop="email"-->
<!--            label="邮箱"-->
<!--            :rules="[-->
<!--      { required: true, message: '请输入邮箱地址', trigger: 'blur' },-->
<!--      { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }-->
<!--    ]"-->
<!--          >-->
<!--            <el-input v-model="dynamicValidateForm.email" size="mini"></el-input>-->
<!--          </el-form-item>-->
<!--          <el-form-item-->
<!--            v-for="(domain, index) in dynamicValidateForm.domains"-->
<!--            :label="'域名' + index"-->
<!--            :key="domain.key"-->
<!--            :prop="'domains.' + index + '.value'"-->
<!--            :rules="{-->
<!--      required: true, message: '域名不能为空', trigger: 'blur'-->
<!--    }"-->
<!--          >-->
<!--            <el-input v-model="domain.value"></el-input>-->
<!--            <el-button @click.prevent="removeDomain(domain)">删除</el-button>-->
<!--          </el-form-item>-->
<!--          <el-form-item>-->
<!--            <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>-->
<!--            <el-button @click="addDomain">新增域名</el-button>-->
<!--            <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>-->
<!--          </el-form-item>-->
<!--        </el-form>-->
<!--      </el-col>-->
<!--    </el-row>-->
  </div>
</template>
<script>
  export default {
    name: 'Login',
    data() {
      return {

      };
    },
    methods: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .full-screen {
    position: relative;
    height: 100vh;
    width: 100%;
    background-image: url('../assets/img/bg_login.jpg')
    /*border:5px solid red;*/
    /*background-color: #9970dbCC;*/
  }

  .left-screen {
    position: absolute;
    height:100%;
    width:50%;
    /*background-color: blue;*/
  }

  .right-screen {
    position: absolute;
    height:60%;
    width:30%;
    top: 20%;
    right: 10%;
    background-color: #FFFFFF80;
  }

</style>
