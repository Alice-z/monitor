<template>
  <div class="login" @keydown.enter="submit">
    <div class="form">
      <el-input
        prefix-icon="iconfont icon-user"
        v-model="userName"
        auto-complete="off"
        placeholder="请输入用户名" />
      <el-input
        prefix-icon="iconfont icon-lock1"
        type="password"
        v-model.number="passWord"
        auto-complete="off"
        placeholder="请输入用密码"
      />
      <el-checkbox  v-model="checked">记住密码</el-checkbox>
      <button type="primary" @click="submit">登录</button>
      <div class="edit">
        <a @click="log" >忘记密码</a> |
        <a>注册账号</a>
      </div>
    </div>
  </div>
</template>
<script>
import Cookies from 'js-cookie'
export default {
  data() {
    return {
      checked: false,
      userName: localStorage.userName || "",
      passWord: localStorage.passWord || ""
    };
  },
  methods: {
    log(){
      let r= this.util.getCookie('token')
      console.log(r)
    },
    async submit() {
      let { userName, passWord, checked } = this;
      let r = await this.fetch('/api/login',{ userName, passWord });
      if (r.code == 1) {
        this.jump("layout");
        if (checked) {
          localStorage.userName = userName;
          localStorage.passWord = passWord;
        }
      } else
        this.$message({
           showClose: true,
           message: "用户名密码错误",
           type: "error"
        });
    }
  }
};
</script>
<style lang="less">
.login {
  background: url("~img/login_bg1.png") no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
}
.form {
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.05);
  padding: 80px;
  padding-bottom: 50px;
  width: 554px;
  position: absolute;
  right: 412px;
  top: 65px;
  .iconfont {
    font-size: 24px;
    position: relative;
    top: -3px;
  }
  .el-checkbox__label {
    color: #fff !important;
    font-size: 20px;
  }
  .el-input {
    margin: 20px 0;
  }
  input {
    height: 60px;
    font-size: 24px;
  }
  .edit {
    font-size: 20px;
    text-align: right;
    color: #fff !important;

    a {
      color: #fff !important;
    }
  }
  button {
    margin: 34px 0 20px;
    width: 100%;
    height: 60px;
    border: 0;
    font-size: 24px;
    font-weight: normal;
    color: #fff;
    background: #087ca8;
    padding: 10px 10px;
    border-radius: 2px;
  }
}
</style>

