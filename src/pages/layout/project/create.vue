<template>
  <el-form 
    ref="form"
    :inline="true" 
    label-width="80px" 
    :model="data" 
    class="creat-form">
    <el-form-item required label="项目名称">
      <el-input v-model="data.name" />
    </el-form-item>
    <el-form-item required label="项目地址">
      <el-input v-model="data.address" />
    </el-form-item>
    <el-form-item required label="负责人">
      <el-input v-model="data.principal" />
    </el-form-item>
    <el-form-item required label="房屋年代">
      <el-input v-model="data.houseAge" />
    </el-form-item>
    <el-form-item required label="房屋结构">
      <el-input v-model="data.structure" />
    </el-form-item>
    <el-form-item required label="委托单位">
      <el-input v-model="data.entrustUnit" />
    </el-form-item>
    <el-form-item required label="房屋层数">
      <el-input v-model="data.houseNumber" />
    </el-form-item>
    <el-form-item style="width:100%" required label="监测类型">
      <el-checkbox-group v-model="data.monitorType">
        <el-checkbox label="裂缝 "></el-checkbox>
        <el-checkbox label="沉降 "></el-checkbox>
        <el-checkbox label="倾斜 "></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item style="width:100%"  label="项目概况">
      <el-input type="textarea" :rows="5" style="width:900px" />
    </el-form-item>
    <el-form-item style="width:100%"  label="项目图片">
      <el-upload
        class="avatar-uploader"
        action="/rest/project/doAdd/1/"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        >
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </el-form-item>
    <el-form-item  label="项目资料">
    </el-form-item>
    <div class="next">
      <el-button type="success" @click="submit">提交</el-button>
    </div>
  </el-form>
</template>

<script>
  export default {
    props: ['showDrawMap', 'showCreate'],
    computed: {
      data() {
        return this.$store.state.project.projectInfo
      }
    },
    data() {
      return {
        fileList: [],
        imageUrl:'',
        imageUrl2:'',
        imageUrl3:'',
        imageUrl4:'',
      }
    },
    created(){
      console.log(this.$refs);
    },
    methods: {
      handleAvatarSuccess(res, file) {
        console.log(file);
        console.log(res);
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      submit() {
        // this.$refs.upload.submit();
        this.$emit('update:showCreate', false)
        this.$emit('update:showDrawMap', true)
      }
    }
  }

</script>
<style lang="less">
  .creat-form {
    .el-form-item {
      width: 300px;
    }
    .avatar-uploader {
      float: left;
      margin-right: 90px;
    }
    .el-upload--text {
      background-color: #F2F6FC!important
    }
    .avatar-uploader .el-upload {
      border: 2px dashed #0f996b;
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
      width: 150px;
      height: 150px;
      line-height: 150px;
      text-align: center;
    }
    .avatar {
      width: 178px;
      height: 178px;
      display: block;
    }
  }

</style>

