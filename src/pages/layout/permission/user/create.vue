<template>
  <el-form :inline="true" label-width="80px" :model="formInline" class="creat-form">
    <el-form-item required label="姓名">
      <el-input v-model="formInline.user" placeholder="姓名"></el-input>
    </el-form-item>
    <el-form-item required label="账号">
      <el-select v-model="formInline.region" placeholder="账号">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item required label="所属部门">
      <el-select v-model="formInline.department" placeholder="所属部门">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item required label="拥有角色">
      <el-input v-model="formInline.hasRole" placeholder="房屋年代"></el-input>
    </el-form-item>
    <el-form-item required label="移动电话">
      <el-input v-model="formInline.phone" placeholder="移动电话"></el-input>
    </el-form-item>
    <div >
      <label style="width:75px;display:inline-block;text-align:right;padding-right:12px"  for="">备注:</label>
      <el-input type="textarea" :rows="5" style="width:800px" placeholder="请输入内容" />
    </div>
    <div  class="next">
      <el-button  type="success" @click="submit">确定 </el-button>
    </div>

  </el-form>
</template>

<script>
  export default {
    props:['visible'],
    data() {
      return {
        formInline: {
          name: "",
          account: "",
          department: "",
          hasRole: "",
          phone: ""
        }
      }
    },
    methods: {
      submit() {
        this.$emit('update:visible', false)
      }
    }
  }

</script>
<style lang="less">
  .creat-form {
    min-height:300px ;
    .el-form-item {
      width: 300px;
    }
    .avatar-uploader {
      float: left;
      margin-right: 20px;
    }
    .el-upload--text {
      background-color: #F2F6FC!important
    }
    .avatar-uploader .el-upload {
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
      border-color: #409EFF;
    }
    .avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 178px;
      height: 178px;
      line-height: 178px;
      text-align: center;
    }
    .avatar {
      width: 178px;
      height: 178px;
      display: block;
    }
  }

</style>

