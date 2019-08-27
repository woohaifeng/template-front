<template>
  <div style="height: 100%">
    <div style="height: 10%;text-align: center">
      <el-radio-group v-model="type" size="mini">
        <el-radio-button label="1">待办事宜</el-radio-button>
        <el-radio-button label="2">我的申请</el-radio-button>
      </el-radio-group>
    </div>
    <!--    <el-divider></el-divider>-->
    <div style="height:88%;overflow-y: auto">
      <div v-for="a in 10" :key="a" style="height: 12%;width:95%;position: relative;" class="notice-item cursor-pointer" v-infinite-scroll="load">
        <div>
          <div class="notice-left">
            <el-avatar :size="45" :src="'http://pic33.nipic.com/20131007/13639685_123501617185_2.jpg'" style="margin-top: 8px;margin-left: 10px;"></el-avatar>
          </div>
          <div class="notice-content fs-s">申请用车</div>
          <div class="notice-name fs-xxs fc-gray">张三</div>
          <div class="notice-date fs-xxs fc-gray">2017-01-01 12:30</div>
        </div>
        <el-divider></el-divider>
        <!--        <el-row>-->
        <!--          <el-col :span="6">-->
        <!--            <el-avatar :size="35" :src="'http://pic33.nipic.com/20131007/13639685_123501617185_2.jpg'" style="margin-top: 8px;margin-left: 10px;"></el-avatar>-->
        <!--          </el-col>-->
        <!--          <el-col :span="18" class="cursor-pointer">-->
        <!--            <el-row>-->
        <!--              <el-col class="fs-s">申请用车</el-col>-->
        <!--            </el-row>-->
        <!--            <el-row>-->
        <!--              <el-col :span="12" style="text-align: left" class="fs-xxs fc-gray">张三</el-col>-->
        <!--              <el-col :span="12" style="text-align: right;padding-right: 10px" class="fs-xxs fc-gray">2017-01-01</el-col>-->
        <!--            </el-row>-->
        <!--          </el-col>-->
        <!--          <el-divider></el-divider>-->
        <!--        </el-row>-->

      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'DrawNotice',
    data() {
      return {
        type: 2
      };
    },
    methods: {
      load() {
        // alert(1);
        console.log(1);
      }
    },
    props: []
  }
</script>

<style scoped>
  .el-divider--horizontal {
    margin: 0px 0 3px 0;
  }

  .notice-item .notice-left {
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 25%;
  }

  .notice-item .notice-content {
    position: absolute;
    top: 0px;
    left: 25%;
    height: 60%;
    width: 75%;
    margin: 5px 3px;
  }

  .notice-item .notice-name {
    position: absolute;
    top: 75%;
    left: 25%;
    height: 40%;
    width: 30%;
    padding-left: 3px;
  }

  .notice-item .notice-date {
    position: absolute;
    top: 75%;
    left: 55%;
    height: 40%;
    width: 45%;
    text-align: right;
    padding-right: 10px;
  }
</style>
