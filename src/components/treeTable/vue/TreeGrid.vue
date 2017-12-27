<template>
  <el-table :data="data" border style="width: 100%" :row-style="showTr">
    <el-table-column v-for="(column, index) in columns" :key="column.dataIndex" :label="column.text">
      <template slot-scope="scope">
        <span v-if="spaceIconShow(index)" v-for="(space, levelIndex) in scope.row._level" class="ms-tree-space"></span>
        <span class=" is-outlined is-primary is-small" v-if="toggleIconShow(index,scope.row)" @click="toggle(scope.$index)">
          <i v-if="!scope.row._expanded" class="el-icon-arrow-right" aria-hidden="true"></i>
          <i v-if="scope.row._expanded" class="el-icon-arrow-down" aria-hidden="true"></i>
        </span>
        <span v-else-if="index===0" class="ms-tree-space"></span>
        {{scope.row[column.dataIndex]}}
      </template>
    </el-table-column>
    <el-table-column label="操作" v-if="treeType === 'normal'" width="360">
      <template slot-scope="scope">
        <button type="button" class="el-button el-button--default el-button--small">
          <router-link :to="{ path: requestUrl + 'edit', query: {id: scope.row.Oid} }" tag="span">
            查看
          </router-link>
        </button>
        <el-button size="small" type="danger" @click="handleDelete(scope.row.id)">
          修改
        </el-button>
        <button type="button" class="el-button el-button--success el-button--small" @click="addChild(scope.row.id) ">
          添加子部门
        </button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
  import Utils from '../utils/index.js'
  //  import Vue from 'vue'
  export default {
    name: 'tree-grid',
    props: {
      // 该属性是确认父组件传过来的数据是否已经是树形结构了，如果是，则不需要进行树形格式化
      treeStructure: {
        type: Boolean,
        default: function () {
          return false
        }
      },
      // 这是相应的字段展示
      columns: {
        type: Array,
        default: function () {
          return []
        }
      },
      // 这是数据源
      dataSource: {
        type: Array,
        default: function () {
          return []
        }
      },
      // 这个作用是根据自己需求来的，比如在操作中涉及相关按钮编辑，删除等，需要向服务端发送请求，则可以把url传过来
      requestUrl: {
        type: String,
        default: function () {
          return ''
        }
      },
      // 这个是是否展示操作列
      treeType: {
        type: String,
        default: function () {
          return 'normal'
        }
      },
      // 是否默认展开所有树
      defaultExpandAll: {
        type: Boolean,
        default: function () {
          return false
        }
      }
    },
    data() {
      return {
        ids: []
      }
    },
    computed: {
      // 格式化数据源
      data: function () {
        let me = this
        if (me.treeStructure) {
          let data = Utils.MSDataTransfer.treeToArray(me.dataSource, null, null, me.defaultExpandAll)
          return data
        }
        return me.dataSource
      }
    },
    methods: {
      //递归计算需要添加的子节点的id
      maxId(arr) {
        let ids=[]
        arr.map(row => {
          this.ids.push(row.id)
          row.children.length !== 0 && this.maxId(row.children)
        })
        return Math.max(...this.ids) + 1
      },
      //递归计算需要插入子节点的位置
      Recursion(arr, id, fn) {
        for (let row of arr) {
          if (row.id == id) {
            fn(row, row.children.length)
            return
          }
          this.Recursion(row.children, id, fn)
        }
      },
      //添加子级
      addChild(id, params = {}) {
        this.Recursion(this.dataSource, id, row => row.children.push({
          ...params,
          id: this.maxId(this.dataSource),
          parentId: id,
          name: 'id=' + this.maxId(this.dataSource),
          age: 18,
          sex: 'parentId=' + id,
          children: []
        }))
      },
      // 显示行
      showTr: function ({
        row
      }) {
        let show = (row._parent ? (row._parent._expanded && row._parent._show) : true)
        row._show = show
        return show ? '' : 'display:none;'
      },
      // 展开下级
      toggle: function (trIndex) {
        let me = this
        let record = me.data[trIndex]
        record._expanded = !record._expanded
      },
      // 显示层级关系的空格和图标
      spaceIconShow(index) {
        let me = this
        if (me.treeStructure && index === 0) {
          return true
        }
        return false
      },
      // 点击展开和关闭的时候，图标的切换
      toggleIconShow(index, record) {
        let me = this
        if (me.treeStructure && index === 0 && record.children && record.children.length > 0) {
          return true
        }
        return false
      },
      handleDelete(id) {
        this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'error'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      }
    }
  }

</script>
<style scoped>
  .ms-tree-space {
    position: relative;
    top: 1px;
    display: inline-block;
    font-family: 'Glyphicons Halflings';
    font-style: normal;
    font-weight: 400;
    line-height: 1;
    width: 10px;
    height: 14px;
  }

  .ms-tree-space::before {
    content: ""
  }

  table td {
    line-height: 26px;
  }

</style>

