<template>
  <div id="warn">
    <p style="color:red;text-align: center;" class="fw-bolder" v-text="text"></p>
    <div style="text-align: center; margin: 0">
      <el-button type="primary" size="mini" @click="cancel()">取消</el-button>
      <el-button type="danger" size="mini" @click="ok()">确定</el-button>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'PopoverConfirm',
    data() {
      return {
      };
    },
    methods: {},
    props: ['text', 'ok', 'cancel']
  }
</script>
