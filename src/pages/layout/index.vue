<template>
  <el-container>
    <el-header style="background:#0d1424;line-height:70px;height:70px">
      <span    class="title">
        <img src="~@/assets/img/logo.png" style="vertical-align: middle">
        <span>房屋安全在线检测平台</span>
      </span>
      <span style="float:right;color:#fff">admin</span>
    </el-header>
    <el-container>
      <el-menu 
        unique-opened 
        router 
        :collapse="isShow" 
        background-color="#30426a" 
        text-color="#bfbfbf" 
        style="height:100%;width: 220px;margin-right:-1px"
        default-active="home" 
        @open="jump" @close="jump">
        <el-menu-item index="layout" style="background:#222d49">
          <i class="iconfont icon-home4" style="margin-right:15px" ></i>
          <span slot="title">系统首页</span>
        </el-menu-item>
        <el-submenu :index="item.path" :key="k" v-for="(item,k) in navInfo">
          <template slot="title">
            <i :class="item.meta.icon" style="margin-right:15px" />
            <span v-text="item.name" />
          </template>
          <el-menu-item-group>
            <el-menu-item :key="i.path" :index="i.path" v-for="(i,k) in item.children">{{i.name}} </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
      <el-main style="position:relative;background:#e6ebf5" :class="[$route.path!=='/layout'?'padding':'noPadding']"  >
        <router-view/>
      <footer v-if="$route.path!=='/layout'" >Copyright@2017上海市岩土工程检测中心 All Rights Reserved</footer>
      </el-main>
    </el-container>
  </el-container>
</template>


<script>
  import navInfo from "./";
  export default {
    data() {
      return {
        navInfo,
        isShow: false
      }
    },
    mounted(){
    }
  };

</script>

<style scoped>
  .title {
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    text-align: center;
    position: absolute;
    margin: auto;
    top: 0; left: 0; bottom: 0; right: 0;  
  }
  .padding{
    padding: 10px!important
  }
  .noPadding{
    padding: 0!important
  }

  footer {
    width: 100%;
    height: 35px;
    margin-left: -10px;
    line-height: 35px;
    position: fixed;
    bottom: 0;
    font-family: '微软雅黑';
    background:#fff;
    color: #868686;
    text-align: center;
    font-size: 14px;
  }
</style>

