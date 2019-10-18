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
//URLS
import Urls from './common/urls'
Vue.prototype.urls = Urls
//公用方法
import Functions from './common/functions'
Vue.use(Functions)
//富文本cnpm install vue-quill-editor --save
import VueQuillEditor  from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
Vue.use(VueQuillEditor,Vue.prototype.global.EDITOR_OPTIONS)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

