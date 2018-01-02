<template>
  <el-container>
    <el-header class="top">
      <span class="title">
        <img src="~@/assets/img/logo.png" style="vertical-align: middle">
        <span>房屋安全在线检测平台</span>
      </span>
      <i style="float:right;color:#fff">
        <img src="~img/user.png" style="width:50px;height:50px;border-radius:50%;position:relative;top:3px;right:10px" alt="">
      </i>
    </el-header>
    <el-container>
      <el-menu unique-opened router :collapse="isShow" background-color="#30426a" text-color="#bfbfbf" class="menu" default-active="home"
        @open="jump" @close="jump">
        <el-menu-item index="layout">
          <i class="iconfont icon-home4" style="margin-right:15px"></i>
          <span slot="title">系统首页</span>
        </el-menu-item>
        <el-submenu :index="item.path" :key="k" v-for="(item,k) in navInfo">
          <template slot="title">
            <i :class="item.icon" style="margin-right:15px" />
            <span v-text="item.name" />
          </template>
          <el-menu-item-group>
            <el-menu-item :key="i.path" :index="i.path" v-for="(i,k) in item.children">{{i.name}} </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
      <el-main style="position:relative;background:#e6ebf5" :class="[$route.path!=='/layout'?'padding':'noPadding']">
        <router-view/>
        <footer v-if="$route.path!=='/layout'">Copyright@2017上海市岩土工程检测中心 All Rights Reserved</footer>
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
    }
  };

</script>

<style lang="less" scoped>
  .menu {
    font-size: 16px;
    height: 100%;
    width: 220px;
    margin-right: -1px;
    
    box-shadow: 0 0 5px rgba(33, 7, 129, 0.5);
    color: #0f0629;
    .iconfont {
      font-size: 20px;
      top: -3px;
      position: relative;
    }
    .icon {
      font-size: 20px;
    }
  }

  .top {
    background-image: linear-gradient( to right,
    rgba(3, 50, 80, 1) 0%,
    rgba(3, 70, 90, 1) 7%,
    rgba(3, 70, 100, 1) 11%,
    rgba(3, 80, 110, 1) 17%,
    rgba(3, 90, 120, 1) 28%,
    rgb(3, 121, 220) 45%,
    rgb(3, 121, 200) 55%,
    rgba(3, 90, 110, 1)75%,
    rgba(3, 80, 100, 1) 88%,
    rgba(3, 70, 90, 1)93%,
    rgba(3, 50, 80, 1) 100%);
    ;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    line-height: 70px;
    height: 70px
  }

  .title {
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    text-align: center;
    position: absolute;
    margin: auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  .padding {
    padding: 10px!important
  }
  .noPadding {
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
    background: #fff;
    color: #000;
    font-weight: 500;
    text-align: center;
    font-size: 14px;
  }

</style>
