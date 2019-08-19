<template>
  <div style="height:100%;" class="data-list">
    <el-form :inline="true" class="demo-form-inline" style="margin-bottom: 0px;">
      <el-row :gutter="20" class="el-search-row">
        <el-col :span="6">
          <el-form-item label="名称：">
            <el-input type="text" v-model="input" size="mini">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="名称：">
            <el-input type="text" v-model="input" size="mini">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="名称：">
            <el-input type="text" v-model="input" size="mini">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item>
            <el-button-group>
              <el-button type="primary" icon="el-icon-search" size="mini">查询</el-button>
              <el-button type="primary" icon="el-icon-refresh-left" size="mini">重置</el-button>
            </el-button-group>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <el-divider content-position="right" style="margin:18px 0;">
      【 部门管理 】
      <el-tooltip class="item" effect="dark" content="创建" placement="bottom-start">
        <el-button type="success" icon="el-icon-plus" circle size="mini" @click="dialogTableVisible=true;"></el-button>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="导入" placement="bottom-start">
        <el-button type="primary" icon="el-icon-download" circle size="mini"></el-button>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="导出" placement="bottom-start">
        <el-button type="primary" icon="el-icon-upload2" circle size="mini"></el-button>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="批量删除" placement="bottom-start">
        <el-button type="danger" icon="el-icon-delete" circle size="mini"></el-button>
      </el-tooltip>
    </el-divider>
    <el-row>
      <el-table
        :data="tableData"
        style="width: 100%;"
        :max-height="tableHeight"
        size="mini">
        <el-table-column
          fixed
          prop="date"
          label="日期"
          width="150">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="120">
        </el-table-column>
        <el-table-column
          prop="province"
          label="省份"
          width="120">
        </el-table-column>
        <el-table-column
          prop="city"
          label="市区"
          width="120">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          width="300">
        </el-table-column>
        <el-table-column
          prop="zip"
          label="邮编"
          width="120">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="120">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="deleteRow(scope.$index, tableData)"
              type="text"
              size="small">
              移除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
    <el-row style="position: absolute;bottom:0px;right:10px">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </el-row>

    <el-dialog title="登陆" :visible.sync="dialogTableVisible" center :append-to-body='true' :lock-scroll="false"
               width="60%">
      <dept-add></dept-add>
    </el-dialog>
  </div>
</template>
<script>
  import DeptAdd from './dept/Add.vue';

  export default {
    name: 'DeptList',
    components: {DeptAdd},
    data() {
      return {
        tableHeight: window.innerHeight - 170,
        dialogTableVisible: false,
        input: "",
        tableData: [

          {
            date: '2016-05-04',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-01',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-01',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-01',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-01',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-01',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-01',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-08',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }]
      };
    },
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
