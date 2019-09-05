<template>
  <el-container
    style="height:100vh;"
    id="home"
    v-loading="flagLogout"
    :element-loading-text="'系统登出中...'"
    element-loading-background="rgba(0, 0, 0, 0.2)">
    <!-- --------左侧开始--------- -->
    <!-- 调整左侧的宽度 -->
    <el-aside :width="isCollapse?'65px':'230px'">
      <el-container :style="{height:'100vh',backgroundImage:`url(${bgMenu})`}">
        <!-- --------左侧头部--------- -->
        <el-header class="fw-bolder" style="background-color:#9970dbCC;border-bottom: 1px solid #DCDFE6;padding: 0px;">
          <!-- -------- LOGO、登陆人 -------- -->
          <el-row>
            <el-col :span="6" style="text-align: left;">
              <div class="block cursor-pointer" @click="collapse()">
                <el-avatar :size="45" :src="logoCompany" style="margin-top: 8px;margin-left: 10px;"></el-avatar>
              </div>
            </el-col>
            <el-col v-show="!isCollapse" :span="18"><i class="el-icon-user-solid fc-white fs-l cursor-pointer"><span
              class="fs-s"> 欢迎您！马兰花</span></i></el-col>
          </el-row>
        </el-header>
        <!-- --------左侧菜单--------- -->
        <el-main id="menu" style="height:calc(100% - 60px);text-align:left;padding: 0px;background-color: #00000000;">
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
                <el-menu-item index="/Home/UserList" class="menu-3">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">人员管理</span>
                  </template>
                </el-menu-item>
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
          <el-col :span="18" class="fc-black">
            #企业#<span class="fs-xs">（#系统用途#系统）</span>
          </el-col>

          <el-col :span="2">
            <el-badge :hidden="countNotify<=0" :value="countNotify" :max="99" class="badge-item">
              <i class="el-icon-message-solid fc-gray fs-l cursor-pointer" @click="flagDrawerNotice = true"><span class="fs-s"> 通知</span></i>
            </el-badge>
          </el-col>
          <el-col :span="2">
            <i class="el-icon-phone fc-gray fs-l cursor-pointer" @click="flagDrawerPhone = true"><span
              class="fs-s"> 通讯录</span></i>
          </el-col>
          <el-col :span="2">
            <i class="el-icon-right fc-gray fs-l cursor-pointer" v-popover="'logout_popover'"><span class="fs-s"> 退出</span></i>
          </el-col>
        </el-row>
      </el-header>
      <!-- --------右侧主体-------- -->
      <el-main style="background-color: #f7f7f8;padding:3px 10px;height:calc(100% - 60px);">
        <router-view style="height:100%"/>
      </el-main>
    </el-container>
    <!--通知-->
    <el-drawer
      title="通知"
      :visible.sync="flagDrawerNotice"
      :direction="'rtl'"
      size="25%">
      <draw-notice></draw-notice>
    </el-drawer>
    <!--通讯录-->
    <el-drawer
      title="通讯录"
      :visible.sync="flagDrawerPhone"
      :direction="'rtl'"
      size="20%">
      <draw-phone></draw-phone>
    </el-drawer>
    <!--退出确认-->
    <!--确认删除对话框-->
    <el-popover placement="bottom" width="160" ref="logout_popover" trigger="click" v-model="flagPopoverLogoutVisible">
      <popover-confirm
        :text="global.TEXT_LOGOUT_CONFIRM"
        :ok="logout"
        :cancel="logout_cancel"/>
    </el-popover>
  </el-container>
</template>
<script>
  import DrawPhone from './home/DrawPhone.vue';
  import DrawNotice from './home/DrawNotice.vue';

  export default {
    name: 'Home',
    components: {DrawPhone, DrawNotice},
    data() {
      return {
        isCollapse: false,
        flagDrawerPhone: false,
        flagDrawerNotice: false,
        //控制退出对话框显示
        flagPopoverLogoutVisible: false,
        //正在退出
        flagLogout: false,
        countNotify: 0,
        logoCompany: require('../assets/logo.png'),
        bgMenu: require('../assets/img/bg_menu.jpg'),
        interval:null,
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
      },
      //删除
      logout() {
        this.flagLogout =true;
        this.logout_cancel();
        setTimeout(()=>{
          localStorage.removeItem(this.global.TOKEN);
          this.$router.replace("/Login");
        },1000);
      },
      logout_cancel() {
        this.flagPopoverLogoutVisible = false;
      }
    },
    beforeCreate() {
      if(!localStorage.getItem(this.global.TOKEN)){
        this.$router.replace("/Login");
      }
    },
    created() {
      this.interval = setInterval(() => {
        this.notify("hahahaha");
        this.countNotify++;
      },60000)
    },destroyed() {
      if(this.interval!=null) {
        clearInterval(this.interval);
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
    /*text-align: center;*/
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
