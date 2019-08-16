<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  @import "./assets/css/global.css";
  @import "./assets/css/scrollbar.css";

  /*左侧菜单图标的颜色*/
  .el-submenu__title i,.el-menu-item i {
    color: #FFFFFF !important;
  }
  /*左侧菜单的高度*/
  .el-menu-item,.el-submenu__title {
    height:48px !important;
    line-height: 48px !important;
    font-size:8px;
  }
  /*菜单悬浮背景色*/
  .el-menu-item:focus, .el-menu-item:hover,.el-submenu__title:focus, .el-submenu__title:hover{
    background-color: #333333;
  }

  .el-menu {
    background-color: #00000000;
  }
</style>
