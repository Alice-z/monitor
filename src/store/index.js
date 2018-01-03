import Vue from 'vue'
import Vuex from 'vuex'
import project from './project'
import house from './house'
import facility from './facility'
import online from './online'
import warning from './warning'
import alarm from './alarm'
Vue.use(Vuex)



export default new Vuex.Store({
  state:{
    routeList:[],
  },
  modules:{
    project,
    house,
    facility,
    online,
    warning,
    alarm
  }
})
