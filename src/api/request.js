import axios from 'axios'
import {  Loading   } from 'element-ui';
import cookies from 'js-cookie'
import qs from 'qs'
import util from '@/utils'

export default async function (url, data, method = 'GET') {
  const basUrl = ''
  const loading = Loading.service()
  const csrfToken = util.getCookie('csrfToken')
  const headers = { 'x-csrf-token':csrfToken }||{}
  try {
    url = basUrl + url
    if (method == 'GET' && data) {
      url += '?' + qs.stringify(data)
    }
    let result = await axios({  url,  data,  method,  headers  })
    loading.close()
    return result.data
  } catch (err) {
    loading.close()
    let config = "color: red; background: yellow; font-size: 24px;"
    console.dir(err.config);
    console.log("%c" + err.request.status, config);
  }
}

