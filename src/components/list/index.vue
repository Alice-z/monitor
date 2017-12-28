<template>
  <div class="list">
    <el-table
      ref="multipleTable"
      @selection-change="handleSelectionChange"
      :data="data"
      border
      tooltip-effect="dark"
      style="width: 100%;text-algin:center">
      <el-table-column align="center" type="selection" width="55" />
      <el-table-column
        align="center"
        show-overflow-tooltip v-for="(i,k) in title"
        :key="k"
        :prop="k"
        :label="i" />
      <el-table-column
        align="center"
        prop="address"
        label="操作"
        :width="labelWidth">
        <template slot-scope="scope">
          <el-button v-if="isLocation" @click="location(scope.row)" type="success" size="mini">定位</el-button>
          <el-button v-if="isCheck" @click="check(scope.row)" type="primary" size="mini">详情</el-button>
          <el-button v-if="isEdit" @click="edit(scope.row)" type="warning" size="mini">修改</el-button>
          <el-button v-if="isDele" @click="dele(scope.row)" type="danger" size="mini">删除</el-button>
          <el-button v-if="isIssued" @click="issued(scope.row)" type="success" size="mini">预警下达</el-button>
          <el-button v-if="isAlarm" @click="issued(scope.row)" type="success" size="mini">告警下达</el-button>
          <el-button v-if="isPermission" @click="permission(scope.row)" type="success" size="mini">权限</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="pageing"
      background @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-size="10"
      layout="prev, pager, next, jumper"
      :total="1000" />
    <Model styles="padding:0" :showMsg.sync="showdrawMap">
      <drawMap
      :mapType="mapTypes[1]"
      :isShow.sync="showdrawMap" />
    </Model>
    <Model styles="padding:0" :showMsg.sync="showLocateMap">
      <LocateMap
      :polygon="polygon"
      :mapType="mapTypes[0]"
      :isShow.sync="showLocateMap" />
    </Model>
    <el-dialog
      width="1350px"
      :visible.sync="showDetails">
      <el-form
        :inline="true"
        label-width="110px"
        :model="detailsInof">
        <el-form-item
          :key="k"
          :label="i+':'"
          v-for="(i,k) in title">
          <el-input disabled="disabled" :value="detailsInof[k]" />
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-dialog
      title="修改信息"
      width="1350px"
      :visible.sync="showEdit">
      <el-form :inline="true" label-width="110px" :model="editInfo">
        <el-form-item required :key="k" :label="i" v-for="(i,k) in title">
          <el-input v-model="editInfo[k]" />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="success" >提交</el-button>
      </span>
    </el-dialog>
    <el-dialog title="权限配置" center :visible.sync="showRole">
      <el-tree
        :data="treeData"
        show-checkbox
        default-expand-all
        node-key="id"
        ref="tree"
        highlight-current :props="defaultProps"/>
    </el-dialog>
  </div>
</template>

<script>
  import Model from "cpt/model";
  import LocateMap from "cpt/map/LocateMap";

  export default {
    components: {
      Model,
      LocateMap
    },
    props: {
      title: Object,
      data: Array,
      treeData: Array,
      isEdit: Boolean,
      isCheck: Boolean,
      isLocation: Boolean,
      isDele: Boolean,
      isIssued: Boolean,
      isAlarm: Boolean,
      isPermission: Boolean,
      labelWidth: String
    },
    data() {
      return {
        mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP],
        showdrawMap: false,
        showLocateMap: false,
        showDetails: false,
        showEdit: false,
        showRole: false,
        currentPage: 1,
        select: {},
        checked: [],
        date: null,
        detailsInof: {},//详情信息
        editInfo: {},//修改项目信息
        polygon:{},//当前项目坐标信息
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    methods: {
      check(rowInfo) {
        console.log(rowInfo);
        this.showDetails = true
        this.detailsInof = rowInfo
      },
      edit(rowInfo) {
        this.showEdit = true
        this.editInfo = rowInfo
      },
      dele(e) {
        this.data.splice(e, 1);
      },
      create() {
        this.showdrawMap = true;
      },
      location(r) {
        this.polygon= r.polygon
        this.showLocateMap = true;
      },
      Issued() {

      },
      permission() {
        this.showRole = true
      },
      deleAllchecked() {
        let {   data,   checked } = this;
        for (let i in data) {
          for (let j in checked) {
            checked[j].id == data[i].id && data.splice(i, 1);
          }
        }
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      handleSelectionChange(vl) {
        this.checked = vl;
      }
    }
  };

</script>

<style lang="less" scoped>
  .list {
    background: #fff;
    .pageing {
      right: 10px;
      position: absolute;
      right: 0;
      margin-top: 20px;
      .el-pager li {
        font-weight: 200;
      }
    }
  }

  .model {
    text-align: center;
  }

</style>

