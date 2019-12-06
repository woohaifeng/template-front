import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/Test'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Dashboard from '@/components/dashboard/Dashboard'
import DeptList from '@/components/system/dept/DeptList'
import UserList from '@/components/system/user/UserList'
import Template from '@/components/develop/template/Template'
import Input from '@/components/develop/form/input/Input'
import Picture from '@/components/develop/form/picture/Picture'
// import Selection from '@/components/develop/form/selection/Selection'
import Basic from '@/components/develop/form/basic/Basic'
import Radio from '@/components/develop/form/radio/Radio'
import RadioDialog from '@/components/develop/form/radioDialog/RadioDialog'
import Checkedbox from '@/components/develop/form/checkedbox/Checkedbox'
import CheckedboxDialog from '@/components/develop/form/checkedboxDialog/CheckedboxDialog'
import Icon from '@/components/develop/icon/Icon'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      redirect: '/Home/Dashboard'
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: "Dashboard",
          component: Dashboard
        },
        {
          path: "Test",
          component: Test
        },
        {
          path: "DeptList",
          component: DeptList
        },
        {
          path: "UserList",
          component: UserList
        },
        {
          path: "Template",
          component: Template
        },
        {
          path: "Form/Basic",
          component: Basic
        },
        {
          path: "Form/Input",
          component: Input
        },
        {
          path: "Form/Picture",
          component: Picture
        },
        {
          path: "Form/Selection",
          component: Selection
        },
        {
          path: "Form/Radio",
          component: Radio
        },
        {
          path: "Form/RadioDialog",
          component: RadioDialog
        },
        {
          path: "Form/Checkedbox",
          component: Checkedbox
        },
        {
          path: "Form/CheckedboxDialog",
          component: CheckedboxDialog
        },
        {
          path: "Icon",
          component: Icon
        }
      ]
    },
    {
      path: '/Test',
      name: 'Test',
      component: Test
    }
  ]
})
