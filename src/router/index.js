import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login/login'
import layout from '@/pages/layout/index.vue'
import monitor from '@/pages/monitor'
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
    children: [{
      path: '/',
      name: "首页",
      component: () => import('@/pages/layout/home')
    },
    {
      path: '/project',
      name: "项目管理",
      component: () => import('@/pages/layout/project'),
    },
    {
      path: '/house',
      name: "房屋管理",
      component: () => import('@/pages/layout/house'),
    },
    {
      path: '/facility',
      name: "设备管理",
      component: () => import('@/pages/layout/facility'),
    },
    {
      path: '/online',
      name: "在线监测",
      component: () => import('@/pages/layout/online'),
    },
    {
      path: '/warning',
      name: "预警管理",
      component: () => import('@/pages/layout/warning'),
    },
    {
      path: '/alarm',
      name: "告警管理",
      component: () => import('@/pages/layout/alarm'),
    },
    {
      path: '/permission',
      name: "权限管理",
      component: () => import('@/pages/layout/permission/user'),
      children: [{
        path: '/user',
        name: '用户管理',
        component: () => import('@/pages/layout/permission/user'),
      },
      {
        path: '/role',
        name: '角色管理',
        component: () => import('@/pages/layout/permission/role'),
      },
      {
        path: '/resource',
        name: '资源管理',
        component: () => import('@/pages/layout/permission/resource'),
      },
      {
        path: '/framework',
        name: '组织架构',
        component: () => import('@/pages/layout/permission/framework'),
      }
      ]
    }
    ]
  }
  ]
})

