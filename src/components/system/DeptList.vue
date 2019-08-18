<template>
  <div>
    <el-row :gutter="20" class="el-search-row">
      <el-col :span="6">
        <el-item label="活动名称">
          <el-input type="text" v-model="input">
            <!--            <i slot="prefix" class="el-input__icon">名称:</i>-->
          </el-input>
        </el-item>
      </el-col>
      <el-col :span="5">
        <el-button-group>
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
          <el-button type="primary" icon="el-icon-refresh-left">重置</el-button>
        </el-button-group>
      </el-col>
    </el-row>
    <el-divider content-position="right">
      <el-tooltip class="item" effect="dark" content="创建" placement="bottom-start">
        <el-button type="success" icon="el-icon-plus" circle size="small"></el-button>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="导入" placement="bottom-start">
        <el-button type="primary" icon="el-icon-download" circle size="small"></el-button>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="导出" placement="bottom-start">
        <el-button type="primary" icon="el-icon-upload2" circle size="small"></el-button>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="批量删除" placement="bottom-start">
        <el-button type="danger" icon="el-icon-delete" circle size="small"></el-button>
      </el-tooltip>
    </el-divider>
    <el-row>
      <el-table
        :data="tableData"
        style="width: 100%"
        min-height="611"
        max-height="611">
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
    <el-divider content-position="center">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </el-divider>
    <!--    <el-row>-->
    <!--      <el-pagination-->
    <!--        @size-change="handleSizeChange"-->
    <!--        @current-change="handleCurrentChange"-->
    <!--        :current-page="currentPage4"-->
    <!--        :page-sizes="[10, 20, 50, 100]"-->
    <!--        :page-size="10"-->
    <!--        layout="total, sizes, prev, pager, next, jumper"-->
    <!--        :total="400">-->
    <!--      </el-pagination>-->
    <!--    </el-row>-->
  </div>
</template>
<script>
  export default {
    name: 'DeptList',
    data() {
      return {
        input: "",
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
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
