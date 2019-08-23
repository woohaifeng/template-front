import PopoverConfirm from "./template/PopoverConfirm"

const Templates = {};

Templates.install = function (Vue) {
  //PopoverConfirm
  Vue.component(PopoverConfirm.name,PopoverConfirm)
};

export default Templates;
