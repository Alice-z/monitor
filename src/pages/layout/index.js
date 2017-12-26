import permission from '@/router/permission'
export default [{
    path: '/project',
    name:"项目管理",
    meta: {
      icon: 'iconfont icon-home4',
      keepAlive: true,
      hidden: false,
      rank: 'B'
    }
  },
  {
    path: '/house',
    name:"房屋管理",
    meta: {
      icon: 'iconfont icon-home4',
      keepAlive: true,
      hidden: false,
      rank: 'B'
    }
  },
  {
    path: '/facility',
    name:"设备管理",
    meta: {
      icon: 'iconfont icon-home4',
      keepAlive: true,
      hidden: false,
      rank: 'B'
    }
  },
  {
    path: '/online',
    name:"在线监测",
    meta: {
      icon: 'iconfont icon-home4',
      keepAlive: true,
      hidden: false,
      rank: 'B'
    }
  },
  {
    path: '/warning',
    name:"预警管理",
    meta: {
      icon: 'iconfont icon-home4',
      keepAlive: true,
      hidden: false,
      rank: 'B'
    }
  },
  {
    path: '/alarm',
    name:"告警管理",
    meta: {
      icon: 'iconfont icon-home4',
      keepAlive: true,
      hidden: false,
      rank: 'B'
    }
  },
  {
    path: '/permission',
    name:"权限管理",
    meta: {
      icon: 'iconfont icon-home4',
      keepAlive: true,
      hidden: false,
      rank: 'B'
    },
    children: permission
  }
]

