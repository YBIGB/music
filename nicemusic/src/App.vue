<template>
  <div style="position:relative;">
    <headerBar v-if="isLogin" @showSearch="isSearch=!isSearch"></headerBar>
    <router-view></router-view>
    <footerBar v-if="isLogin"></footerBar>
    <goTop v-if="isLogin"></goTop>
    <searchBox id="searchBox" v-if="isSearch"></searchBox>
    <player-bar v-if="isLogin"></player-bar>
    <div class="fly bg-fly-circle1"></div>
    <div class="fly bg-fly-circle2"></div>
    <div class="fly bg-fly-circle3"></div>
    <div class="fly bg-fly-circle4"></div>
    <button @click="sss">123</button>
  </div>
</template>

<script>
import headerBar from "./components/4/headerBar";
import footerBar from "./components/4/footerBar";
import goTop from "./components/2/goTop";
import searchBox from "./components/4/search";
import PlayerBar from "./components/4/playerBar";
export default {
  name: "home",
  components: {
    headerBar,
    footerBar,
    goTop,
    searchBox,
    PlayerBar,
  },
  data() {
    return {
      isLogin: true,
      isSearch: false,
      posts: [],
    };
  },
  methods: {
    sss() {
      this.axios
        .get("http://localhost:3000/song/detail?ids=347230,347231")
        .then((res) => {
          console.log(res);
        });
    },
  },
};
</script>

<style lang="less" scoped>
#searchBox {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
}

.fly {
  pointer-events: none;
  position: fixed;
  z-index: 100;
}
.bg-fly-circle1 {
  left: 40px;
  top: 100px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(
    to right,
    rgba(100, 84, 239, 0.27) 0%,
    rgba(48, 33, 236, 0.04) 100%
  );
  animation: move 2.5s linear infinite;
}

.bg-fly-circle2 {
  left: 3%;
  top: 60%;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: linear-gradient(
    to right,
    rgba(100, 84, 239, 0.18) 0%,
    rgba(48, 33, 236, 0.04) 100%
  );
  animation: move 3s linear infinite;
}

.bg-fly-circle3 {
  right: 2%;
  top: 140px;
  width: 145px;
  height: 145px;
  border-radius: 50%;
  background: linear-gradient(
    to right,
    rgba(100, 84, 239, 0.1) 0%,
    rgba(48, 33, 236, 0.14) 100%
  );
  animation: move 2.5s linear infinite;
}

.bg-fly-circle4 {
  right: 5%;
  top: 60%;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background: linear-gradient(
    to bottom,
    rgba(100, 84, 239, 0.22) 0%,
    rgba(48, 33, 236, 0.04) 100%
  );
  animation: move 3.5s linear infinite;
}

@keyframes move {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(25px);
  }

  100% {
    transform: translateY(0px);
  }
}
</style>
