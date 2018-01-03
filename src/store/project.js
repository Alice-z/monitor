import api from '@/api'
export default {
  state: {
    data: [],
    projectInfo: {
      address:'',//地址
      name: "",//名称
      entrustUnit   : "",//委托单位
      principal: "",//负责人
      houseAge: "",//房屋年代
      houseNumber: " ",//房屋层数
      houseStructure: "",//房屋结构
      monitorType:[],//监测类型
      description:'',//项目概况
      remark:'',//备注
      imgList:[],
      mg1:'',
      img2:'',
      img3:'',
      img4:'',
    },
    projectMap: {//地图坐标信息
      center: {},
      lonlat: [],
      levels: null
    },
    projectData: {//项目资料
      center: {},
      lonlat: [],
      levels: null
    }
  },
  mutations: {
    GetData:(state,payload)=>state.data=payload,
    SaveMapInfo:(state,payload)=>state.projectMap=payload ,
    SaveItemInfo:(state,payload)=>state.projectData=payload ,
    SaveNewProject: (state, payload) => state.projectInfo = {... state.projectInfo,...payload},
  },
  actions:{
    async  GetData({commit,state}){
      let result= await api.getList('project')
      commit('GetData',result)
    },
    async createProject({commit, state},payload){
      commit('SaveMapInfo',payload)
      let {projectInfo,projectMap}=state
      return  await api.create('project',{projectInfo,projectMap})
    }
  }
}

