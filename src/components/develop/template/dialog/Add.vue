<template>
  <!-- ######## 修改form的值form.xxx，与主页面传递过来的值保持一致 ######## -->
  <!-- ######## prop对应rules的值 ######## -->
  <div>
    <!--    {{JSON.stringify(form)}}-->
    <el-form ref="form" :model="form" :rules="rules" label-width="80px" :disabled="flagAdding || flagReadOnly"
             style="max-height: 58vh;overflow-y: auto"
             size="medium">
      <!-- 单图片 -->
      <el-row>
        <el-col :span="6">
          <el-form-item label="头像" prop="imageUrl">
            <el-input v-show="false" v-model="form.imageUrl"/>
            <el-upload
              :disabled="flagAdding || flagReadOnly"
              ref="uploadImage"
              class="avatar-uploader"
              action="#"
              accept=".jpg,.jpeg,.png"
              :show-file-list="false"
              :auto-upload="false"
              :on-change="addImage">
              <img v-if="form.imageUrl" :src="form.imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <div class="avatar_delete"><i v-show="form.imageUrl && !(flagAdding || flagReadOnly)"
                                        class="el-icon-delete cursor-pointer" @click="delImage();"></i></div>
        </el-col>
      </el-row>
      <!-- 输入框 -->
      <el-row>
        <el-col :span="12">
          <el-form-item label="姓名" prop="name">
            <el-input placeholder="2-16个字符" v-model.trim="form.name"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 数字Integer -->
      <el-row>
        <el-col :span="12">
          <el-form-item label="年龄" prop="age">
            <el-input v-model.trim="form.age" placeholder="0"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 数字double -->
      <el-row>
        <el-col :span="12">
          <el-form-item label="金钱" prop="money">
            <el-input v-model.trim="form.money" placeholder="0.00"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 邮箱 -->
      <el-row>
        <el-col :span="12">
          <el-form-item label="邮箱" prop="email">
            <el-input v-model.trim="form.email" placeholder="abc@example.com"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 电话 -->
      <el-row>
        <el-col :span="12">
          <el-form-item label="电话" prop="phone">
            <el-input v-model.trim="form.phone" placeholder="13888888888、025-88888888"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 下拉框 -->
      <el-row>
        <el-col :span="12">
          <el-form-item label="婚姻" prop="marry">
            <el-select placeholder="请选择婚姻" v-model="form.marry">
              <el-option label="已婚" value="1"></el-option>
              <el-option label="未婚" value="0"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 单选，对话框选择 -->
      <el-row>
        <el-col :span="12">
          <!-- 隐藏的id -->
          <el-form-item v-show="false" prop="height.id">
            <el-input v-model="form.height.id"/>
          </el-form-item>
          <!-- 显示的内容 -->
          <el-form-item label="身高" prop="height.value">
            <el-input
              placeholder="请选择身高"
              :readonly="true"
              @click.native="chooseHeight"
              class="cursor-pointer"
              v-model="form.height.value">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 单选，radio -->
      <el-row>
        <el-form-item label="性别" prop="sex">
          <el-radio-group v-model="form.sex">
            <el-radio label="1">男</el-radio>
            <el-radio label="0">女</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-row>
      <!-- 多选，对话框选择 -->
      <el-row>
        <el-col :span="12">
          <!-- 显示的内容 -->
          <el-form-item label="关系" prop="relationsJoin">
            <el-input
              placeholder="请选择关系"
              :readonly="true"
              @click.native="chooseRelations"
              class="cursor-pointer"
              v-model="form.relationsJoin">
              <el-button slot="append" icon="el-icon-tickets" v-popover:popover1></el-button>
            </el-input>
          </el-form-item>
        </el-col>
        <el-popover
          ref="popover1"
          placement="right"
          width="200"
          trigger="hover">
          <el-table :data="form.relations" size="mini" :max-height="500">
            <el-table-column property="value" label="姓名"></el-table-column>
            <el-table-column
              fixed="right"
              label="操作">
              <template slot-scope="scope">
                <el-button type="text" size="small" icon="el-icon-delete" title="删除"
                           @click="deleteRelations(scope.$index)"></el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-popover>
      </el-row>
      <!-- 多选，checkbox -->
      <el-row>
        <el-col :span="24">
          <el-form-item label="兴趣" prop="interest">
            <el-checkbox-group v-model="form.interest">
              <el-checkbox label="1" name="interest">音乐</el-checkbox>
              <el-checkbox label="2" name="interest">体育</el-checkbox>
              <el-checkbox label="3" name="interest">游戏</el-checkbox>
              <el-checkbox label="4" name="interest">军事</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 日期 -->
      <el-row>
        <el-col :span="12">
          <el-form-item label="日期" prop="hirdate">
            <el-date-picker v-model="form.hirdate" type="date" placeholder="选择日期">
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 日期+时间 -->
      <el-row>
        <el-col :span="12">
          <el-form-item label="时间" prop="ct">
            <el-date-picker type="datetime" v-model="form.ct">
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 多文件 -->
      <el-row>
        <el-col :span="12">
          <el-form-item label="文件" prop="flagFiles">
            <el-input v-show="false" v-model="form.flagFiles"/>
            <el-upload
              class="upload-demo"
              ref="uploadFiles"
              action="#"
              multiple
              :limit="3"
              :auto-upload="false"
              :on-change="addFiles"
              :on-remove="removeFiles">
              <el-button :disabled="flagAdding || flagReadOnly" size="small" type="primary">添加</el-button>
            </el-upload>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 文本框 -->
      <el-row>
        <el-col :span="24">
          <el-form-item label="描述" prop="des">
            <el-input type="textarea" v-model="form.des"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="文本">
            <quill-editor
              v-model="form.text"
              ref="editor">
            </quill-editor>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <el-divider></el-divider>
    <!--操作按钮-->
    <el-button type="primary" @click="submitForm" :loading="flagAdding" :disabled="flagReadOnly" size="mini"
               v-popover="'add_popover'">创建
    </el-button>
    <el-button @click="cancelForm" size="mini" :disabled="flagReadOnly">取消</el-button>
    <!--确认创建对话框-->
    <el-popover placement="left" width="160" ref="add_popover" trigger="click" v-model="flagPopoverAddVisible"
                @after-leave="popover_leave">
      <popover-confirm
        :text="global.TEXT_ADD_CONFIRM"
        :ok="addConfirm"
        :cancel="addNotConfirm"/>
    </el-popover>
    <!-- template -->
    <!--单选-->
    <el-dialog
      width="60%"
      top="10vh"
      title="选择身高"
      :visible.sync="flagInnerChooseHeight"
      append-to-body>
      <radio-table-height :tableData="heights" :back="form" :cancel="chooseHeightCancel"/>
    </el-dialog>
    <!-- 【多选，Dialog】 -->
    <el-dialog
      width="60%"
      top="10vh"
      title="选择关系"
      :visible.sync="flagInnerChooseRelations"
      append-to-body>
      <check-table-relations :tableData="relations" :loadData="loadRelations"
                             :flagLoading="flagInnerChooseRelationsLoading" :back="form"
                             :cancel="chooseRelationsCancel" :condition="relationCondition"
                             :flagRemember="flagInnerChooseRelationsRemember"/>
    </el-dialog>
    <!-- 【END】 -->
  </div>
