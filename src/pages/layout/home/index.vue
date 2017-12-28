<template>
  <div id="map">
    <div id="allmap" />
    <el-input id="suggestId" style="position:absolute;top:5px;left:5px;width:180px;" type="text" size="mini" prefix-icon="el-icon-search"
      suffix-icon="iconfont icon-close1" />
    <div id="searchResultPanel" style="border:1px solid #C0C0C0;width:150px;height:auto; display:none;" />
  </div>
</template>

<script>
  import config from "cpt/map/config";
  export default {
    mixins: [config],
    mounted() {
      this.map.setMapType(BMAP_SATELLITE_MAP)
      this.map.setMapStyle({
        style: 'midnight'
      });
      this.map.addControl(new BMap.MapTypeControl()) //地圖類型控件
      this.search()
      let close = document.getElementsByClassName('icon-close1')[0]
      let input = document.getElementById('suggestId')
      close.addEventListener('click', () => {
        input.value = ''
      })
    }
  }

</script>

<style lang="less">
  #map {
    background-color: #000;
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin: 0;
    font-family: "微软雅黑";
    position: relative;
    .el-input__inner {
      color: #333;
      border-radius: 0
    }
  }

  label {
    width: 70px;
    display: inline-block;
  }

  #tangram-suggestion--TANGRAM__1r {
    // background: rgba(0, 0, 0, 0.6)!important;
    outline: none;
    border: none;
    color: #000!important
  }

  .mg {
    margin: 10px 0;
  }

  .b {
    position: absolute;
    top: 0;
  }

</style>

