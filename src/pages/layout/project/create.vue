<template>
  <el-form :inline="true" label-width="80px" :model="formInline" class="creat-form">
    <el-form-item required label="项目名称">
      <el-input v-model="formInline.user" placeholder="项目名称"></el-input>
    </el-form-item>
    <el-form-item required label="项目地址">
      <el-select v-model="formInline.region" placeholder="项目地址">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item required label="负责人">
      <el-select v-model="formInline.region" placeholder="负责人">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item required label="房屋年代">
      <el-input v-model="formInline.user" placeholder="房屋年代"></el-input>
    </el-form-item>
    <el-form-item required label="房屋结构">
      <el-select v-model="formInline.region" placeholder="房屋结构">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item required label="委托单位">
      <el-input v-model="formInline.user" placeholder="委托单位"></el-input>
    </el-form-item>
    <el-form-item required label="房屋层数">
      <el-input v-model="formInline.user" placeholder="房屋层数"></el-input>
    </el-form-item>
    <el-form-item style="width:100%" required label="监测类型">
      <el-radio-group v-model="radio">
        <el-radio :label="3">备选项</el-radio>
        <el-radio :label="6">备选项</el-radio>
        <el-radio :label="9">备选项</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item style="width:100%" required label="监测类型">
      <el-input type="textarea" :rows="5" style="width:900px" placeholder="请输入内容" />
    </el-form-item>
    <el-form-item style="width:100%" required label="监测类型">
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
  </el-form>
</template>

<script>
  export default {
    data() {
      return {
        imageUrl: '',
        radio: '',
        formInline: {
          user: '',
          region: ''
        }
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
      onSubmit() {
        console.log('submit!');
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
      margin-right: 20px;
    }
    .el-upload--text{
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

