import PopoverConfirm from "./template/PopoverConfirm"
import AlertSysError from "./template/AlertSysError"

const Templates = {};

Templates.install = function (Vue) {
  //PopoverConfirm
  Vue.component(PopoverConfirm.name,PopoverConfirm)
  //AlertSysError
  Vue.component(AlertSysError.name,AlertSysError)
};

export default Templates;
