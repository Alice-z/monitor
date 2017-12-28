import axios from 'axios'
import { Loading} from 'element-ui';
import cookies from 'js-cookie'
import qs from 'qs'
import util from '@/utils'

const basUrl = ''
export default async function (url, data , method = 'GET') {
  const loading = Loading.service()
  let csrfToken= util.getCookie('csrfToken')
  try {
    url = basUrl + url
    if (method == 'GET'&& data ) {
      url += '?' + qs.stringify(data)
    }
    let result = await axios({
      url,
      data,
      method,
      headers:{
        'x-csrf-token':csrfToken
      }
    })
    loading.close()
    return result.data
  } catch (err) {
    loading.close()
    let config = "color: red; background: yellow; font-size: 24px;"
    console.dir(err.config);
    console.log("%c" + err.request.status, config);
  }
}
