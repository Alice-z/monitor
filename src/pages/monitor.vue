<template>
  <div>
    <header>
      <img src="~img/header.png" alt="">
      <img src="~img/title.png" alt="">
    </header>
    <section>
      <div id="allmap" />
      <ul class="circle-top">
        <li>
          <p>房屋监测数量</p>
          <div class="bg">256栋</div>
        </li>
        <li>
          <p>设备布设数量</p>
          <div class="bg">256个</div>
        </li>
        <li>
          <p>数据采集数量</p>
          <div class="bg">256条</div>
        </li>
      </ul>
      <ul class="circle-bottom">
        <li>
          <el-progress type="circle" :percentage="50" status="exception" />
          <p>我是项目名</p>
        </li>
        <li>
          <el-progress type="circle" :percentage="11" status="exception" />
          <p>我是项目名</p>
        </li>
        <li>
          <el-progress type="circle" :percentage="25"  />
          <p>我是项目名</p>
        </li>
        <li>
          <el-progress type="circle" :percentage="22" status="success" />
          <p>我是项目名</p>
        </li>

      </ul>
      <!-- <img src="~img/box.png" class="box"> -->
      <img src="~img/lt.png" class="lt">
      <img src="~img/lb.png" class="lb">
      <img src="~img/rb.png" class="rb">
      <img src="~img/rt.png" class="rt">
    </section>
  </div>
</template>

<script>
  import config from "cpt/map/config";
  export default {
    mixins: [config],
    mounted() {
      this.map.setMapStyle({
        style: 'midnight'
      });
    }
  };

</script>

<style lang="less" scoped>
  header {
    height: 7%;
    background: #1f2738;
    position: relative;
    img {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      margin: auto;
    }
  }

  li {
    float: left;
    margin-left: 15px;
    p {
      text-align: center;
      font-size: 14px;
      font-weight: 100;
      margin: 5px 0;
    }
  }

  section {
    height: 93%;
    position: relative;
    color: #ccc;
    box-shadow: 0px 5px 20px #0cf inset;
    img {
      position: absolute;
    }
    .circle-top {
      position: absolute;
      padding: 30px 40px;
      top: 50px;
      right: 50px;
      .bg {
        background: url('~img/circle.png') no-repeat;
        background-size: 100%;
        height: 130px;
        width: 130px;
        line-height: 130px;
        text-align: center
      }
    }
    .circle-bottom {
      padding: 20px 30px;
      background: url('~img/box.png') no-repeat;
      background-size: 100%;
      position: absolute;
      bottom: 40px;
      right: 50px;
    }
    .rt {
      top: 0px;
      right: 0;
    }
    .rb {
      bottom: 0;
      right: 0;
    }
    .lt {
      top: 0px;
      left: 0;
    }
    .lb {
      left: 0;
      bottom: 0;
    }
  }

  #map {
    padding: 2px;
  }

</style>

