<template>
  <div class="box">
    <div class="left">
      <el-tooltip class="item" effect="dark" content="Left Top 提示文字" placement="left-start">
        <el-button>左上</el-button>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="Left Center 提示文字" placement="left">
        <el-button>左边</el-button>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="Left Bottom 提示文字" placement="left-end">
        <el-button>左下</el-button>
      </el-tooltip>
    </div>
  </div>
</template>
<script>
  import https from '../../../common/https';

  export default {
    name: 'Template',
    components: {},
    data() {
      return {};
    },
    created() {
    },
    mounted() {
    },
    methods: {},
    //初始化
    created() {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .left {
    float: left;
    width: 60px;
  }

  .item {
    margin: 4px;
  }

  .left .el-tooltip__popper,
  .right .el-tooltip__popper {
    padding: 8px 10px;
  }
</style>
