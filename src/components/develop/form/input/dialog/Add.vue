<template>
  <!-- ######## 修改form的值form.xxx，与主页面传递过来的值保持一致 ######## -->
  <!-- ######## prop对应rules的值 ######## -->
  <div>
    <el-form ref="form" :model="form" :rules="rules" label-width="80px" :disabled="flagAdding || flagReadOnly"
             style="max-height: 58vh;overflow-y: auto"
             size="medium">
      <!-- 输入框 -->
      <el-row>
        <el-col :span="12">
          <el-form-item label="姓名" prop="name">
            <el-input placeholder="2-16个字符" v-model.trim="form.name"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <el-divider></el-divider>
    <!--操作按钮-->
    <el-button type="primary" @click="submitForm" :loading="flagAdding" :disabled="flagReadOnly" size="mini"
               v-popover="'add_popover'">创建
    </el-button>
    <el-button @click="cancelForm" size="mini" :disabled="flagReadOnly">取消</el-button>
    <!--确认创建对话框-->
    <el-popover placement="left" width="160" ref="add_popover" trigger="click" v-model="flagPopoverAddVisible"
                @after-leave="popover_leave">
      <popover-confirm
        :text="global.TEXT_ADD_CONFIRM"
        :ok="addConfirm"
        :cancel="addNotConfirm"/>
    </el-popover>
  </div>
</template>
<script>

  export default {
    name: 'InputForm',
    data() {
      return {
        //正在添加中
        flagAdding: false,
        //只读
        flagReadOnly: false,
        //确认框
        flagPopoverAddVisible: false,

        rules: {},
      }
    },
    watch: {},
    methods: {
      // ------------------------------------------------ 开始提交,验证表单 ------------------------------------------------
      submitForm() {
        this.$refs["form"].validate((valid) => {
          if (valid) {
            this.flagPopoverAddVisible = false;
            //将表单按钮的数据设为不可用disabled状态
            this.flagReadOnly = true;
          } else {
            this.flagPopoverAddVisible = true;
            return false;
          }
        })
      },
      // ------------------------------------------------ 开始提交,验证表单 END ------------------------------------------------

      // ------------------------------------------------ 提交并上传数据 ------------------------------------------------
      async addConfirm() {
        //正在添加
        this.flagAdding = true;
        //关闭确认框
        this.addNotConfirm();

        // ######## 如果表单中含有文件，需要在这里封装一个formData，将数据和文件添加进去，有这个formData提交，负责直接提交this.form
        let formWithFile = new FormData(this.form);
        formWithFile.append("image", this.image.raw);
        formWithFile.append("name", "zs");
        for (let index in this.files) {
          formWithFile.append("files", this.files[index].raw);
        }
        // ######## END

        /* ######## 这里填写提交逻辑 ######## */
        // await https.post("/template/add", this.form).then((response) => {
        await https.post("/template/add", formWithFile).then((response) => {
          if (response.data.status === 200) {
            this.resetForm();
            this.msg_success(this.global.TEXT_ADD_SUCCESS);
            //回调函数
            this.ok();
          } else {
            this.msg_error(this.global.TEXT_ADD_FAILED);
          }
        }).catch((error) => {
          this.msg_error(this.global.TEXT_ADD_FAILED);
        });
        //关闭只读和正在添加中状态
        this.flagReadOnly = this.flagAdding = false;
      },
      // ------------------------------------------------ 提交并上传数据 END ------------------------------------------------


      // ------------------------------------------------ 取消提交 ------------------------------------------------
      addNotConfirm() {
        this.flagPopoverAddVisible = false;
      },
      // ------------------------------------------------ 取消提交 END ------------------------------------------------

      // ------------------------------------------------ 取消确认 ------------------------------------------------
      popover_leave() {
        if (!this.flagAdding) {
          this.flagReadOnly = false;
        }
      },
      // ------------------------------------------------ 取消确认 END ------------------------------------------------

      // ------------------------------------------------ 取消表单 ------------------------------------------------
      cancelForm() {
        this.resetForm();
        this.cancel();
      },
      // ------------------------------------------------ 取消表单 END ------------------------------------------------

      // ------------------------------------------------ 重置表单 ------------------------------------------------
      resetForm() {
        // ######## 不显示在表单上的数据，需要手动清空
        this.form.relations.splice(0, this.form.relations.length);
        // ######## END
        this.$refs['form'].resetFields();
      },
      // ------------------------------------------------ 重置表单 END ------------------------------------------------

      // ------------------------------------------------ 上传单个图片 ------------------------------------------------
      addImage(file, fileList) {
        //用于回显
        this.form.imageUrl = URL.createObjectURL(file.raw);
        //图片的源文件
        this.image = file;
      },
      delImage() {
        this.form.imageUrl = null;
      },
      // ------------------------------------------------ 上传单个图片 END ------------------------------------------------

      // ------------------------------------------------ 上传单个图片 ------------------------------------------------
      addFiles(file, fileList) {
        this.files = fileList;
        if (this.files.length > 0) {
          this.form.flagFiles = 1;
        }
      },
      removeFiles(file, fileList) {
        this.files = fileList;
        if (this.files.length <= 0) {
          this.form.flagFiles = null;
        }
      }
      // ------------------------------------------------ 上传单个图片 END ------------------------------------------------
    },
    props: ['form', 'ok', 'cancel']
  }
</script>
