import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/Test'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Dashboard from '@/components/dashboard/Dashboard'
import DeptList from '@/components/dept/DeptList'
import UserList from '@/components/user/UserList'
import Template from '@/components/template/Template'

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
