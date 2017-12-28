export default [{
  path: '/project',
  name: "项目管理",
  icon: 'iconfont icon-comProfile2',
},
{
  path: '/house',
  name: "房屋管理",
  icon: 'iconfont icon-home1',
},
{
  path: '/facility',
  name: "设备管理",
  icon: 'iconfont icon-set3',
},
{
  path: '/online',
  name: "在线监测",
  icon: 'iconfont icon-film2',
},
{
  path: '/warning',
  name: "预警管理",
  icon: 'iconfont icon-bell1',
},
{
  path: '/alarm',
  name: "告警管理",
  icon: 'icon el-icon-warning',
},
{
  path: '/permission',
  name: "权限管理",
  icon: 'iconfont icon-add-user',
  children: [{
    path: '/user',
    name: '用户管理',
  },
  {
    path: '/role',
    name: '角色管理',
  },
  {
    path: '/resource',
    name: '资源管理',
  },
  {
    path: '/framework',
    name: '组织架构',
  }
  ]
}
]

