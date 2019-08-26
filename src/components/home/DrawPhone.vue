<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose">
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-caret-right"></i>
        <span>维修部</span>
      </template>
      <el-submenu index="1-1">
        <template slot="title">
          <i class="el-icon-caret-right"></i>
          <span>维修一部</span>
        </template>
        <el-menu-item>
          <template slot="title">
            <i class="el-icon-phone-outline"></i>
            <span>张三：<strong>13644564533</strong></span>
          </template>
        </el-menu-item>
        <el-menu-item>
          <template slot="title">
            <i class="el-icon-phone-outline"></i>
            <span>李四：<strong>13644564533</strong></span>
          </template>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="1-2">
        <template slot="title">
          <i class="el-icon-caret-right"></i>
          <span>维修二部</span>
        </template>
        <el-menu-item>
          <template slot="title">
            <i class="el-icon-phone-outline"></i>
            <span>王五：<strong>13644564533</strong></span>
          </template>
        </el-menu-item>
        <el-menu-item>
          <template slot="title">
            <i class="el-icon-phone-outline"></i>
            <span>赵六：<strong>13644564533</strong></span>
          </template>
        </el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-caret-right"></i>
        <span>总经办</span>
      </template>
      <el-menu-item>
        <template slot="title">
          <i class="el-icon-phone-outline"></i>
          <span>李七：<strong>13644564533</strong></span>
        </template>
      </el-menu-item>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-caret-right"></i>
        <span>技改部</span>
      </template>
      <el-submenu index="1-1">
        <template slot="title">
          <i class="el-icon-caret-right"></i>
          <span>技改一部</span>
        </template>
        <el-menu-item>
          <template slot="title">
            <i class="el-icon-phone-outline"></i>
            <span>张三：<strong>13644564533</strong></span>
          </template>
        </el-menu-item>
        <el-menu-item>
          <template slot="title">
            <i class="el-icon-phone-outline"></i>
            <span>李四：<strong>13644564533</strong></span>
          </template>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="1-2">
        <template slot="title">
          <i class="el-icon-caret-right"></i>
          <span>技改二部</span>
        </template>
        <el-menu-item>
          <template slot="title">
            <i class="el-icon-phone-outline"></i>
            <span>王五：<strong>13644564533</strong></span>
          </template>
        </el-menu-item>
        <el-menu-item>
          <template slot="title">
            <i class="el-icon-phone-outline"></i>
            <span>赵六：<strong>13644564533</strong></span>
          </template>
        </el-menu-item>
      </el-submenu>
    </el-submenu>

  </el-menu>
  <!--  <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>-->
</template>
<script>
  export default {
    name: 'DrawPhone',
    data() {
      return {
        data: [{
          label: '总经办',
          children: [{
            label: '张三：12345678901'
          }]
        }, {
          label: '维修部',
          children: [{
            label: '维修1部',
            children: [
              {
                label: '李四： 13456554562'
              },
              {
                label: '王五： 12344456677'
              }
            ]
          }, {
            label: '维修2部',
            children: [{
              label: '李六： 13425678910'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      }
    },
    props: []
  }
</script>
