const Functions = {};

Functions.install = function (Vue, options) {
  //成功提示
  Vue.prototype.msg_success = function (text){
    this.$message({
      message:text,
      type: "success"
    });

  };
  //警告提示
  Vue.prototype.msg_warning = function (text){//全局函数2
    this.$message({
      message:text,
      type: "warning"
    });
  };
  //错误
  Vue.prototype.msg_error = function (text){//全局函数2
    this.$message.error(text);
  };


};

export default Functions;
