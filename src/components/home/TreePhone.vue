<template>
  <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
</template>
<script>
  export default {
    name: 'PopoverConfirm',
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
                label:  '王五： 12344456677'
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
