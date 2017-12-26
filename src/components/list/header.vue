<template>
  <header>
      <label>查询条件:</label>
      <el-select v-model="select" filterable placeholder="请选择">
        <!-- <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" /> -->
      </el-select>
      <label style="margin-left:50px">时间段:</label>
      <el-date-picker 
        v-model="date" 
        type="daterange" 
        range-separator="至" 
        start-placeholder="开始日期" 
        end-placeholder="结束日期" />
      <el-button type="primary" v-text="'搜索'" @click="search" />
    </header>

</template>

<script>
export default {
  methods:{
    search(){
      
    }
  }
}
</script>

<style lang="less" >
  header {
    background: #fff;
    height: 60px;
    padding: 15px;
    margin-bottom: 5px;
    overflow: hidden;
    white-space: nowrap;
    border-radius: 3px;
    .el-input {
      width: 200px;
    }
  }
</style>
