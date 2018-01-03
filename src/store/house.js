import api from '@/api'
export default {
  state: {
    data: [],
    newHouse: {
      code: "", //栋号
      projectId: "", //项目编号
      projectName: "", //项目名称
      age: '', //房屋年代
      structure: '', //房屋结构
      num: '', //房屋层数
      jcqssj: '', //监测起始时间
      lh: '', //楼号
      dyh: '', //单元号
      fjh: '', //房间号
      jcsb: '', //监测设备
    }
  },
  mutations: {
    GetData: (state, payload) => state.data = payload,
    SaveNewInfo: (state, payload) => state.newHouse = payload
  },
  actions: {
    async GetHouseData({
      commit
    }, payload) {
      let result = await api.getList('house')
      commit('GetData', result)
    },

    async SaveNewInfo({
      commit,
      state,
      dispatch
    }) {
      commit('SaveNewInfo', state.newHouse)
      await api.create('house', state.newHouse)
      await dispatch('GetHouseData')
    }
  }
}

