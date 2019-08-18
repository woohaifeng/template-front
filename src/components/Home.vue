<template>
  <el-container style="height:100vh;">
    <!-- --------左侧开始--------- -->
    <el-aside :width="isCollapse?'65px':'260px'">
      <el-container :style="{height:'100vh',backgroundImage:`url(${bgMenu})`}">
        <!-- --------左侧头部--------- -->
        <el-header class="fw-bolder" style="background-color:#9970dbCC;border-bottom: 1px solid #DCDFE6;padding: 0px;">
          <el-row>
            <el-col :span="6" style="text-align: left;">
              <div class="block cursor-pointer" @click="collapse()">
                <el-avatar :size="45" :src="logoCompany" style="margin-top: 8px;margin-left: 10px;"></el-avatar>
              </div>
            </el-col>
            <el-col v-show="!isCollapse" :span="18" class="fs-m">#企业#<span class="fs-xs">（#系统用途#系统）</span></el-col>
          </el-row>
        </el-header>
        <!-- --------左侧菜单--------- -->
        <el-main style="height:calc(100% - 60px);text-align:left;padding: 0px;background-color: #00000000;">
          <el-menu router default-active="1-4-1" class="el-menu-vertical-demo fw-bold" @open="handleOpen"
                   @close="handleClose"
                   :collapse="isCollapse" :unique-opened="true" active-text-color="#76EE00" text-color="#ffffff"
                   style="background-color: #9970dbCC;">
            <el-menu-item index="/Test" class="menu-1" style="margin-top: 15px">
              <i class="el-icon-s-home"></i>
              <span slot="title">DASHBOARD</span>
            </el-menu-item>

            <el-submenu index="2" class="menu-1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">系统管理</span>
              </template>
              <el-menu-item index="/Home/Test" class="menu-2">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span slot="title">Test</span>
                </template>
              </el-menu-item>
              <el-submenu index="2-2" class="menu-2">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span slot="title">组织架构</span>
                </template>
                <el-menu-item index="/Home/DeptList" class="menu-3">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">部门管理</span>
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

            <el-submenu index="5" class="menu-1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">目录01</span>
              </template>
              <el-menu-item index="5-1" class="menu-2">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span slot="title">菜单01</span>
                </template>
              </el-menu-item>
              <el-submenu index="5-2" class="menu-2">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span slot="title">菜单02</span>
                </template>
                <el-menu-item index="5-2-1" class="menu-3">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">菜单01</span>
                  </template>
                </el-menu-item>
              </el-submenu>
            </el-submenu>

            <el-submenu index="6" class="menu-1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">目录01</span>
              </template>
              <el-menu-item index="6-1" class="menu-2">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span slot="title">菜单01</span>
                </template>
              </el-menu-item>
              <el-submenu index="6-2" class="menu-2">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span slot="title">菜单02</span>
                </template>
                <el-menu-item index="6-2-1" class="menu-3">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">菜单01</span>
                  </template>
                </el-menu-item>
                <el-menu-item index="6-2-1" class="menu-3">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">菜单01</span>
                  </template>
                </el-menu-item>
                <el-menu-item index="6-2-1" class="menu-3">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">菜单01</span>
                  </template>
                </el-menu-item>
                <el-menu-item index="6-2-1" class="menu-3">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">菜单01</span>
                  </template>
                </el-menu-item>
                <el-menu-item index="6-2-1" class="menu-3">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">菜单01</span>
                  </template>
                </el-menu-item>
                <el-menu-item index="6-2-1" class="menu-3">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">菜单01</span>
                  </template>
                </el-menu-item>
                <el-menu-item index="6-2-1" class="menu-3">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">菜单01</span>
                  </template>
                </el-menu-item>
                <el-menu-item index="6-2-1" class="menu-3">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">菜单01</span>
                  </template>
                </el-menu-item>
                <el-menu-item index="6-2-1" class="menu-3">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">菜单01</span>
                  </template>
                </el-menu-item>
                <el-menu-item index="6-2-1" class="menu-3">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">菜单01</span>
                  </template>
                </el-menu-item>
              </el-submenu>
            </el-submenu>
          </el-menu>
        </el-main>
      </el-container>
    </el-aside>
    <!-- --------右侧部分-------- -->
    <el-container>
      <!-- --------右侧头部-------- -->
      <el-header style="border: 1px solid #e5e5e5;">
        <el-row>
          <el-col :span="16" class="fc-black">
            DASHBOARD
          </el-col>
          <el-col :span="2">
            <i class="el-icon-user-solid fc-gray fs-l cursor-pointer"><span class="fs-s"> 马兰花</span></i>
          </el-col>
          <el-col :span="2">
            <el-badge :value="200" :max="99" class="badge-item">
              <i class="el-icon-message-solid fc-gray fs-l cursor-pointer"><span class="fs-s"> 通知</span></i>
            </el-badge>
          </el-col>
          <el-col :span="2">
            <i class="el-icon-phone fc-gray fs-l cursor-pointer"><span class="fs-s"> 通讯录</span></i>
          </el-col>
          <el-col :span="2">
            <i class="el-icon-right fc-gray fs-l cursor-pointer"><span class="fs-s"> 退出</span></i>
          </el-col>
        </el-row>
      </el-header>
      <!-- --------右侧主体-------- -->
      <el-main style="background-color: #f7f7f8;padding:10px;">
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
  export default {
    name: 'Home',
    data() {
      return {
        isCollapse: false,
        logoCompany: require('../assets/logo.png'),
        bgMenu: require('../assets/img/bg_menu.jpg')
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
    font-family: "Roboto", "Helvetica Neue", Arial, sans-serif
  }

  .el-aside {
    /*background-color: #D3DCE6;*/
    color: #333;
    /*line-height: 200px;*/
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    /*line-height: 160px;*/
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
  .el-menu-vertical-demo
    /*:not(.el-menu--collapse)*/
  {
    min-height: calc(100%);
  }

</style>
