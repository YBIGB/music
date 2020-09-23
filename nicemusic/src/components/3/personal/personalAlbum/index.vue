<template>
  <div class="albumBox">
    <p class="title">
      <strong>
        <slot></slot>
      </strong>
    </p>
    <album v-for="(item,index) in playlist" :key="index" :album="item"></album>
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
  data() {
    return {};
  },
  props: ["playlist"],
  mounted() {
    const userId = window.localStorage.getItem("userId");
    console.log(userId);
  },
};
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