</template>
<script>
  import https from '../../../../common/https';

  export default {
    name: 'TemplateAdd',
    data() {
      return {
        //正在添加中
        flagAdding: false,
        //只读
        flagReadOnly: false,
        //确认框
        flagPopoverAddVisible: false,
        // 【单选，Dialog】
        flagInnerChooseHeight: false,
        // 【END】

        // 【多选，Dialog】
        // 显示Dialog
        flagInnerChooseRelations: false,
        // 数据加载中
        flagInnerChooseRelationsLoading: false,
        // 选中记忆功能
        flagInnerChooseRelationsRemember: false,
        // 数据存放
        relations: [],
        // 数据查询条件
        relationCondition: {
          search: {},
          page: 1,
          size: 10,
          total: 0
        },
        // 【END】

        // 【表单验证规则】
        rules: {
          imageUrl: [
            this.formRequiredOnChange("请上传头像")
          ],
          name: [
            this.formRequiredOnChange("请输入名称"),
            this.formLengthOnChange(2, 16)
          ],
          age: [
            this.formRequiredOnChange('请输入年龄'),
            this.formCheckOnChange(this.checkInteger)
          ],
          money: [
            this.formRequiredOnChange('请输入金钱'),
            this.formCheckOnChange(this.checkDouble)
          ],
          email: [
            this.formRequiredOnChange('请输入邮箱'),
            this.formCheckOnChange(this.checkEmail)
          ],
          phone: [
            this.formRequiredOnChange('请输入电话'),
            this.formCheckOnChange(this.checkPhone)
          ],
          marry: [
            this.formRequiredOnChange('请输入婚姻')
          ],
          height: {
            value: [
              this.formRequiredOnChange("请选择身高区间")
            ]
          },
          sex: [
            this.formRequiredOnChange('请选择性别')
          ],
          relationsJoin: [
            this.formRequiredOnChange('请选择关系')
          ],
          interest: [
            this.formRequiredOnChange('请选择兴趣')
          ],
          hirdate: [
            this.formRequiredOnChange('请输入日期')
          ],
          ct: [
            this.formRequiredOnChange('请输入时间')
          ],
          flagFiles: [
            this.formRequiredOnChange('请上传文件')
          ]
        },
        // 【END】
        heights: [],

        /*template*/
        // imageUrl: '',
        image: null,
        files: []
        /*template end*/
      }
    },
    watch: {
      'form.relations': {
        handler(val, oldVal) {
          let temp = [];
          let len = this.form.relations.length;
          if (len <= 2) {
            this.form.relations.forEach((relation) => {
              temp.push(relation.value);
            })
            this.form.relationsJoin = temp.join(',');
          } else {
            for (let i = 0; i < 2; ++i) {
              temp.push(this.form.relations[i].value);
            }
            this.form.relationsJoin = temp.join(',') + '等 （共' + len + '人）';
          }
        },
        deep: true,
        immediate: true
      },
      'form.imageUrl': {
        handler(val, oldVal) {
          if (!val) {
            this.image = null;
          }
        },
        deep: true,
        immediate: true
      },
      /* 多文件 */
      'form.flagFiles': {
        // uploadFiles
        handler(val, oldVal) {
          if (!val) {
            this.$refs["uploadFiles"].clearFiles();
            this.files = [];
          }
        },
        deep: true
      }
    },
    methods: {
      //选择
      chooseHeight() {
        // ######## 加载数据，并标记已经选中的项目
        this.heights = [
          {id: 1, value: '150-155', des: 's'},
          {id: 2, value: '155-165', des: 'm'},
          {id: 3, value: '160-165', des: 'l'},
          {id: 4, value: '165-170', des: 'xl'},
          {id: 5, value: '165-170', des: 'xl'},
          {id: 6, value: '165-170', des: 'xl'},
          {id: 7, value: '165-170', des: 'xl'},
          {id: 8, value: '165-170', des: 'xl'},
          {id: 9, value: '165-170', des: 'xl'},
          {id: 10, value: '165-170', des: 'xl'},
          {id: 11, value: '165-170', des: 'xl'},
          {id: 12, value: '165-170', des: 'xl'},
          {id: 13, value: '165-170', des: 'xl'},
          {id: 14, value: '165-170', des: 'xl'},
          {id: 15, value: '165-170', des: 'xl'},
          {id: 16, value: '165-170', des: 'xl'},
          {id: 17, value: '165-170', des: 'xl'}
        ];
        if (this.form.height.id) {
          for (let i = 0; i < this.heights.length; i++) {
            if (this.heights[i].id == this.form.height.id) {
              this.heights[i].checked = this.heights[i].id;
              break;
            }
          }
        }
        //end
        this.flagInnerChooseHeight = true;
      },
      chooseHeightCancel() {
        this.flagInnerChooseHeight = false;
      },
      // ------------------------------------------------ 多选Dialog ------------------------------------------------
      // 【 #### 打开Dialog的方法 <chooseRelations> #### 】
      chooseRelations() {
        // 【 #### 打开标志 <flagInnerChooseRelations> #### 】
        this.flagInnerChooseRelations = true;
        // 【 #### 初始化数据为空，等待初始化 <relations> #### 】
        this.relations = [];
        // 【 #### 开始加载数据 <loadRelations>（条件 <relationCondition>、false） #### 】
        this.loadRelations(this.relationCondition, false);
      },
      // 【 #### 关闭Dialog的方法 <chooseRelationsCancel> #### 】
      chooseRelationsCancel() {
        // 【 #### <flagInnerChooseRelations> #### 】
        this.flagInnerChooseRelations = false;
      },
      // 【 #### 删除一条已选数据 <deleteRelations> #### 】
      deleteRelations(index) {
        // 【 #### <relations> #### 】
        this.form.relations.splice(index, 1);
      },
      // 【 #### <loadRelations> #### 】
      loadRelations(condition, remember) {
        // 【 #### <flagInnerChooseRelationsRemember> #### 】
        this.flagInnerChooseRelationsRemember = remember;
        // 【 #### <flagInnerChooseRelationsLoading> #### 】
        this.flagInnerChooseRelationsLoading = true;
        // ######## 数据开始加载，加载结束后关闭加载开始标志
        setTimeout(() => {
          if (this.relationCondition.page == 1) {
            this.relations = [
              {id: 1, value: '张三', des: 'friend'},
              {id: 2, value: '李四', des: 'friend'},
              {id: 3, value: '王五', des: 'friend'},
              {id: 4, value: '赵六', des: 'friend'},
              {id: 5, value: '钱七', des: 'friend'},
              {id: 6, value: '孙八', des: 'friend'},
              {id: 7, value: '李十', des: 'friend'},
              {id: 8, value: '周十一', des: 'friend'},
              {id: 9, value: '吴十二', des: 'friend'},
              {id: 10, value: '郑十三', des: 'friend'}
            ];
          } else {
            this.relations = [
              {id: 11, value: '冯十四', des: 'friend'},
              {id: 12, value: '陈十五', des: 'friend'},
              {id: 13, value: '楚十六', des: 'friend'},
              {id: 14, value: '魏十七', des: 'friend'}
            ];
          }
          this.relationCondition.total = 14;
          // 【 #### <flagInnerChooseRelationsLoading> #### 】
          this.flagInnerChooseRelationsLoading = false;
        }, 1000);
      },
      // ------------------------------------------------ 多选Dialog END ------------------------------------------------

      // ------------------------------------------------ 开始提交,验证表单 ------------------------------------------------
      submitForm() {
        this.$refs["form"].validate((valid) => {
          if (valid) {
            this.flagPopoverAddVisible = false;
            //将表单按钮的数据设为不可用disabled状态
            this.flagReadOnly = true;
          } else {
            this.flagPopoverAddVisible = true;
            return false;
          }
        })
      },
      // ------------------------------------------------ 开始提交,验证表单 END ------------------------------------------------

      // ------------------------------------------------ 提交并上传数据 ------------------------------------------------
      async addConfirm() {
        //正在添加
        this.flagAdding = true;
        //关闭确认框
        this.addNotConfirm();

        // ######## 如果表单中含有文件，需要在这里封装一个formData，将数据和文件添加进去，有这个formData提交，负责直接提交this.form
        let formWithFile = new FormData(this.form);
        formWithFile.append("image", this.image.raw);
        formWithFile.append("name", "zs");
        for (let index in this.files) {
          formWithFile.append("files", this.files[index].raw);
        }
        // ######## END

        /* ######## 这里填写提交逻辑 ######## */
        // await https.post("/template/add", this.form).then((response) => {
        await https.post("/template/add", formWithFile).then((response) => {
          if (response.data.status === 200) {
            this.resetForm();
            this.msg_success(this.global.TEXT_ADD_SUCCESS);
            //回调函数
            this.ok();
          } else {
            this.msg_error(this.global.TEXT_ADD_FAILED);
          }
        }).catch((error) => {
          this.msg_error(this.global.TEXT_ADD_FAILED);
        });
        //关闭只读和正在添加中状态
        this.flagReadOnly = this.flagAdding = false;
      },
      // ------------------------------------------------ 提交并上传数据 END ------------------------------------------------


      // ------------------------------------------------ 取消提交 ------------------------------------------------
      addNotConfirm() {
        this.flagPopoverAddVisible = false;
      },
      // ------------------------------------------------ 取消提交 END ------------------------------------------------

      // ------------------------------------------------ 取消确认 ------------------------------------------------
      popover_leave() {
        if (!this.flagAdding) {
          this.flagReadOnly = false;
        }
      },
      // ------------------------------------------------ 取消确认 END ------------------------------------------------

      // ------------------------------------------------ 取消表单 ------------------------------------------------
      cancelForm() {
        this.resetForm();
        this.cancel();
      },
      // ------------------------------------------------ 取消表单 END ------------------------------------------------

      // ------------------------------------------------ 重置表单 ------------------------------------------------
      resetForm() {
        // ######## 不显示在表单上的数据，需要手动清空
        this.form.relations.splice(0, this.form.relations.length);
        // ######## END
        this.$refs['form'].resetFields();
      },
      // ------------------------------------------------ 重置表单 END ------------------------------------------------

      // ------------------------------------------------ 上传单个图片 ------------------------------------------------
      addImage(file, fileList) {
        //用于回显
        this.form.imageUrl = URL.createObjectURL(file.raw);
        //图片的源文件
        this.image = file;
      },
      delImage() {
        this.form.imageUrl = null;
      },
      // ------------------------------------------------ 上传单个图片 END ------------------------------------------------

      // ------------------------------------------------ 上传单个图片 ------------------------------------------------
      addFiles(file, fileList) {
        this.files = fileList;
        if (this.files.length > 0) {
          this.form.flagFiles = 1;
        }
      },
      removeFiles(file, fileList) {
        this.files = fileList;
        if (this.files.length <= 0) {
          this.form.flagFiles = null;
        }
      }
      // ------------------------------------------------ 上传单个图片 END ------------------------------------------------
    },
    props: ['form', 'ok', 'cancel']
  }
</script>
