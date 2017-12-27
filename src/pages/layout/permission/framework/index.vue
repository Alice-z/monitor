<template>
  <div>
    <crumbs/>
    <header class="header">
      <label>名称:</label>
      <el-select v-model="name" filterable placeholder="请选择">
        <!-- <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" /> -->
      </el-select>
      <label style="width:105px">责任人:</label>
      <el-select v-model="leader" filterable placeholder="请选择">
        <!-- <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" /> -->
      </el-select>
    </header>
    <div class="middle">
      <el-button type="primary" size="small" v-text="'新建'" @click="create" />
      <el-button type="success" size="small" v-text="'刪除'" />
    </div>
   
  </div>
</template>

<script>
 export default{
   data(){
     return{
       name:"",
       leader:""
     }
   }
 }
</script>


