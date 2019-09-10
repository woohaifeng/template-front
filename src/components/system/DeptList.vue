<template>
  <div style="height:100%;" class="data-list">
    <!-- 查询-->
    <el-form :inline="true" class="demo-form-inline" style="margin-bottom: 0px;" ref="search" :model="search">
      <el-row :gutter="20" class="el-search-row">
        <el-col :span="6">
          <el-form-item label="名称：" prop="name">
            <el-input type="text" v-model="search.name" size="mini">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item>
            <el-button-group>
              <el-button type="primary" icon="el-icon-search" size="mini" @click="startSearch()" :loading="flagSearching" :disabled="flagSearching">查询</el-button>
              <el-button type="primary" icon="el-icon-refresh-left" size="mini" @click="resetSearch()" :disabled="flagSearching">重置</el-button>
            </el-button-group>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <!-- 操作 -->
    <el-divider content-position="right" style="margin:18px 0;">
      <strong>【 部门管理 】</strong>

      <el-button-group>
        <el-button type="success" icon="el-icon-refresh" size="mini" @click="loadData(search)">刷新</el-button>
        <el-button type="success" icon="el-icon-plus" size="mini" @click="create">创建</el-button>
        <el-button type="primary" icon="el-icon-download" size="mini">导入</el-button>
        <el-button type="primary" icon="el-icon-upload2" size="mini">导出</el-button>
        <el-button :disabled="multipleSelection.length==0" v-popover="'del_popover'" type="danger" icon="el-icon-delete"
                   size="mini">删除</el-button>
      </el-button-group>
<!--      <el-tooltip class="item" effect="dark" content="刷新" placement="top-start">-->
<!--        <el-button type="success" icon="el-icon-refresh" circle size="mini" @click="loadData(search)"></el-button>-->
<!--      </el-tooltip>-->
<!--      <el-tooltip class="item" effect="dark" content="创建" placement="top-start">-->
<!--        <el-button type="success" icon="el-icon-plus" circle size="mini" @click="create"></el-button>-->
<!--      </el-tooltip>-->
<!--      <el-tooltip class="item" effect="dark" content="导入" placement="top-start">-->
<!--        <el-button type="primary" icon="el-icon-download" circle size="mini"></el-button>-->
<!--      </el-tooltip>-->
<!--      <el-tooltip class="item" effect="dark" content="导出" placement="top-start">-->
<!--        <el-button type="primary" icon="el-icon-upload2" circle size="mini"></el-button>-->
<!--      </el-tooltip>-->
<!--      <el-tooltip class="item" effect="dark" content="删除" placement="top-start">&ndash;&gt;-->
<!--        <el-button :disabled="multipleSelection.length==0" v-popover="'del_popover'" type="danger" icon="el-icon-delete"-->
<!--                   circle size="mini"></el-button>-->
<!--      </el-tooltip>-->
    </el-divider>
    <!-- 数据 -->
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
              <el-form-item label="描述">
                <span>{{ props.row.des }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column
          fixed
          type="index">
        </el-table-column>
        <!-- 如果列数不止一列，可用width="120"属性指定列的宽度 -->
        <el-table-column
          prop="name"
          label="名称">
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
    <!-- 分页-->
    <el-row style="position: absolute;bottom:0px;right:10px">
      <el-pagination
        @size-change="sizeChange"
        @current-change="currentChange"
        :current-page="page"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        :disabled="flagLoadingData"
        v-show="!flagLoadError">
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
    <!--数据加载异常后的提示-->
    <alert-sys-error :isError="flagLoadError" :text="global.TEXT_SYS_ERROR"></alert-sys-error>
  </div>
</template>
<script>
  import https from '../../common/https';
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
        //数据加载失败
        flagLoadError: false,
        //条件查询
        flagSearching: false,

        input: this.global.TEXT_DEL_CONFIRM,
        //分页
        page: 1,
        size: 10,
        total: 0,
        //查询条件
        search: {
          name:null
        },
        form: {},
        tableData: [],
        multipleSelection: []
      };
    },
    methods: {
      //加载table数据
      async loadData(search) {
        //进度条开启
        if (!this.flagLoadingData) {
          this.flagLoadingData = true;
        }
        await https.get("/dept/list/" + this.page + "/" + this.size, search).then((response) => {
          //数据加载成功，隐藏加载失败提示
          if (this.flagLoadError) {
            this.flagLoadError = false;
          }
          //加载成功，填充数据
          this.tableData = response.data.data;
          this.total = response.data.cursor.total;
        }).catch((error) => {
          //加载失败，数据设置为空
          this.tableData = [];
          this.flagLoadError = true;
        });
        if(this.flagSearching) {
          this.flagSearching = false;
        }
        //关闭进度条
        this.flagLoadingData = false;
      },
      //分页
      sizeChange(size) {
        this.size = size;
        this.loadData(this.search);
      },
      currentChange(page) {
        this.page = page;
        this.loadData(this.search);
      },
      //创建
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
      //删除
      del() {
        this.flagLoadingData = true;
        this.del_cancel();
        setTimeout(() => {
          this.msg_success(this.global.TEXT_DEL_SUCCESS);
          this.loadData(this.search);
        }, 2000);
      },
      del_cancel() {
        this.flagPopoverDelVisible = false;
      },
      //查询
      startSearch() {
        this.flagSearching = true;
        this.loadData(this.search);
      },
      //重置
      resetSearch() {
        this.$refs["search"].resetFields();
        this.startSearch();
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
