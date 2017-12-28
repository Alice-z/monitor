import fetch from './index'

export default {
  create: data => fetch('/api/project/create',data,'post'),//登录
  getList: data => fetch('/api/project/find',data)
}
