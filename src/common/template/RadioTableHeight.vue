<template>
  <div>
    <!--######## 查询条件 ########-->
    <el-form :inline="true" class="demo-form-inline" style="margin-bottom: 0px;" ref="search" :model="search"
             size="mini">
      <el-row :gutter="20" class="el-search-row">
        <el-col :span="8">
          <el-form-item label="名称：" prop="name">
            <el-input type="text" v-model="search.name">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item>
            <el-button-group>
              <el-button type="primary" icon="el-icon-search">查询</el-button>
              <el-button type="primary" icon="el-icon-refresh-left">重置</el-button>
            </el-button-group>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <el-table
      :data="tableData"
      :max-height="tableHeight"
      highlight-current-row
      size="mini"
      @current-change="handleCurrentChange">
      <el-table-column label="" width="65">
        <template slot-scope="scope">
          <el-radio :label="scope.row.id" v-model="scope.row.checked">&nbsp</el-radio>
        </template>
      </el-table-column>
      <el-table-column
        type="index"
        width="50">
      </el-table-column>
      <el-table-column property="value" label="区间(cm)"></el-table-column>
      <el-table-column property="des" label="描述"></el-table-column>
    </el-table>
    <br/>
    <!--操作按钮-->
    <el-row>
      <el-col :span="12">
        <el-button type="primary" size="mini" @click="okSelect">确定</el-button>
        <el-button size="mini" @click="cancelSelect">取消</el-button>
      </el-col>
      <el-col :span="12" style="position: absolute;bottom:0px;right:-50px">
        <el-pagination
          :small="true"
          :pager-count="5"
          :current-page="1"
          :page-sizes="[10, 20, 50, 100]"
          :page-size="10"
          layout="sizes, prev, pager, next"
          :total="500">
        </el-pagination>
      </el-col>
    </el-row>

  </div>
</template>
<script>
  export default {
    name: 'RadioTableHeight',
    data() {
      return {
        tableHeight: window.innerHeight - 360,
        currentRow: null,
        // temp
        search: {}
        // temp end
      };
    },
    methods: {
      // ######## 选择，判断item和row（当前点击的行）的主键，如果相等表示选中，如果不想等表示未选中
      handleCurrentChange(row) {
        if (row) {
          this.tableData.forEach((item, rowIndex) => {
              if (item.id != row.id) {
                item.checked = false;
              } else {
                row.checked = row.id;
              }
            }
          )
          this.currentRow = row;
        }
      },
      // ######## 确认选择，将选择的行currentRow回填给back
      okSelect() {
        this.back.height.id = this.currentRow.id;
        this.back.height.value = this.currentRow.value;
        this.cancel();
      },
      //取消选择
      cancelSelect() {
        this.cancel();
      }
    },
    //数据，回填数据（必须是{},[]的对象），取消选择回调函数
    props: ['tableData', 'back', 'cancel']
  }
</script>
