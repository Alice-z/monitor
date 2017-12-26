import fetch from './index'

export default {
  login: data => fetch('/api/login',data),//登录
  getList: data => fetch('/api/project/find',data)
}
