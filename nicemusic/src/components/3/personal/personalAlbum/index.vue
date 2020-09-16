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
};
</script>

<style lang='css' scoped>
.albumBox {
  /* text-align: center; */
}
/* .clear {
  clear: both;
} */
.albumBox .title {
  border-left: 5px solid #fa2800;
  padding-left: 10px;
}
</style>
