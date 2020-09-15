<template>
  <div>
    <headerBar style="margin-bottom:60px" v-if="isLogin"></headerBar>
    <router-view></router-view>
    <footerBar v-if="isLogin"></footerBar>
    <!-- <goTop></goTop> -->
    <div class="fly bg-fly-circle1"></div>
    <div class="fly bg-fly-circle2"></div>
    <div class="fly bg-fly-circle3"></div>
    <div class="fly bg-fly-circle4"></div>
  </div>
</template>

<script>
import headerBar from "./components/4/headerBar";
import footerBar from "./components/4/footerBar";
// import goTop from './components/2/goTop'
export default {
  name: "home",
  components: {
    headerBar,
    footerBar,
  },
  data() {
    return {
      isLogin:true
    }
  },
};
</script>

<style scoped>

.fly{
  position: absolute;
  z-index: 0;
}
.bg-fly-circle1 {
  left: 40px;
  top: 100px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(to right, rgba(100, 84, 239, 0.27) 0%, rgba(48, 33, 236, 0.04) 100%);
  animation: move 2.5s linear infinite;
}

.bg-fly-circle2 {
  left: 3%;
  top: 60%;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: linear-gradient(to right, rgba(100, 84, 239, 0.18) 0%, rgba(48, 33, 236, 0.04) 100%);
  animation: move 3s linear infinite;
}

.bg-fly-circle3 {
  right: 2%;
  top: 140px;
  width: 145px;
  height: 145px;
  border-radius: 50%;
  background: linear-gradient(to right, rgba(100, 84, 239, 0.1) 0%, rgba(48, 33, 236, 0.14) 100%);
  animation: move 2.5s linear infinite;
}

.bg-fly-circle4 {
  right: 5%;
  top: 60%;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background: linear-gradient(to bottom, rgba(100, 84, 239, 0.22) 0%, rgba(48, 33, 236, 0.04) 100%);
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
