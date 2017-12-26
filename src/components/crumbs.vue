<template>
  <el-breadcrumb class="separator" separator-class="el-icon-arrow-right">
    <el-breadcrumb-item  to="layout" >首页 </el-breadcrumb-item>
    <el-breadcrumb-item :key="item" :to="{ name: item }" v-for="item in routelist">{{item}} </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
  
  export default {
    data() {
      return {
        routelist: []
      }
    },
    created(){
      this.routelist.push(this.$route.name)
    },
    watch:{
      $route(){
        var index = routeList.indexOf(to.name)
        if (index !== -1) {
          //如果存在路由列表，则把之后的路由都删掉
          routeList.splice(index + 1, routeList.length - index - 1)
        } else {
          routeList.push(to.name)
        }
      }
    }
  }

</script>

<style>


</style>

