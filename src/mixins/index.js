import fetch from '@/api/request'
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
      util
    }
  },
  methods: {
    fetch,
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
