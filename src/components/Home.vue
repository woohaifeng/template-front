<template>
  <el-container style="height:100vh;">
    <el-aside :width="isCollapse?'65px':'260px'">
      <el-container style="height:100vh;">
        <el-header class="fw-bolder" style="background-color:#9970db;border-bottom: 1px solid #DCDFE6;padding: 0px;">
          <el-row>
            <el-col :span="6" style="text-align: left;">
              <div class="block cursor-pointer" @click="collapse()"><el-avatar :size="45" :src="logoCompany" style="margin-top: 8px;margin-left: 10px;"></el-avatar></div>
            </el-col>
            <el-col v-show="!isCollapse" :span="18" class="fs-xs">AAAAAA<span class="fs-xxs">（BBBBBBBB系统）</span></el-col>
          </el-row>
        </el-header>
        <el-main style="height:calc(100% - 60px);text-align:left;padding: 0px;" >
          <el-menu default-active="1-4-1" class="el-menu-vertical-demo fw-bold" @open="handleOpen" @close="handleClose" :collapse="isCollapse" active-text-color="#A5DF00" text-color="#ffffff" style="background-color: #9970db;">
            <el-menu-item index="1" class="menu-1" style="margin-top: 15px">
              <i class="el-icon-s-home"></i>
              <span slot="title">DASHBOARD</span>
            </el-menu-item>

            <el-submenu index="2" class="menu-1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">目录01</span>
              </template>
              <el-menu-item index="2-1" class="menu-2">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span slot="title">菜单01</span>
                </template>
              </el-menu-item>
              <el-submenu index="2-2"  class="menu-2">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span slot="title">菜单02</span>
                </template>
                <el-menu-item index="2-2-1" class="menu-3">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">菜单01</span>
                  </template>
                </el-menu-item>
              </el-submenu>
            </el-submenu>

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
      <el-header style="border: 1px solid #e5e5e5">Header</el-header>
      <el-main style="background-color: #f7f7f8;">Main</el-main>
    </el-container>
  </el-container>
</template>
<script>
  export default {
    name: 'Home',
    data() {
      return {
        isCollapse: false,
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
    color: #FFFFFF;
    text-align: center;
    line-height: 60px;
    padding: 0px;
    font-family: "Roboto","Helvetica Neue",Arial,sans-serif
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
