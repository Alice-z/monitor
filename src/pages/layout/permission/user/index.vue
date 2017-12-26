<template>
  <div>
    <crumbs/>
    <header class="header">
      <label>房屋栋号:</label>
      <el-select v-model="name" filterable placeholder="请选择">
        <!-- <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" /> -->
      </el-select>
      <label style="width:105px">所属部门:</label>
      <el-select v-model="department" filterable placeholder="请选择">
        <!-- <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" /> -->
      </el-select>
    </header>
    <div class="middle">
      <el-button type="primary" size="small" v-text="'新建'" @click="create" />
      <el-button type="success" size="small" v-text="'刪除'" />
    </div>
    <list :title="title" :data="data" :treeData="treeData" labelWidth="300" isCheck isEdit isDele isPermission />
    <el-dialog width="1200px" center title="新建人员" :visible.sync="isCreate">
      <create :visible.sync="isCreate"/>
    </el-dialog>
  </div>
</template>

<script>
import treeData from '../tree'
 import create from './create'
  export default {
    components:{
      create
    },
    data() {
      return {
        treeData,
        name: '',
        department: '',
        isCreate:false,
        title: {
          id: "序号",
          role: "角色名称",
          roleInfo: '角色描述',
        },
        data: [{
          id: "序号",
          role: "角色名称",
          roleInfo: '角色描述',
        }]
      }
    },
    methods:{
      create(){
        this.isCreate=true
      }
    }
  }

</script>

<style scoped>
  .zoom {
    cursor: pointer!important;
  }

  .zoom:hover {
    cursor: pointer!important;
  }

</style>
