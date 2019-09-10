<template>
  <el-menu-item :index="url" :class="'menu-'+deep">
    <i :class="icon"></i>
    <span class="home-left-menu-color" slot="title" v-text="name"></span>
  </el-menu-item>
</template>
<script>
  export default {
    name: 'MenuItem',
    data() {
      return {};
    },
    methods: {},
    props: ["icon","name","url","deep"]
  }
</script>
