import PopoverConfirm from "./template/PopoverConfirm"
import AlertSysError from "./template/AlertSysError"
import RadioTableHeight from "./template/RadioTableHeight"
import CheckTableRelations from "./template/CheckTableRelations"

const Templates = {};

Templates.install = function (Vue) {
  //PopoverConfirm
  Vue.component(PopoverConfirm.name,PopoverConfirm)
  //AlertSysError
  Vue.component(AlertSysError.name,AlertSysError)
  //RadioTableHeight
  Vue.component(RadioTableHeight.name,RadioTableHeight)
  //CheckTableRelations
  Vue.component(CheckTableRelations.name,CheckTableRelations)
};

export default Templates;
