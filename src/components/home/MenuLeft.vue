<template>
  <el-menu router default-active="2-1-1" class="el-menu-vertical-demo fw-bold home-left-bg menu" @open="handleOpen"
           @close="handleClose"
           :collapse="isCollapse" :unique-opened="true" active-text-color="#76EE00" text-color="#1A091A">
    <template v-for="(menu,index) in menus" v-if="menu.type===1||(menu.type===0&&menu.childMenus!=null&&menu.childMenus.length>0)">
      <menu-item :icon="menu.icon" :name="menu.name" :url="menu.url" :deep="1" v-if="menu.type===1" :key="menu.id"></menu-item>
<!--      <menu-sub :icon="menu.icon" :name="menu.name" :childMenus="menu.childMenus" :idx="(index+1).toString()" v-if="menu.type===0"-->
<!--                :key="menu.id"-->
<!--                :deep="1"></menu-sub>-->
      <el-submenu :index="(index+1).toString()" :class="'menu-'+1" v-if="menu.type===0">
        <template slot="title">
          <i :class="menu.icon"></i>
          <span class="home-left-menu-color" slot="title" v-text="menu.name"></span>
        </template>
        <template v-for="(child,i) in menu.childMenus" v-if="child.type===1||(child.type===0&&child.childMenus!=null&&child.childMenus.length>0)">
          <menu-item :icon="child.icon" :url="child.url" :name="child.name" v-if="child.type===1" :key="child.id" :deep="2"></menu-item>
          <menu-sub :icon="child.icon" :childMenus="child.childMenus" :name="child.name" :idx="index+1+'-'+(i+1).toString()" v-if="child.type===0" :key="child.id" :deep="2"></menu-sub>
        </template>
      </el-submenu>
    </template>
  </el-menu>
</template>
<script>

  import MenuItem from "./MenuItem";
  import MenuSub from "./MenuSub";

  export default {
    name: 'MenuLeft',
    components: {MenuSub, MenuItem},
    data() {
      return {};
    },
    methods: {},
    created() {
      console.log(1);
    },
    props: ["handleOpen", "handleClose", "isCollapse", "menus"]
  }
</script>
