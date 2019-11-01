<template>
  <el-form ref="form" :model="form" :rules="rules" label-width="80px" :disabled="flagIniting || flagSaveing">
    <el-row>
      <el-col :span="12">
        <el-form-item label="部门名称" prop="name">
          <el-input v-model.trim="form.name" :placeholder="type||flagIniting||!flagInitSuccess?'':'2-16个字符'" :disabled="type||!flagInitSuccess"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-form-item label="部门描述">
        <el-input type="textarea" v-model="form.des" :disabled="type  ||!flagInitSuccess" :autosize="{ minRows: 3, maxRows: 3}"></el-input>
      </el-form-item>
    </el-row>
    <el-row>
      <el-form-item>
        <el-button type="primary" @click="submitForm" :loading="flagSaveing" v-if="!type" :disabled="!flagInitSuccess">保存</el-button>
        <el-button @click="cancelForm" :loading="flagIniting">{{flagIniting?'数据加载中':'关闭'}}</el-button>
      </el-form-item>
    </el-row>
    <!--确认创建对话框-->
    <el-popover placement="bottom" width="160" ref="save_popover" trigger="click" v-model="flagPopoverSaveVisible">
      <popover-confirm
        :text="global.TEXT_ADD_CONFIRM"
        :ok="save_confirm"
        :cancel="save_not_confirm"/>
    </el-popover>
  </el-form>
</template>
<script>
  import https from '../../../../common/https';

  export default {
    name: 'TemplateViewAndEdit',
    data() {
      return {
        //正在添加中
        flagSaveing: false,
        //确认框
        flagPopoverSaveVisible: false,
        //表单验证规则
        rules: {
          name: [
            {required: true, message: '请输入部门名称', trigger: 'blur'},
            { min: 2, max: 16, message: '长度在 2 到 16 个字符', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      //开始提交，并验证表单的合法性，打开确认框
      submitForm() {
        this.$refs["form"].validate((valid) => {
          if (valid) {
            this.flagPopoverSaveVisible = true;
          } else {
            return false;
          }
        })
      },
      cancelForm() {
        this.cancel();
      },
      //确认框确认
      async save_confirm() {
        //将表单按钮的数据设为不可用disabled状态
        this.flagSaveing = true;
        //关闭确认框
        this.save_not_confirm();
        /*--------这里填写提交逻辑--------*/
        await https.put("/dept/save", this.form).then((response) => {
          if(response.data.status === 200) {
            this.msg_success(this.global.TEXT_SAVE_SUCCESS);
            //回调函数
            this.ok();
          } else {
            this.msg_error(this.global.TEXT_SAVE_FAILED);
          }
        }).catch((error) => {
          this.msg_error(this.global.TEXT_SAVE_FAILED);
        });
        this.flagSaveing = false;
      },
      save_not_confirm() {
        this.flagPopoverSaveVisible = false;
      }
    },
    props: ['form', 'ok', 'cancel','flagIniting','flagInitSuccess','type']
  }
</script>
