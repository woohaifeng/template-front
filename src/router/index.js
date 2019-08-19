import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/Test'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import DeptList from '@/components/system/DeptList'
import UserList from '@/components/system/UserList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      redirect: '/Home'
    },
    {
      path: '/Login',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      children: [
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
