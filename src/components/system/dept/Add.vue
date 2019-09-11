<template>
  <el-form ref="form" :model="form" :rules="rules" label-width="80px" :disabled="adding">
    <el-row>
      <el-col :span="12">
        <el-form-item label="部门名称" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-form-item label="部门描述">
        <el-input type="textarea" v-model="form.desc" :autosize="{ minRows: 3, maxRows: 3}"></el-input>
      </el-form-item>
    </el-row>
    <el-row>
      <el-form-item>
        <el-button type="primary" @click="submitForm" :loading="adding">创建</el-button>
        <el-button @click="cancel">取消</el-button>
      </el-form-item>
    </el-row>
  </el-form>
</template>
<script>
  export default {
    name: 'DeptList',
    data() {
      return {
        //表单验证规则
        rules: {
          name: [
            {required: true, message: '请输入部门名称', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      submitForm() {
        this.$refs["form"].validate((valid)=> {
          if(valid) {
            this.ok();
          } else {
            return false;
          }
        })
      }
    },
    props: ['form', 'ok', 'cancel', 'adding']
  }
</script>
