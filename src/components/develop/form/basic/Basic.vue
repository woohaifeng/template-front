<template>
  <div style="height:100%;">
    <el-divider content-position="left" style="margin:18px 0;">
      <strong>【 Basic表单 】</strong>
      <!-- 表单触发按钮 -->
      <el-button type="primary" size="mini" @click="create">Basic</el-button>
    </el-divider>
    <!-- ###### 修改dialog的名称（title） -->
    <el-dialog title="Basic模板" :visible.sync="flagDialogCreateVisible" center :append-to-body='true'
               :lock-scroll="false"
               top="5vh" width="70%" :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false">
      <add-basic
        ref="add"
        :form="form"
        :ok="add_ok"
        :cancel="add_cancel"></add-basic>
    </el-dialog>
  </div>
</template>
<script>
  import AddBasic from './dialog/Add.vue';

  export default {
    name: 'Basic',
    components: {AddBasic},
    data() {
      return {
        flagDialogCreateVisible: false,
        form: {}
      };
    },
    created() {
    },
    mounted() {
    },
    methods: {
      //打开Form
      create() {
        this.flagDialogCreateVisible = true;
      },
      add_ok() {
        this.add_cancel();
      },
      //创建取消
      add_cancel() {
        this.flagDialogCreateVisible = false;
      }
    },
    //初始化
    created() {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
