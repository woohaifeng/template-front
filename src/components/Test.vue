<template>
  <el-container style="height:100vh;">
    <el-aside :width="isCollapse?'65px':'250px'">
      <el-container style="height:100vh;">
        <el-header style="background-color:#545c64">
          <el-row>
            <el-col :span="6" style="text-align: left;">
              <el-image class="img-circle cursor-pointer" @click="collapse()" style="width: 45px; height: 45px;background-color: white;margin-top: 8px;margin-left: 10px;" :src="logoCompany" :fit="'fit'"></el-image>
            </el-col>
            <el-col v-show="!isCollapse" :span="18">企业（系统）名称</el-col>
          </el-row>
        </el-header>
        <el-main style="height:calc(100% - 60px);text-align:left;padding: 0px;" >
          <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">导航一</span>
              </template>
              <el-menu-item-group>
                <span slot="title">分组一</span>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <span slot="title">选项4</span>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
              <el-submenu index="1-4">
                <span slot="title">选项4</span>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
              <el-submenu index="1-4">
                <span slot="title">选项4</span>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        </el-main>
      </el-container>
    </el-aside>
    <el-container>
      <el-header style="background-color: gray">Header</el-header>
      <el-main style="background-color: red;">Main</el-main>
    </el-container>
  </el-container>
</template>
<script>
  export default {
    name: 'Home',
    data() {
      return {
        isCollapse: true,
        logoCompany: require('../assets/logo.png')
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      collapse() {
        this.isCollapse = !this.isCollapse;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-header, .el-footer {
    background-color: #ffffff;
    color: #333;
    text-align: center;
    line-height: 60px;
    padding: 0px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  /*菜单*/
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    min-height: calc(100%);
  }
</style>
