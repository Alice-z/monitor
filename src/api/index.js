import axios from 'axios'
import {  Loading  } from 'element-ui';
import qs from 'qs'

const basUrl = ''

export default async function (url, data={}, method = 'GET') {
  const loading = Loading.service()
  try {
    url=basUrl + url
    if (method == 'GET') {
     data=={}&& (url +='?'+qs.stringify(data))
    }
    let result = await axios({url,data,method })
    loading.close()
    return result.data
  } catch (err) {
    loading.close()
    let config="color: red; background: yellow; font-size: 24px;"
    console.dir( err.config);
    console.log("%c"+err.request.status,config);
  }
}
