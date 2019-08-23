// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//公共组件
import Templates from './common/templates'
//公用变量
import Global from './common/global'

import Functions from './common/functions'

Vue.prototype.global = Global

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(Templates)
Vue.use(Functions)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

