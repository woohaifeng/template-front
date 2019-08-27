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
      <el-tooltip class="item" effect="dark" content="刷新" placement="top-start">
        <el-button type="success" icon="el-icon-refresh" circle size="mini" @click="loadData(search)"></el-button>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="创建" placement="top-start">
        <el-button type="success" icon="el-icon-plus" circle size="mini" @click="create"></el-button>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="导入" placement="top-start">
        <el-button type="primary" icon="el-icon-download" circle size="mini"></el-button>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="导出" placement="top-start">
        <el-button type="primary" icon="el-icon-upload2" circle size="mini"></el-button>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="删除" placement="top-start">-->
        <el-button :disabled="multipleSelection.length==0" v-popover="'del_popover'" type="danger" icon="el-icon-delete"
                   circle size="mini"></el-button>
      </el-tooltip>
      【 部门管理 】
    </el-divider>
    <el-row v-loading="flagLoadingData" element-loading-background="#0000001A">
      <!--数据列表table-->
      <el-table
        :data="tableData"
        style="width: 100%;"
        :max-height="tableHeight"
        size="mini"
        @selection-change="selectionChange">
        <!--选择-->
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <!--详情-->
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" class="demo-table-expand">
              <el-form-item label="地址">
                <span>{{ props.row.address }}</span>
              </el-form-item>
              <el-form-item label="邮编">
                <span>{{ props.row.zip }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column
          fixed
          type="index">
        </el-table-column>
        <el-table-column
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
          label="市区">
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
        :current-page="1"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
        :disabled="flagLoadingData">
      </el-pagination>
    </el-row>
    <!--确认删除对话框-->
    <el-popover placement="bottom" width="160" ref="del_popover" trigger="click" v-model="flagPopoverDelVisible">
      <popover-confirm
        :text="global.TEXT_DEL_CONFIRM"
        :ok="del"
        :cancel="del_cancel"/>
    </el-popover>
    <!--创建模态框-->
    <el-dialog title="创建部门" :visible.sync="flagDialogCreateVisible" center :append-to-body='true' :lock-scroll="false"
               top="8vh" width="60%" :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false">
      <dept-add
        :form="form"
        :ok="add"
        :cancel="add_cancel"
        :adding="flagAddingData"></dept-add>
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
        //table的高度
        tableHeight: window.innerHeight - 172,
        //控制dialog
        flagDialogCreateVisible: false,
        //控制删除对话框显示
        flagPopoverDelVisible: false,
        //table加载条
        flagLoadingData: false,
        //创建中
        flagAddingData: false,

        input: this.global.TEXT_DEL_CONFIRM,
        //查询条件
        search: {},
        form: {},
        tableData: [],
        multipleSelection: []
      };
    },
    methods: {
      loadData(search) {
        if (!this.flagLoadingData) {
          this.flagLoadingData = true;
        }
        setTimeout(() => {
          this.tableData = [
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
            }];
          this.flagLoadingData = false;
        }, 2000);
      },
      create() {
        this.form = {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        };
        this.flagDialogCreateVisible = true;
      },
      add() {
        this.flagAddingData = true;
        setTimeout(() => {
          this.add_cancel();
          this.msg_success(this.global.TEXT_ADD_SUCCESS);
          this.loadData(this.search);
        }, 2000);
      },
      add_cancel() {
        this.flagDialogCreateVisible = false;
        if (this.flagAddingData) {
          this.flagAddingData = false;
        }
      },
      //选择，手动（this.$refs.multipleTable.toggleRowSelection(row);this.$refs.multipleTable.clearSelection();）
      selectionChange(multipleSelection) {
        this.multipleSelection = multipleSelection;
      },
      del() {
        this.flagLoadingData = true;
        this.del_cancel();
        setTimeout(()=>{
          this.msg_success(this.global.TEXT_DEL_SUCCESS);
          this.loadData(this.search);
        },2000);
      },
      del_cancel() {
        this.flagPopoverDelVisible = false;
      }
    },
    //初始化
    created() {
      this.loadData(this.search);
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
