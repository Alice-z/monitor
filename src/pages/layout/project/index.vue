<template>
  <div id="waring">
    <crumbs/>
    <header class="header">
      <label>项目名称:</label>
      <el-select v-model="name" filterable placeholder="请选择">
        <!-- <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" /> -->
      </el-select>
      <label>负责人:</label>
      <el-select v-model="leader" filterable placeholder="请选择">
        <!-- <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" /> -->
      </el-select>
      <el-button type="success" size="small" v-text="'查询'" />
    </header>
    <div class="middle">
      <el-button type="primary" size="small" v-text="'新建'" @click="create" />
      <el-button type="success" size="small" v-text="'刪除'" />
    </div>
    <list
      labelWidth="200"
      :data="data"
      :title="title"
      isLocation
      isCheck
      isEdit />
    <el-dialog
      width="1310px"
      center
      title="新建项目"
      :visible.sync="showCreate">
      <Create
      :showCreate.sync="showCreate"
      :showDrawMap.sync="showDrawMap"/>
    </el-dialog>
    <model styles="padding:0" :showMsg.sync="showDrawMap">
      <drawMap :mapType="mapTypes" :isShow.sync="showDrawMap" />
    </model>
  </div>
</template>


<script>
  import chart from "cpt/chart";
  import list from 'cpt/list/index.vue'
  import model from "cpt/model";
  import drawMap from "cpt/map/drawMap";
  import Create from "./create";
  export default {
    components: {
      chart,
      drawMap,
      list,
      model,
      Create
    },
    data() {
      return {
        mapTypes: BMAP_NORMAL_MAP,
        showDrawMap: false,
        showCreate: false,
        name: '',
        leader: '',
        title: {
          name: "项目名称",
          address: '项目地址',
          entrustUnit: "委托单位",
          principal: "负责人",
          houseAge: "房屋年代",
          houseNumber: "房屋层数",
          houseStructure: "房屋结构",
        }
      };
    },
    async  created(){
      await  this.$store.dispatch('GetData')
      console.log(this.data);
    },
    computed: {
      data() {
        return this.$store.state.project.data
      }
    },
    methods: {
      create() {
        this.showCreate = true
      }
    }
  };

</script>
<style lang="less">
  .separator{
    background: #fff;
    margin: -10px -10px 20px;
    padding: 20px
  }
</style>

