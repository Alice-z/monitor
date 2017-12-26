<template>
  <div id="waring">
    <crumbs/>
    <header class="header">
      <label>房屋栋号:</label>
      <el-select v-model="project_name" filterable placeholder="请选择">
        <!-- <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" /> -->
      </el-select>
      <label style="width:105px" >检测起始时间:</label>
      <el-date-picker 
        v-model="date" 
        type="daterange" 
        range-separator="至" 
        start-placeholder="开始日期" 
        end-placeholder="结束日期" />
      <el-button type="success" size="small" v-text="'查询'" />
    </header>
    <div class="middle">
      <el-button type="primary" size="small" v-text="'新建'" @click="show('isCreateProject')" />
      <el-button type="success" size="small" v-text="'刪除'" />
    </div>
    <list :data="data" :title="title" isEdit isCheck  />
    <el-dialog title="收货地址" :visible.sync="isCreateProject">
      <button @click="show('showdrawMap')">划分区域 </button>
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
        isCreateProject: false,
        project_name: '',
        date: '',
        title: {
          device_name: "设备名称",
          device_id: "设备器号",
          iupr: "监测频率",
          back_nb: "回传数值",
          offset_x: "x方向偏移",
          offset_y: "y方向偏移"
        }
      };
    },
    computed:{
      data(){
        return this.$store.state.house.data
      }
    },
    methods: {
      show(prop) {
        this[prop] = true
      }
    }
  };

</script>


