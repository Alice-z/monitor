<template>
  <div class="edit">
    <el-form v-if="visible" :inline="true" label-width="110px" :model="list" >
      <el-form-item  required :key="k" :label="i" v-for="(i,k) in title">
        <el-input v-model="list[k]" />
      </el-form-item>
    </el-form>
    <div style="width:50px;margin:0 auto">
      <el-button type="success" @click="submit">提交</el-button>
    </div>
  </div>

</template>

<script>
  export default {
    props: ['data', 'visible', 'title'],
    data() {
      return {
        list: this.data
      }
    },
    methods: {
      async submit() {
        try {
          await this.ajax(requestUrl, data, 'post')
          this.$message({
            message: '修改成功',
            type: 'success'
          });
          this.$emit('update:visible', false)
        } catch (error) {
          this.$message.error('出错了');
        }

      }
    },
    created(){
      console.log(this.list);
    }
  }

</script>

<style lang="less" scoped>

.edit{
  min-height: 500px;
  position:relative;
}
button{
  position: absolute;
  bottom: 20px
}

</style>

