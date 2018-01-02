<template>
  <div id="waring">
    <crumbs/>
    <header class="header">
      <label>设备类型:</label>
      <el-select v-model="device_type" filterable placeholder="请选择">
        <!-- <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" /> -->
      </el-select>
      <label>监测频率:</label>
      <el-select v-model="iupr" filterable placeholder="请选择">
        <!-- <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" /> -->
      </el-select>
      <el-button type="success" size="small" v-text="'查询'" />
    </header>
    <div class="middle">
      <el-button type="primary" size="small" v-text="'新建'" @click="show('showCreateProject')" />
      <el-button type="success" size="small" v-text="'刪除'" />
    </div>
    <list :data="data" :title="title" isCheck isEdit />
    <el-dialog center title="新建项目" :visible.sync="showCreateProject">
      <button @click="show('showDrawMap')">划分区域 </button>
    </el-dialog>

  </div>
</template>


<script>
  import list from 'cpt/list/index.vue'

  export default {
    components: {
      list
    },
    data() {
      return {
        mapTypes: BMAP_NORMAL_MAP,
        showDrawMap: false,
        showLocateMap: false,
        showCreateProject: false,
        device_type: '',
        iupr: '',
        title: {
          device_type: "设备类型",
          device_id: '项目地址',
          project_name: "所在项目",
          house: "所属房屋",
          iupr: "监测频率",
          iupr_time: "监测起始时间",
          data_size: "数据量",
        }
      };
    },
    computed: {
      data() {
        return this.$store.state.facility.data
      }
    },
    methods: {
      show(prop) {
        prop == 'showDrawMap' && (this.showCreateProject = false)
        this[prop] = true
      }
    }
  };

</script>


