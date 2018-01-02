<template>
  <el-form :inline="true" label-width="80px" :model="data" class="creat-form">
    <el-form-item required label="项目名称">
      <el-input v-model="data.project_name"></el-input>
    </el-form-item>
    <el-form-item required label="项目地址">
      <el-select v-model="data.project_address" >
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item required label="负责人">
      <el-select v-model="data.leader" >
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item required label="房屋年代">
      <el-input v-model="data.years" ></el-input>
    </el-form-item>
    <el-form-item required label="房屋结构">
      <el-select v-model="data.structure" >
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item required label="委托单位">
      <el-input v-model="data.client" ></el-input>
    </el-form-item>
    <el-form-item required label="房屋层数">
      <el-input v-model="data.layers" ></el-input>
    </el-form-item>
    <el-form-item style="width:100%" required label="监测类型">
      <el-radio-group v-model="radio">
        <el-radio :label="3">裂缝</el-radio>
        <el-radio :label="6">沉降</el-radio>
        <el-radio :label="9">倾斜</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item style="width:100%" required label="项目概况">
      <el-input type="textarea" :rows="5" style="width:900px"  />
    </el-form-item>
    <el-form-item style="width:100%" required label="项目图片">
      <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload">
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload">
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload">
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload">
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </el-form-item>
    <el-form-item required label="项目资料">
    </el-form-item>
    <el-button @click="submit">提交</el-button>
  </el-form>
</template>

<script>
  export default {
    props:['showDrawMap','showCreate'],
    computed:{
      data(){
        return this.$store.state.project.newProject
      }
    },
    data() {
      return {
        imageUrl: '',
        radio: 3,
      }
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      submit() {
        this.$emit('update:showCreate',false)
        this.$emit('update:showDrawMap',true)
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

