<template>
  <el-submenu :index="idx" :class="'menu-'+deep">
    <template slot="title">
      <i :class="icon"></i>
      <span class="home-left-menu-color" slot="title" v-text="name"></span>
    </template>
    <template v-for="(menu,index) in childMenus" v-if="menu.type===1||(menu.type===0&&menu.childMenus!=null&&menu.childMenus.length>0)">
      <menu-item :icon="menu.icon" :url="menu.url" :name="menu.name" v-if="menu.type===1" :key="menu.id" :deep="deep+1"></menu-item>
      <menu-sub :icon="menu.icon" :childMenus="menu.childMenus" :name="menu.name" :idx="idx+'-'+(index+1).toString()" v-if="menu.type===0" :key="menu.id" :deep="deep+1"></menu-sub>
    </template>
  </el-submenu>
</template>
<script>
  import MenuItem from "./MenuItem";
  export default {
    name: 'MenuSub',
    components: {MenuItem},
    data() {
      return {
      };
    },
    methods: {},
    props: ["icon","name","childMenus","idx","deep"]
  }
</script>
