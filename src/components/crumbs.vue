<template>
  <el-breadcrumb class="separator" separator-class="el-icon-arrow-right">
    <el-breadcrumb-item  to="layout" >首页 </el-breadcrumb-item>
    <el-breadcrumb-item :key="name" :to="{ name }" v-for="name in routelist">{{name}} </el-breadcrumb-item>
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
        var index =this.routelist.indexOf(this.$route.name )
        if (index !== -1) {
          //如果存在路由列表，则把之后的路由都删掉
          this.routeList.splice(index + 1, this.routeList.length - index - 1)
        } else {
          this.routeList.push(this.$route.name)
        }
      }
    }
  }

</script>

<style>
.separator {
    background: #fff;
    margin: -10px -10px 20px;
    padding: 20px;
}

.el-breadcrumb {
    font-size: 14px;
    line-height: 1;
}
</style>

