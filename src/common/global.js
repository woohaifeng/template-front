const TEXT_DATA_LOAD_ERROR = "数据加载失败，请重试！"

const TEXT_DEL_CONFIRM = "确定删除吗？"
const TEXT_DEL_SUCCESS = "删除成功！"
const TEXT_DEL_FAILED = "删除失败！"

const TEXT_ADD_CONFIRM = "确定创建吗？"
const TEXT_ADD_SUCCESS = "创建成功！"
const TEXT_ADD_FAILED = "创建失败！"

const TEXT_SAVE_CONFIRM = "确定保存吗？"
const TEXT_SAVE_SUCCESS = "保存成功！"
const TEXT_SAVE_FAILED = "保存失败！"

const TEXT_LOGOUT_CONFIRM = "确认退出吗？"

const TEXT_SYS_EXCEPTION = "系统异常！"
const TEXT_SYS_ERROR = "服务异常，请重新刷新或联系系统管理员！"

const TEXT_LOGIN_ERROR_DEFAULT = "登陆失败！"

const TEXT_SYS_INIT = "系统初始化中..."
const TEXT_SYS_LOGOUT = "系统登出中..."

const TOKEN = "token"
//富文本配置
const EDITOR_OPTIONS = {
  placeholder: '在此处编辑您的内容！',
  theme: 'snow',
  modules: {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],//字体
      [{ 'font': [] }],
      [{ 'color': [] }, { 'background': [] }],//颜色、背景颜色
      [{ 'size': ['small', false, 'large', 'huge'] }],//字体大小
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],//标题
      [{ 'align': [] }],//行对齐方式
      ['clean'],//清除样式
      ['image','video']//图片、视频
    ]
  }
}

//正则表达式
// /^\d+(\.\d+)?$/--非负浮点数
// /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/--负浮点数

export default {
  TEXT_DATA_LOAD_ERROR,
  TEXT_DEL_CONFIRM,
  TEXT_DEL_SUCCESS,
  TEXT_DEL_FAILED,
  TEXT_ADD_CONFIRM,
  TEXT_ADD_SUCCESS,
  TEXT_ADD_FAILED,
  TEXT_SAVE_CONFIRM,
  TEXT_SAVE_SUCCESS,
  TEXT_SAVE_FAILED,
  TEXT_LOGOUT_CONFIRM,
  TEXT_SYS_EXCEPTION,
  TEXT_SYS_ERROR,
  TEXT_LOGIN_ERROR_DEFAULT,
  TEXT_SYS_INIT,
  TEXT_SYS_LOGOUT,
  TOKEN,
  EDITOR_OPTIONS
}
