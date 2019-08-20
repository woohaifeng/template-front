<template>
  <div>
    <p style="color:red" v-text="text"></p>
    <div style="text-align: right; margin: 0">
      <el-button size="mini" type="text">取消</el-button>
      <el-button type="primary" size="mini">确定</el-button>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'PopoverConfirm',
    data() {
      return {};
    },
    methods: {},
    props: ['text']
  }
</script>
