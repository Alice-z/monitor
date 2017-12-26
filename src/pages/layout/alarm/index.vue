<template>
  <div id="waring">
    <crumbs/>
    <header class="header">
      <label>项目名称:</label>
      <el-select v-model="project_name" filterable placeholder="请选择">
        <!-- <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" /> -->
      </el-select>
      <label>所属房屋:</label>
      <el-select v-model="house" filterable placeholder="请选择">
        <!-- <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" /> -->
      </el-select>
      <label>设备类型:</label>
      <el-select v-model="device_type" filterable placeholder="请选择">
        <!-- <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" /> -->
      </el-select>
      <el-button type="success" size="small" v-text="'查询'" />
    </header>
    <div class="middle">
      <el-button type="primary" size="small" v-text="'新建'" @click="show('showCreateProject')" />
      <el-button type="success" size="small" v-text="'刪除'" />
    </div>
    <list :data="data" :title="title" isCheck isEdit isIssued />
    <el-dialog title="新建项目" :visible.sync="showCreateProject">
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
        showCreateProject: false,
        project_name: '',
        device_type: '',
        house: '',
        title: {
          device_name: "设备名称",
          device_id: "设备器号",
          project_name: '所在项目',
          house: '所属房屋',
          warning_level: '预警级别',
          status: '审核状态'
        }
      };
    },
    computed: {
      data() {
        return this.$store.state.alarm.data
      }
    },
    methods: {
      show(prop) {
        this[prop] = true
      }
    }
  };

</script>

