// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//ElementUI
import ElementUI from 'element-ui'
Vue.use(ElementUI)
import 'element-ui/lib/theme-chalk/index.css'
//公共组件，在common/template中新建组件，并在templates.js注册该组件
import Templates from './common/templates'
Vue.use(Templates)
//公用变量
import Global from './common/global'
Vue.prototype.global = Global
//公用方法
import Functions from './common/functions'
Vue.use(Functions)
//Axios
// import Axios from 'axios';
// import VueAxios from 'vue-axios'
// import QS from 'qs'
// Vue.use(VueAxios,Axios)
// Vue.prototype.QS = QS;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

