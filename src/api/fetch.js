import fetch from './index'

export default {
  login: () => fetch('/api/login'),//登录
  getList: () => fetch('/api/find')
}
