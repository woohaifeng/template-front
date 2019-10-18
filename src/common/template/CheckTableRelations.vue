<template>
  <div>
    <!-- {{JSON.stringify(multipleSelection)}} -->
    <!-- 被选中的行，hasSelected表示已经选过的行，不会被添加到对象中去  -->
    <!-- 【查询条件】 -->
    <el-form :inline="true" class="demo-form-inline" style="margin-bottom: 0px;" ref="search" :model="search"
             size="mini">
      <el-row :gutter="20" class="el-search-row">
        <el-col :span="8">
          <el-form-item label="名称：" prop="name">
            <el-input type="text" v-model="condition.search.name">
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
    <!-- 【数据】 -->
    <el-table
      ref="relationsMultipleTable"
      :row-key="rowKey"
      :data="tableData"
      :max-height="tableHeight"
      highlight-current-row
      size="mini"
      @selection-change="selectionChange">
      <!--选择-->
      <el-table-column
        :selectable="selectAble"
        :reserve-selection="true"
        type="selection"
        width="55"
        disabled>
      </el-table-column>
      <el-table-column
        type="index"
        width="50">
      </el-table-column>
      <el-table-column property="value" label="区间(cm)"></el-table-column>
      <el-table-column property="des" label="描述"></el-table-column>
    </el-table>
    <br/>
    <!-- 【操作按钮】 -->
    <el-row>
      <el-col :span="12">
        <el-button type="primary" size="mini" @click="okSelect">确定</el-button>
        <el-button size="mini" @click="cancelSelect">取消</el-button>
      </el-col>
      <el-col :span="12" style="position: absolute;bottom:0px;right:-50px">
        <el-pagination
          @size-change="sizeChange"
          @current-change="currentChange"
          :small="true"
          :pager-count="5"
          :current-page="condition.page"
          :page-sizes="[10, 20, 50, 100]"
          :page-size="condition.size"
          layout="sizes, prev, pager, next"
          :total="condition.total">
        </el-pagination>
      </el-col>
    </el-row>

  </div>
</template>
<script>
  // 对selection的操作
  // 选中指定的行
  // this.$refs.relationsMultipleTable.toggleRowSelection(row);
  // this.$refs.relationsMultipleTable.toggleRowSelection(row,true);
  // this.$refs.relationsMultipleTable.toggleRowSelection(row,false);
  // 清除选中
  // this.$refs.relationsMultipleTable.clearSelection();
  export default {
    name: 'CheckTableRelations',
    data() {
      return {
        // table的高度
        tableHeight: window.innerHeight - 360,
        multipleSelection: [],
        // 已经被选择的row的主键（id），使用,连接
        idsJoin: ''
      };
    },
    watch: {
      flagLoading(val, oldVal) {
        //数据加载完成
        if (!val) {
          let ids = [];
          this.back.relations.forEach((relation) => {
            ids.push(relation.id);
          })
          // this.$refs.relationsMultipleTable.toggleRowSelection(data);
          if (!this.flagRemember) {
            this.$refs.relationsMultipleTable.clearSelection();
          }
          if (ids) {
            //原先被保留的select
            let idsSelectJoin = null;
            let idsSelect = [];
            if (this.multipleSelection) {
              this.multipleSelection.forEach((data) => {
                idsSelect.push(data.id);
              })
              idsSelectJoin = "," + idsSelect.join(",") + ",";
            }
            this.idsJoin = "," + ids.join(",") + ",";
            this.tableData.forEach((data) => {
              // ######## 判断当前行是否已经被选中过，如果被选中则不可被点击（hasSelected表示不可别点击）
              if (this.idsJoin.indexOf("," + data.id + ",") > -1) {
                data.hasSelected = true;
                this.$refs.relationsMultipleTable.toggleRowSelection(data, true);
              }
            })
          }
        }
      }
    },
    methods: {
      rowKey(row) {
        return row.id;
      },
      // 如果某一行已经被选择过了，将selection设为不可点击
      selectAble(row, index) {
        // ######## 判断当前行是否已经被选择过，如果选过返回false，如果没有返回true
        if (this.idsJoin.indexOf("," + row.id + ",") > -1) {
          // this.$refs.relationsMultipleTable.toggleRowSelection(this.tableData[index]);
          return false;
        } else {
          return true;
        }
      },
      //点击，选中某一行
      selectionChange(multipleSelection) {
        this.multipleSelection = multipleSelection;
      },
      // ######## 确认选择，将选择的行currentRow回填给back
      okSelect() {
        if (this.multipleSelection) {
          this.multipleSelection.forEach((selection) => {
            if (!selection.hasSelected) {
              this.back.relations.push(selection);
            }
          })
        }
        this.cancel();
      },
      //取消选择
      cancelSelect() {
        this.cancel();
      },
      //分页
      sizeChange(size) {
        this.condition.size = size;
        this.loadData(this.condition, true);
      },
      currentChange(page) {
        this.condition.page = page;
        this.loadData(this.condition, true);
      }
    },
    //数据，回填数据（必须是{},[]的对象），取消选择回调函数
    props: ['tableData', 'loadData', 'condition', 'flagRemember', 'flagLoading', 'back', 'cancel']
  }
</script>
