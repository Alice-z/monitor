import permission from '@/router/permission'
export default [{
    path: '/project',
    name:"项目管理",
    meta: {
      icon: 'iconfont icon-comProfile2',
      keepAlive: true,
      hidden: false,
      rank: 'B'
    }
  },
  {
    path: '/house',
    name:"房屋管理",
    meta: {
      icon: 'iconfont icon-home1',
      keepAlive: true,
      hidden: false,
      rank: 'B'
    }
  },
  {
    path: '/facility',
    name:"设备管理",
    meta: {
      icon: 'iconfont icon-set3',
      keepAlive: true,
      hidden: false,
      rank: 'B'
    }
  },
  {
    path: '/online',
    name:"在线监测",
    meta: {
      icon: 'iconfont icon-film2',
      keepAlive: true,
      hidden: false,
      rank: 'B'
    }
  },
  {
    path: '/warning',
    name:"预警管理",
    meta: {
      icon: 'iconfont icon-bell1',
      keepAlive: true,
      hidden: false,
      rank: 'B'
    }
  },
  {
    path: '/alarm',
    name:"告警管理",
    meta: {
      icon: 'icon el-icon-warning',
      keepAlive: true,
      hidden: false,
      rank: 'B'
    }
  },
  {
    path: '/permission',
    name:"权限管理",
    meta: {
      icon: 'iconfont icon-add-user',
      keepAlive: true,
      hidden: false,
      rank: 'B'
    },
    children: permission
  }
]

