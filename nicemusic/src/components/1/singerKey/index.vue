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
      <!-- <dd>全部</dd>
      <dd>内地</dd>
      <dd>欧美</dd>
      <dd>港澳</dd>
      <dd>韩国</dd>
      <dd>其他</dd> -->
      <dd v-on:click='colorChangetwo(index)' :class='currentIndextwo==index?"active":""' :key='item.id' v-for='(item,index) in listtwo'>{{item.title}}</dd>
  </dl>
  <ul class="circle">
      <!-- <li>热门</li>
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
      <li>Z</li> -->
      <li v-on:click='colorChangethree(index)' :class='currentIndexthree==index?"active":""' :key='item.id' v-for='(item,index) in listthree'>{{item.title}}</li>
  </ul>
  </div>
</template>

<script>
  export default {
    name: 'singerKey',
    data() {
      return {
          currentIndex:0,
          currentIndextwo:0,
          currentIndexthree:0,
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
                }],
            listtwo: [{
                    id: 1,
                    title: '全部'
                }, {
                    id: 2,
                    title: '内地'
                }, {
                    id: 3,
                    title: '欧美'
                },{
                    id:4,
                    title:'港澳'
                },{
                    id:5,
                    title:'韩国'
                },{
                    id:6,
                    title:'其他'
                }],
                listthree: [{
                    id: 1,
                    title: '全部'
                }, {
                    id: 2,
                    title: 'A'
                }, {
                    id: 3,
                    title: 'B'
                },{
                    id:4,
                    title:'C'
                },{
                    id:5,
                    title:'D'
                },{
                    id:6,
                    title:'E'
                }, {
                    id: 7,
                    title: 'F'
                }, {
                    id: 8,
                    title: 'G'
                },{
                    id:9,
                    title:'H'
                },{
                    id:10,
                    title:'I'
                },{
                    id:11,
                    title:'J'
                },{
                    id:12,
                    title:'k'
                },{
                    id:13,
                    title:'L'
                },{
                    id:14,
                    title:'M'
                },{
                    id:15,
                    title:'N'
                },{
                    id:16,
                    title:'O'
                },{
                    id:17,
                    title:'P'
                },{
                    id:18,
                    title:'Q'
                },{
                    id:19,
                    title:'R'
                },{
                    id:20,
                    title:'S'
                },{
                    id:21,
                    title:'T'
                },{
                    id:22,
                    title:'U'
                },{
                    id:23,
                    title:"V"
                },{
                    id:24,
                    title:'W'
                },{
                    id:25,
                    title:'X'
                },{
                    id:26,
                    title:"Y"
                },{
                    id:27,
                    title:'Z'
                }]
      }
    },
    methods:{
        colorChange:function(index){
            this.currentIndex = index;
        },
        colorChangetwo:function(index){
            this.currentIndextwo = index;
        },
        colorChangethree:function(index){
            this.currentIndexthree = index;
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
    cursor:pointer;
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