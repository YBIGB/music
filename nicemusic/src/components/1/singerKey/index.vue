<template>
<div>
    <ul>
      <li>全部</li>
      <li>男歌手</li>
      <li>女歌手</li>
      <li>组合</li>
  </ul>
  <ul>
      <li>全部</li>
      <li>内地</li>
      <li>欧美</li>
      <li>港澳</li>
      <li>韩国</li>
      <li>其他</li>
  </ul>
  <ul class="circle">
      <li>热门</li>
      <li>A</li>
      <li>B</li>
      <li>C</li>
      <li>C</li>
      <li>D</li>
      <li>E</li>
      <li>F</li>
      <li>G</li>
      <li>H</li>
      <li>I</li>
      <li>J</li>
      <li>K</li>
      <li>L</li>
      <li>M</li>
      <li>N</li>
      <li>O</li>
      <li>P</li>
      <li>Q</li>
      <li>R</li>
      <li>S</li>
      <li>T</li>
      <li>U</li>
      <li>V</li>
      <li>W</li>
      <li>X</li>
      <li>Y</li>
      <li>Z</li>
  </ul>
  </div>
</template>

<script>
  export default {
    name: 'singerKey',
    data() {
      return {
      }
    }
  }
</script>

<style scoped>
div{
    padding-top:5px;
}
 ul{
    list-style: none;
    padding-left: 0;
    
}
li{
    margin-left: 0;
}
ul li:first-child{
    background-color: red;
    color:white;
    margin-left:40px;
}
li,.circle li:first-child{
    display: inline-block;
    width: 50px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    margin-right: 15px;
    border-radius: 20px 20px 20px 20px;
    cursor:pointer;
}
li:hover{
    color:red;
}
.circle li{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    text-align: center;
    line-height: 30px;
    margin-right: 10px;
}
</style>