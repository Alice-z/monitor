<template>
  <div class="hello">
    <crumbs/>
    <header class="header">
      <label>名称:</label>
      <el-select v-model="name" filterable placeholder="请选择">
        <!-- <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" /> -->
      </el-select>
      <label style="width:105px">责任人:</label>
      <el-select v-model="leader" filterable placeholder="请选择">
        <!-- <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" /> -->
      </el-select>
    </header>
    <div class="middle">
      <el-button type="primary" size="small" v-text="'新建'" />
      <el-button type="success" size="small" v-text="'刪除'" />
    </div>
    <TreeGrid  :columns="columns" :tree-structure="true" :data-source="dataSource"></TreeGrid>
  </div>
</template>

<script>
  import TreeGrid from 'cpt/treeTable'
  export default {
    name: 'hello',
    data() {
      return {
        name: '',
        leader: '',
        columns: [{
            text: '姓名',
            dataIndex: 'name'
          },
          {
            text: '年龄',
            dataIndex: 'age'
          },
          {
            text: '性别',
            dataIndex: 'sex'
          }
        ],
        dataSource: [{
            id: 1,
            parentId: 0,
            name: '测试1',
            age: 18,
            sex: '男',
            children: [{
              id: 2,
              parentId: 1,
              name: '测试2',
              age: 22,
              sex: '男',
              children:[]
            }]
          },
          {
            id: 3,
            parentId: 0,
            name: '测试3',
            age: 23,
            sex: '女',
            children: [{
                id: 4,
                parentId: 3,
                name: '测试4',
                age: 22,
                sex: '男',
                 children:[]
              },
              {
                id: 5,
                parentId: 3,
                name: '测试5',
                age: 25,
                sex: '男',
                 children:[]
              },
              {
                id: 6,
                parentId: 3,
                name: '测试6',
                age: 26,
                sex: '女',
                children: [{
                  id: 7,
                  parentId: 6,
                  name: '测试7',
                  age: 27,
                  sex: '男',
                   children:[]
                }]
              }
            ]
          },
          {
            id: 8,
            parentId: 0,
            name: '测试8',
            age: 18,
            sex: '男',
            children:[]
          }
        ]
      }
    },
    components: {
      TreeGrid
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>

