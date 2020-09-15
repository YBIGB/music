<template>
  <div class="loginBg">
    <kinesis-container>
      <kinesis-element :strength="10">
        <!-- <div class="gap20"></div> -->
        <form action method="post" class="loginForm">
          <el-row :gutter="20">
            <el-col :span="16" :offset="4">
              <img src="../../../assets/images/logo-a.png" class="nicelogo" alt />
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
              <el-button type="primary">登录</el-button>
            </el-col>
          </el-row>
        </form>
      </kinesis-element>
    </kinesis-container>
  </div>
</template>

<script>
import "../../../assets/3d/vanilla-tilt.min.js";
import "element-ui/lib/theme-chalk/display.css";
import { KinesisContainer, KinesisElement } from "vue-kinesis";
export default {
  data() {
    return {
      inputU: "",
      inputP: "",
    };
  },
  components: {
    KinesisContainer,
    KinesisElement,
  },
};
</script>

<style lang='less' scoped>
* {
  padding: 0;
  margin: 0;
}
.gap20 {
  height: 20px;
}
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
  height: 1000px;
  background: #5dd5c8;
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
}
</style>
