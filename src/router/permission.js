 const permission = [{
  path: '/permission',
  name:'用户管理',
  component: () =>import ('@/pages/layout/permission/user'),
  meta: {
    keepAlive: true,
    hidden: false,
    rank: 'B'
  }
},
{
  path: '/role',
  name:'角色管理',
  component: () =>import ('@/pages/layout/permission/role'),
  meta: {
    keepAlive: true,
    hidden: false,
    rank: 'B'
  }
},
{ 
  path: '/resource',
  name:'资源管理',
  component: () =>import ('@/pages/layout/permission/resource'),
  meta: {
    keepAlive: true,
    hidden: false,
    rank: 'B'
  }
}
]

export default permission