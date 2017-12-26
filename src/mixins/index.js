import api from '../api/fetch'
import ajax from '../api'
import crumbs from 'cpt/crumbs'
import list from 'cpt/list'


export default {
  components: {
    crumbs,
    list
  },
  methods: {
    ajax,
    ...api,
    jump(path, params) {
      this.$router.push({
        path,
        params: {
          params
        }
      })
    }
  }
}
