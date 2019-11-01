const Functions = {};

Functions.install = function (Vue, options) {
  //成功提示
  Vue.prototype.msg_success = function (text) {
    this.$message({
      message: text,
      type: "success"
    });

  };
  //警告提示
  Vue.prototype.msg_warning = function (text) {//全局函数2
    this.$message({
      message: text,
      type: "warning"
    });
  };
  //错误
  Vue.prototype.msg_error = function (text) {//全局函数2
    this.$message.error(text);
  };
  //通知
  Vue.prototype.notify = function (text) {
    const h = this.$createElement;
    this.$notify({
      title: '通知',
      message: h('i', {style: 'color: teal'}, text)
    });
  };
  //日期yyyy-MM-dd
  Vue.prototype.dateSimpleFormat = function (date) {
    const dateTime = new Date(date);
    return dateTime.getFullYear() + "-" + addZero(dateTime.getMonth() + 1) + "-" + addZero(dateTime.getDate());
  };
  //时间hh:mm
  Vue.prototype.timeSimpleFormat = function (date) {
    const dateTime = new Date(date);
    return addZero(dateTime.getHours()) + ":" + addZero(dateTime.getMinutes());
  }
  //完整时间yyyy-MM-dd hh:mm
  Vue.prototype.dateTimeSimpleFormat = function (date) {
    const dateTime = new Date(date);
    return dateTime.getFullYear() + "-" + addZero(dateTime.getMonth() + 1) + "-" + addZero(dateTime.getDate()) + " " + addZero(dateTime.getHours()) + ":" + addZero(dateTime.getMinutes());
  }
  //检查整数
  Vue.prototype.checkInteger = function (rule, value, callback) {
    if(!value) {
      return;
    }
    var regInteger = /^\d{1,10}?$/;
    if (!regInteger.test(value)) {
      callback(new Error('10位以内有效整数！'));
    } else {
      callback();
    }
  }
  //检查数字
  Vue.prototype.checkDouble = function (rule, value, callback) {
    if(!value) {
      return;
    }
    var regDouble = /^\d{1,10}(\.\d{0,2})?$/; //非负浮点数
    if (!regDouble.test(value)) {
      callback(new Error('12位以内有效数字，小数点后保留两位！'));
    } else {
      callback();
    }
  }
  //检查邮箱
  Vue.prototype.checkEmail = function (rule, value, callback) {
    if(!value) {
      return;
    }
    var regEmail = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    if (!regEmail.test(value)) {
      callback(new Error('错误的邮箱格式！'));
    } else {
      callback();
    }
  }
  //检查电话
  Vue.prototype.checkPhone = function (rule, value, callback) {
    if(!value) {
      return;
    }
    var regPhone = /^(((\+\d{2}-)?0\d{2,3}-\d{7,8})|((\+\d{2}-)?(\d{2,3}-)?([1][3,4,5,7,8][0-9]\d{8})))$/;
    if (!regPhone.test(value)) {
      callback(new Error('错误的联系方式！'));
    } else {
      callback();
    }
  }
  //检查boolean:-1为false，1为true
  Vue.prototype.checkBoolean = function (rule, value, callback) {
    if(!value) {
      return;
    }
    if (value<0) {
      callback(new Error('错误'));
    } else {
      callback();
    }
  }
  //Form
  //required
  Vue.prototype.formRequiredOnChange = function(msg) {
    return {required: true, message: msg, trigger: 'change'}
  }
  Vue.prototype.formRequiredOnBlur = function(msg) {
    return {required: true, message: msg, trigger: 'blur'}
  }
  //length
  Vue.prototype.formLengthOnChange = function(min,max) {
    return {min: min, max: max, message: '长度在 '+min+' 到 '+max+' 个字符', trigger: 'change'}
  }
  //self
  Vue.prototype.formCheckOnChange = function(checkFunction) {
    return {validator: checkFunction,trigger: 'change'}
  }
};

//小于10，在前面加一个0
function addZero(v) {
  return v < 10 ? '0' + v : v
}

export default Functions;
