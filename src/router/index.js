import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login/login'
import layout from '@/pages/layout/index'
import monitor from '@/pages/monitor'
import permission from './permission'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: '登录页',
      component: login
    },
    {
      path: '/monitor',
      name: '监控中心',
      component: monitor
    },
    {
      path: '/layout',
      component: layout,
      name:"布局",
      children: [{
          path: '/',
          name:"首页",
          component: () =>
            import ('@/pages/layout/home')
        },
        {
          path: '/project',
          name:"项目管理",
          component: () =>
            import ('@/pages/layout/project'),
          meta: {
            keepAlive: true,
            hidden: false,
            rank: 'B'
          }
        },
        {
          path: '/house',
          name:"房屋管理",
          component: () =>
            import ('@/pages/layout/house'),
          meta: {
            keepAlive: true,
            hidden: false,
            rank: 'B'
          }
        },
        {
          path: '/facility',
          name:"设备管理",
          component: () =>
            import ('@/pages/layout/facility'),
          meta: {
            keepAlive: true,
            hidden: false,
            rank: 'B'
          }
        },
        {
          path: '/online',
          name:"在线监测",
          component: () =>
            import ('@/pages/layout/online'),
          meta: {
            keepAlive: true,
            hidden: false,
            rank: 'B'
          }
        },
        {
          path: '/warning',
          name:"预警管理",
          component: () =>
            import ('@/pages/layout/warning'),
          meta: {
            keepAlive: true,
            hidden: false,
            rank: 'B'
          }
        },
        {
          path: '/alarm',
          name:"告警管理",
          component: () =>
            import ('@/pages/layout/alarm'),
          meta: {
            keepAlive: true,
            hidden: false,
            rank: 'B'
          }
        },
        {
          path: '/permission',
          name:"权限管理",
          component: () =>
            import ('@/pages/layout/permission/user'),
          meta: {
            keepAlive: true,
            hidden: false,
            rank: 'B'
          }
        },
        ...permission
      ]
    }
  ]
})

