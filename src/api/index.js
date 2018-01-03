import fetch from './request'


export default {
  create: (path, data) => fetch(`/rest/${path}/doAdd/1/`, data, 'post'),
  deleOne: (path, data) => fetch(`/rest/${path}/delete/1/`, data, 'delete'),
  deleAll: (path, data) => fetch(`/rest/${path}/deleteAll/1/`, data, 'delete'),
  getList: (path, data) => fetch(`/rest/${path}/list/1/`, data).then(r => r.page.result)
}

