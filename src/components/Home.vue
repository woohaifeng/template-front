<template>
  <el-container
    style="height:100vh;"
    id="home"
    v-loading="flagLogout || flagIniting"
    :element-loading-text="textSysLoading"
    element-loading-background="rgba(0, 0, 0, 0.2)"
    class="template-home">
    <!-- --------左侧开始--------- -->
    <!-- 调整左侧的宽度 -->
    <el-aside :width="isCollapse?'65px':'230px'">
      <el-container :style="{height:'100vh',backgroundImage:`url(${bgMenu})`}">
        <!-- --------左侧头部--------- -->
        <el-header class="fw-bolder home-left-bg" style="border-bottom: 1px solid #DCDFE6;padding: 0px;">
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
          <menu-left :handleOpen="handleOpen" :handleClose="handleClose" :isCollapse="isCollapse" :menus="menus"></menu-left>
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
              <i class="el-icon-message-solid fc-gray fs-l cursor-pointer" @click="flagDrawerNotice = true"><span
                class="fs-s"> 通知</span></i>
            </el-badge>
          </el-col>
          <el-col :span="2">
            <i class="el-icon-phone fc-gray fs-l cursor-pointer" @click="flagDrawerPhone = true"><span
              class="fs-s"> 通讯录</span></i>
          </el-col>
          <el-col :span="2">
            <i class="el-icon-right fc-gray fs-l cursor-pointer" v-popover="'logout_popover'"><span
              class="fs-s"> 退出</span></i>
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
  import https from '../common/https';
  import DrawPhone from './home/DrawPhone';
  import DrawNotice from './home/DrawNotice';
  import MenuLeft from "./home/MenuLeft";

  export default {
    name: 'Home',
    components: {MenuLeft, DrawPhone, DrawNotice},
    data() {
      return {
        isCollapse: false,
        flagDrawerPhone: false,
        flagDrawerNotice: false,
        //控制退出对话框显示
        flagPopoverLogoutVisible: false,
        //初始化
        flagIniting:true,
        //正在退出
        flagLogout: false,
        textSysLoading: null,
        countNotify: 0,
        menus: null,
        logoCompany: require('../assets/logo.png'),
        bgMenu: require('../assets/img/bg_menu.jpg'),
        interval: null,
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        // console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath);
      },
      collapse() {
        this.isCollapse = !this.isCollapse;
      },
      //初始化
      async init() {
        this.textSysLoading = this.global.TEXT_SYS_INIT;
        this.flagIniting = true;
        await https.post("/home/init/", {}).then((response) => {
          this.menus = response.data.data.menus;
        }).catch((error) => {
        });
        this.flagIniting = false;
      },
      //删除
      logout() {
        this.textSysLoading = this.global.TEXT_SYS_LOGOUT;
        this.flagLogout = true;
        this.logout_cancel();
        setTimeout(() => {
          localStorage.removeItem(this.global.TOKEN);
          this.$router.replace("/Login");
        }, 1000);
      },
      logout_cancel() {
        this.flagPopoverLogoutVisible = false;
      }
    },
    beforeCreate() {
      if (!localStorage.getItem(this.global.TOKEN)) {
        this.$router.replace("/Login");
      }
    },
    created() {
      this.init();
      this.interval = setInterval(() => {
        this.notify("hahahaha");
        this.countNotify++;
      }, 60000)
    },
    destroyed() {
      if (this.interval != null) {
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
