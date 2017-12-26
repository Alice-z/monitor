import api from '../api/fetch'
import ajax from '../api'
import crumbs from 'cpt/crumbs'


export default {
  components: {
    crumbs
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
