<template>
  <el-alert :title="global.TEXT_SYS_ERROR" type="error" :closable="false" v-show="isError" show-icon></el-alert>
</template>
<script>
  export default {
    name: 'AlertSysError',
    data() {
      return {
      };
    },
    methods: {},
    props: ['isError']
  }
</script>
