export default {
  state: {
    data: [{
      id: 1,
      client: "阿里巴巴",
      project_address:'北京',
      project_name:'上海',
      leader: "张晨成",
      years: "2016-05-03",
      layers: " 1518层",
      structure: '混凝土',
      polygon: {
        center: {
          lng: 121.476515,
          lat: 31.23667
        },
        path: [],
        zoom: 19
      }
    }],
    currentPath: {
      center: {
        lng: '',
        lat: ''
      },
      path: [],
      zoom: 19
    },
    newProject: {
      name: "",
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
    createProject: (state, payload) => state.data.push(payload),
    currentPath: (state, payload) => state.currentPath = payload,
    newProject: (state, payload) => state.newProject = payload,

  }
}

