import api from '@/api/project'
export default {
  state: {
    data: [],
    currentPath: {
      center: {
        lng: '',
        lat: ''
      },
      path: [],
      zoom: 19
    },
    newProject: {
      project_address:'2',
      project_name: "111",
      client: "",
      leader: "",
      years: "",
      layers: " ",
      structure: "",
      polygon: {
        center: {},
        path: [],
        zoom: null
      }
    },
  },
  mutations: {
    getData:(state,payload)=>state.data=payload,
    polygon:(state,payload)=>state.newProject.polygon=payload ,
    createProject: (state, payload) => state.data.push(payload),
    currentPath: (state, payload) => state.currentPath = payload,
    saveNewProject: (state, payload) => state.newProject = {... state.newProject,...payload},
  },
  actions:{
    async  getData({commit,state},page=0){
      let r= await api.getList({page})
      commit('getData',r)
    },
    async createProject({commit, state},payload){
      commit('polygon',payload)
      return  await api.create(state.newProject)
    }
  }
}

