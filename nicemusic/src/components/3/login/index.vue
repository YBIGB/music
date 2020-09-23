<template>
  <div class="loginBg">
    <kinesis-container>
      <kinesis-element :strength="10">
        <!-- <div class="gap20"></div> -->
        <form action method="post" class="loginForm">
          <el-row :gutter="20">
            <el-col :span="16" :offset="4">
              <img src="@/assets/images/logo-a.png" class="nicelogo" alt />
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="16" :offset="4">
              <el-input v-model="inputU" prefix-icon="el-icon-user" placeholder="请输入内容"></el-input>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="16" :offset="4">
              <el-input
                placeholder="请输入密码"
                prefix-icon="el-icon-lock"
                v-model="inputP"
                show-password
              ></el-input>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="16" :offset="4">
              <el-button type="primary" @click="login">登录</el-button>
            </el-col>
          </el-row>
        </form>
      </kinesis-element>
    </kinesis-container>
    <el-button ref="message" :plain="true" style="visibility:none"></el-button>
  </div>
</template>

<script>
import "@/assets/3d/vanilla-tilt.min.js";
import "element-ui/lib/theme-chalk/display.css";
import { KinesisContainer, KinesisElement } from "vue-kinesis";
import md5 from "js-md5";
export default {
  data() {
    return {
      inputU: "",
      inputP: "",
      loginStatus: window.localStorage.getItem("loginStatus") || false,
    };
  },
  methods: {
    async login() {
      var phone = this.inputU;
      var password = md5(this.inputP);

      try {
        let res = await this.$api.loginMd5(phone, password);
        console.log(res);
        if (res.code == 200) {
          this.successLogin("登录成功", "success");
          // window.location.href = "/found";
          this.$router.replace("/found");
          window.localStorage.setItem("cookie", res.cookie);
          window.localStorage.setItem("token", res.token);
          window.localStorage.setItem("loginStatu", true);
          this.loginStatus = res;
          this.getUserDetail(res.profile.userId);
          window.localStorage.setItem("userId", res.profile.userId);
        } else if (res.body.code == 502) {
          this.successLogin("密码错误", "error");
        } else if (res.body.code == 501) {
          console.log(res.data.msg);
          this.successLogin("账号不存在", "error");
        } else {
          console.log(res.data);
          this.successLogin("用户名或密码错误", "error");
        }
      } catch (error) {
        console.log(error);
      }
    },
    successLogin(msg, type) {
      console.log(this.$refs.message);
      this.$refs.message.$message({
        showClose: true,
        message: msg,
        type: type,
      });
    },
    async getUserDetail(uid) {
      try {
        let res = await this.$api.getUserDetail(uid);
        console.log("personal", res);
      } catch (err) {
        console.log(err);
      }
    },
  },
  components: {
    KinesisContainer,
    KinesisElement,
  },
};
</script>

<style lang='less' scoped>
.el-row {
  margin: 28px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-button {
  width: 100%;
}
.nicelogo {
  width: 80px;
  height: 80px;
}
.loginBg {
  height: 100vh;
  background: #5dd5c8;
  overflow: hidden;
}
.loginForm {
  text-align: center;
  position: relative;
  padding: 10px;
  border-radius: 5px;
  background: url("../../../assets/images/logbg.jpg");
  width: 330px;
  height: 430px;
  margin: 0 auto;
  top: 100px;
  box-shadow: aqua 0 0 6px;
}
</style>
