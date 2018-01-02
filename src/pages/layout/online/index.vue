<template>
  <div id="waring">
    <crumbs/>
    <header class="header">
      <label>所在项目:</label>
      <el-select v-model="project_name" filterable placeholder="请选择">
        <!-- <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" /> -->
      </el-select>
      <label>所属房屋:</label>
      <el-select v-model="leader" filterable placeholder="请选择">
        <!-- <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" /> -->
      </el-select>
      <label>时间段:</label>
      <el-date-picker v-model="date" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" />
      <el-button type="success" size="small" v-text="'查询'" />
      <el-button type="primary" size="small" v-text="'导出'" />
    </header>
    <div class="middle">
      <el-radio-group size="small" v-model="radio">
        <el-radio-button label="曲线图"></el-radio-button>
        <el-radio-button label="柱状图"></el-radio-button>
        <el-radio-button label="列表"></el-radio-button>
      </el-radio-group>
    </div>
    <div class="box">
      <img v-if="showImg" src="~img/wanzi.png" class="zoom img" >
      <barChart class="barChart" v-if="radio=='柱状图'" />
      <lineChart class="barChart" v-if="radio=='曲线图'" />
      <list v-if="radio=='列表'" :data="data" :title="title" isCheck isDele />
    </div>
    <el-dialog center title="新建项目" :visible.sync="showCreateProject">
      <button @click="show('showDrawMap')">划分区域 </button>
    </el-dialog>

  </div>
</template>


<script>
  import barChart from "./bar";
  import lineChart from "./line";
  import list from 'cpt/list/index.vue'
  import model from "cpt/model";
  export default {
    components: {
      barChart,
      lineChart,
      list,
      model
    },
    data() {
      return {
        date: '',
        radio: '曲线图',
        showCreateProject: false,
        project_name: '',
        leader: '',
        title: {
          device_name: "设备名称",
          device_id: '设备器号',
          iupr: "监测频率",
          back_nb: '回传数值',
          offset_x: " x偏移",
          offset_y: 'y偏移',
        }
      };
    },
    computed: {
      data() {
        return this.$store.state.online.data
      },
      showImg(){
        return this.radio!='列表'
      }
    },
    methods: {
      show(prop) {
        prop == 'showDrawMap' && (this.showCreateProject = false)
        this[prop] = true
      }
    },
    mounted() {
      import ('utils/zoom.js').then(
        r => Zoomerang
        .config({
          maxHeight: 400,
          maxWidth: 400,
          bgColor: '#000',
          bgOpacity: .85
        })
        .listen('.zoom')
      )
    }
  };

</script>

<style lang="less" scoped>
#waring{
  .box{
    background: #fff;
    min-height: 700px;
    position: relative;
  }
  .img{
    position: absolute;
    top: 10px;
    right: 20px;
    width: 200px;
    height: 100px;
  }
}

</style>

