<template>
  <div>
    <crumbs/>
    <div  class="resource">
      <el-tree class="fl tree el-tabs--border-card"  :data="treeData" show-checkbox default-expand-all node-key="id" ref="tree"
        highlight-current>
      </el-tree>
      <el-tabs class="fl tab" v-model="activeName2" type="border-card" @tab-click="handleClick">
        <el-tab-pane label="添加模块" name="first">添加模块</el-tab-pane>
        <el-tab-pane label="功能模块" name="second">功能模块</el-tab-pane>
        <el-tab-pane label="快速添加按钮" name="third">快速添加按钮</el-tab-pane>
        <el-tab-pane label="修改" name="fourth">修改</el-tab-pane>
        <el-tab-pane label="删除" name="dele">删除</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  import treeData from "../tree";
  export default {
    data() {
      return {
        treeData,
        activeName2:'first'
      }
    },
    methods:{
      handleClick(){

      }
    }
  };

</script>

<style lang="less" csoped>
  .resource {
    height: 800px;
    background: #fff;
    padding: 20px;
    ::after{
      content: '';
      display: block;
      clear: both;
    }
  }
  .tree{
    padding-top: 10px;
    height: 100%;
    padding-right: 20px;
  }
  .tab{
    width: 1000px;
    margin-left: 20px;
    height: 100%;
  }


</style>

