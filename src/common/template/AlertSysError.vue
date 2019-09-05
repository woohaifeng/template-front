<template>
  <el-alert :title="text" type="error" :closable="false" v-show="isError" show-icon></el-alert>
</template>
<script>
  export default {
    name: 'AlertSysError',
    data() {
      return {
      };
    },
    methods: {},
    props: ['isError','text']
  }
</script>
