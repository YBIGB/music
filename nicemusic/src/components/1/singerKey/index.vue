<template>
<div>
    <ol>
      <!-- <li>全部</li>
      <li>男歌手</li>
      <li>女歌手</li>
      <li>组合</li> -->
      <li v-on:click='colorChange(index)' :class='currentIndex==index?"active":""' :key='item.id' v-for='(item,index) in listone'>{{item.title}}</li>
  </ol>
  <dl>
      <dd>全部</dd>
      <dd>内地</dd>
      <dd>欧美</dd>
      <dd>港澳</dd>
      <dd>韩国</dd>
      <dd>其他</dd>
  </dl>
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
          currentIndex:0,
          listone: [{
                    id: 1,
                    title: '全部'
                }, {
                    id: 2,
                    title: '男歌手'
                }, {
                    id: 3,
                    title: '女歌手'
                },{
                    id:4,
                    title:'组合'
                }]
      }
    },
    methods:{
        colorChange:function(index){
            this.currentIndex = index;
        }
    }
  }
</script>

<style scoped>
.active{
    background-color: red;
    color:white;
}
div{
    padding-top:5px;
}
 ul,ol,dl{
    list-style: none;
    padding-left: 0;
    
}
li{
    margin-left: 0;
}
ul li:first-child,ol li:first-child{
    /* background-color: red;
    color:white; */
    margin-left:40px;
}
dd{
    display: inline-block;
    width: 50px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    margin-right: -30px;
    border-radius: 20px 20px 20px 20px;
}
dd:first-child{
   /* background-color: red;
    color:white;  */
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