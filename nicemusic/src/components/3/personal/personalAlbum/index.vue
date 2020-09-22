<template>
  <div class="albumBox">
    <p class="title">
      <strong>我创建的歌单</strong>
    </p>
    <album></album>
    <album></album>
    <album></album>
    <album></album>
    <div class="clear"></div>
  </div>
</template>

<script>
import Album from "./Album/index";
export default {
  name: "personalAlbum",
  components: {
    Album,
  },
  methods: {
    async getPersonalDetail() {
      try {
        let res = await this.$api.getUserDetail(phone, password);
        console.log(res);
        if (res.status != 502) {
          if (res.data.code == 200) {
            this.successLogin("登录成功", "success");
            window.location.href = "/found";
            window.localStorage.setItem("cookie", res.cookie);
            window.localStorage.setItem("token", res.token);
            window.localStorage.setItem("loginStatu", true);
            this.loginStatus = res;
          } else if (res.data.code == 502) {
            this.successLogin("密码错误", "error");
          } else if (res.data.code == 501) {
            console.log(res.data.msg);
            this.successLogin("账号不存在", "error");
          } else {
            this.successLogin("用户名或密码错误", "error");
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    getPersonalDetail();
  },
};
//getUserDetail
</script>

<style lang='css' scoped>
.clear {
  clear: both;
}
.albumBox .title {
  border-left: 5px solid #fa2800;
  padding-left: 10px;
}
</style>
