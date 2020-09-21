<template>
    <div>
        <div class="search">
            <input type="text" placeholder="搜索音乐/MV/歌单/歌手">
        </div>
        <div class="types">
            <span>搜索结果</span>
            <ul>
                <li @click="go1">单曲</li>
                <li @click="go2">歌手</li>
                <li @click="go3">专辑</li>
                <li @click="go4">视频</li>
                <li @click="go5">歌单</li>
            </ul>
            <div class="line">
            </div>
            <button>▷播放全部</button>
        </div>
        <table  cellspacing="0" cellpadding="0">
            <thead>
                 <tr  style="height: 50px" class="even">
                    <th style="width: 110px">序号</th>
                    <th style="width: 450px;text-align: left;text-indent: 20px">歌曲</th>
                    <th style="width: 300px;text-align: left;text-indent: 20px">歌手</th>
                    <th style="width: 180px;text-align: left;text-indent: 20px">专辑</th>
                    <th>时长</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in personalizeds" :key="item">
                    <td>{{ item.id }}</td>
                    <td><img :src="item.picUrl" alt=""><span>{{ item.name }}</span></td>
                    <td>{{ item.copywriter }}</td>
                    <td>{{ item.album }}</td>
                    <td>{{ item.time}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
    *{
        padding: 0;
        margin: 0;
    }

    .search{
        width: 100%;
        height: 250px;
        background: url("./img/singer.jpg") no-repeat center;
    }

    input{
        margin-top: 110px;
        margin-left: 400px;
        width: 700px;
        height: 50px;
        border: 1px solid gray;
        outline: none;
        border-radius: 2px;
    }

    .types{
        width: 1350px;
        height: 30px;
        margin-top: 50px;
        margin-left: 10px;
        position: relative;
    }

    .types span{
        font-size: 24px;
        font-weight: bolder;
        margin-left: 100px;
    }

    .types ul{
        position: absolute;
        top: 0px;
        left: 250px;
        margin-top: 15px;
        width: 1100px;
        height: 30px;
        line-height: 10px;
    }

    .types li{
        font-size: 14px;
        width: 60px;
        float: left;
        list-style: none;
        cursor: pointer;
    }

    .line{
        width: 30px;
        height: 5px;
        background-color: wheat;
        position: absolute;
        left: 265px;
    }

    .types button{
        width: 100px;
        height: 30px;
        cursor: pointer;
        background-color: red;
        color: white;
        display: block;
        float: right;
        border-radius: 10px 10px;
        margin-top: 50px;
        margin-right: 50px;
        border: none;
        outline: none;
    }

    table{
        width: 1150px;
        height: 1510px;
        margin-top: 70px;
        margin-left: 120px;
    }

    table thead tr{
        color: gray;
        font-size: 14px;
    }

    table tbody tr td:first-of-type{
        text-align: center;
    }

    table tbody tr{
        height: 50px;
        font-size: 14px;
        border-bottom: 1px solid #000;
        cursor: pointer;
    }

    .even{
        background-color: #F0F0F0;
    }

    tbody tr:hover{
        background: #e8e9ed
    }

    tr img{
        width: 40px;
        height: 40px;
    }

    tr td:nth-of-type(2){
        text-indent: 30px;
    }
</style>

<script>
export default {
    name: "playList",
    data:function(){
        return{
            personalizeds: [],
            limit:30
        }
    },
    methods: {
        async getPersonalized() {
      try {
        let res = await this.$api.getPersonalized(this.limit)
        // console.log(res)
        this.personalizeds = res.result
      } catch (error) {
        console.log(error)
      }
    }
        ,
        go1: function(){
            document.querySelector(".line").style.left="265px"
        },
        go2: function(){
            document.querySelector(".line").style.left="325px"
        },
        go3: function(){
            document.querySelector(".line").style.left="385px"
        },
        go4: function(){
            document.querySelector(".line").style.left="445px"
        },
        go5: function(){
            document.querySelector(".line").style.left="505px"
        },
        chartColor:function(){
            var list = document.querySelectorAll("tr");
            console.log(list);
            for(var i = 0;i<list.length;i++){
                list[i].index = i;
                if((list[i].index) % 2 == 0 ){
                    list[i].className = "even";
                }
            }
        },
    },

    updated(){
        this.chartColor();
    },
    mounted(){ 
        this.getPersonalized();
    }
}
</script>