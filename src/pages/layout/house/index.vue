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
    <el-dialog center title="新建项目" :visible.sync="isCreateProject">
      <Create :visible.sync="isCreateProject" />
    </el-dialog>
  </div>
</template>


<script>
  import list from 'cpt/list/index.vue'
  import Create from './create.vue'
  export default {
    components: {
      list,
      Create
    },
    data() {
      return {
        isCreateProject: false,
        project_name: '',
        date: '',
        title: {
          code: "栋号",
          projectName: "所在项目",
          structure:'房屋结构',
          age: "房屋年代",
          jcqssj: "起始监测时间",
          jcsb:'监测设备'
        }
      };
    },
    computed:{
      data(){
        return this.$store.state.house.data
      }
    },
    created(){
      this.$store.dispatch('GetHouseData')
    },
    methods: {
      show(prop) {
        this[prop] = true
      }
    }
  };

</script>


