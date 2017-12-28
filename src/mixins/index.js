import api from '@/api/fetch'
import ajax from '@/api'
import crumbs from 'cpt/crumbs'
import list from 'cpt/list'
import util from '@/utils'

export default {
  components: {
    crumbs,
    list
  },
  data() {
    return {
      util, api, ajax
    }
  },
  methods: {
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
