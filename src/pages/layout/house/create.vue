<template>
  <el-form ref="form" :inline="true" label-width="80px" :model="data" class="creat-form">
    <el-form-item required prop="projectName" label="项目名称">
      <el-input v-model="data.projectName" />
    </el-form-item>
    <el-form-item required prop="code" label="栋号">
      <el-input v-model="data.code" />
    </el-form-item>
    <el-form-item required prop="structure" label="房屋结构">
      <el-input v-model="data.structure" />
    </el-form-item>
    <el-form-item required prop="age" label="房屋年代">
      <el-input v-model="data.age" />
    </el-form-item>
    <el-form-item required prop="jcqssj" label="起始监测时间">
      <el-input v-model="data.jcqssj" />
    </el-form-item>
    <el-form-item  required prop="jcsb" label="监测设备">
      <el-input v-model="data.jcsb" />
    </el-form-item>
    <div class="next">
      <el-button type="success" @click="submit">提交</el-button>
    </div>
  </el-form>
</template>

<script>
  export default {
    props: ['visible'],
    computed: {
      data() {
        return this.$store.state.house.newHouse
      }
    },
    data() {
      return {

      }
    },
    methods: {
      submit() {
        this.$refs['form'].validate((valid) => {
          if (valid) {
            this.$store.dispatch('SaveNewInfo')
            this.$store.state.house.newHouse=null
            this.$message({
              message: '创建成功',
              type: 'success'
            })
            this.$emit('update:visible', false)
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }

</script>

<style>


</style>

