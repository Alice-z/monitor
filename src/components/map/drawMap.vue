<template>
  <div id="map">
    <div id="allmap" />
    <el-input
      id="suggestId"
      style="position:absolute;top:5px;left:5px;width:180px"
      type="text"
      size="mini"
      prefix-icon="el-icon-search"
      suffix-icon="iconfont icon-close1" />
    <div id="searchResultPanel" style="border:1px solid #C0C0C0;width:150px;height:auto; display:none;" />
  </div>
</template>

<script>
import config from "./config";
import ModalBox from "../model";
export default {
  mixins: [config],
  components: {
    ModalBox
  },
  data() {
    return {
      //绘制实例信息
      overlays: {},
      showMsg: false
    };
  },
  methods: {
    overlaycomplete(e) {
      let path = e.overlay.getPath();
      let len = path.length;
      let lng = 0,
        lat = 0;
      path.map(r => {
        lng = lng + r.lng;
        lat = lat + r.lat;
      });
      (lng = lng / len), (lat = lat / len);
      let center = { lng, lat };
      let zoom = this.map.getZoom();
      let payload= {path,center,zoom}
      this.showMsg = true;
      this.overlays = e.overlay;
      this.$confirm("创建新的项目", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }) .then(async () => {
          let r=  await  this.$store.dispatch("createProject",payload);
          if(r.code==0){
            this.showMsg = false;
            this.map.removeOverlay(this.overlays);
            return
          }
          this.showMsg = false;
          this.$emit("update:isShow", false);
          this.map.removeOverlay(this.overlays);
          this.$message({
            message: "新建项目成功",
            type: "success"
          });
        })
    },
    createSucc() {
      this.$store.state.project.data.push(this.newProject);
    }
  },
  mounted() {
    this.search();
    this.map.setMapStyle({ style: "midnight" });
    this.map.addControl(new BMap.MapTypeControl()); //地圖類型控件
    //实例化鼠标绘制工具
    let drawingManager = new BMapLib.DrawingManager(this.map, {
      isOpen: true, //是否开启绘制模式
      enableDrawingTool: true, //是否显示工具栏
      drawingToolOptions: {
        anchor: BMAP_ANCHOR_BOTTOM_RIGHT, //位置
        offset: new BMap.Size(5, 5), //偏离值
        drawingModes: [BMAP_DRAWING_POLYGON] //画笔类型
      }
    });
    drawingManager.setDrawingMode("");
    //添加鼠标绘制工具监听事件，用于获取绘制结果
    drawingManager.addEventListener("overlaycomplete", this.overlaycomplete);
    let close = document.getElementsByClassName("icon-close1")[0];
    let input = document.getElementById("suggestId");
    close.addEventListener("click", () => {
      input.value = "";
    });
  }
};
</script>

<style>
#map {
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0;
  font-family: "微软雅黑";
}

label {
  width: 70px;
  display: inline-block;
}

.mg {
  margin: 10px 0;
}

.b {
  position: absolute;
  top: 0;
}
</style>

