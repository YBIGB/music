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
            <div class="block">
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
                <tr v-for="item in infor" :key="item">
                    <td>{{ item.id }}</td>
                    <td>{{ item.sname }}</td>
                    <td>{{ item.singer }}</td>
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

    .block{
        width: 30px;
        height: 5px;
        background-color: wheat;
        position: absolute;
        left: 250px;
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
</style>

<script>
export default {
    name: "playList",
    data:function(){
        return{
            infor:[
                {id:'01',sname:'666',singer:'BeastlySlime / KREAM / Hood 6a6y',album:666,time:'03:39'},
                {id:'02',sname:'666',singer:'夏他谱',album:'夏他谱',time:'01:50'},
                {id:'03',sname:'666',singer:'Psy.P / Higher Brothers',album:'PSYLIFE.25',time:'01:55'},
                {id:'04',sname:'666',singer:'UNΛVERΛGE GΛNG',album:'UNΛVERΛGE GΛNG',time:'01:55'},
                {id:'05',sname:'666',singer:'陈泽希 / TONY REY 凯睿',album:'666',time:'02:52'},
                {id:'06',sname:'666',singer:'Slaughter To Prevail',album:'Misery Sermon',time:'04:09'},
                {id:'07',sname:'666',singer:'Sugar Candy Mountain',album:'666',time:'04:15'},
                {id:'08',sname:'666',singer:'YG / Youngboy Never Broke Again',album:'DO IT 4 BOMPTON',time:'04:39'},
                {id:'09',sname:'666',singer:'叶藏',album:'666',time:'02:42'},
                {id:'10',sname:'666',singer:'孔昊龑Howie X',album:'666',time:'02:51'},
                {id:'11',sname:'666',singer:'澤野弘之',album:'「魔王」オリジナル...',time:'02:48'},
                {id:'12',sname:'666',singer:'Aisin Gioro_康熙',album:'草稿2018下- 冻花',time:'03:33'},
                {id:'13',sname:'666',singer:'梁汉文',album:'梁汉文集',time:'03:19'},
                {id:'14',sname:'666',singer:'OGM909',album:'Poison Terror Threat EP',time:'04:31'},
                {id:'15',sname:'666',singer:'KillBoy',album:'666',time:'02:38'},
                {id:'16',sname:'666',singer:'AnVil',album:'Monument of Metal...',time:'04:43'},
                {id:'17',sname:'666',singer:'666',album:'Paradox: The Album',time:'05:34'},
                {id:'18',sname:'666',singer:'小波',album:'666',time:'03:46'},
                {id:'19',sname:'666',singer:'YG / Youngboy Never Broke Again',album:'STAY DANGEROUS',time:'04:39'},
                {id:'20',sname:'666',singer:'MUCC',album:'6',time:'01:27'},
                {id:'21',sname:'666',singer:'赵猛 / 曹瑞坤 / Elvis',album:'666',time:'03:55'},
                {id:'22',sname:'666',singer:'Ar-SiDE / Ураган Закат',album:'666',time:'03:51'},
                {id:'23',sname:'666',singer:'Doblekara',album:'666',time:'02:20'},
                {id:'24',sname:'666',singer:'Tokez',album:'666',time:'03:50'},
                {id:'25',sname:'666',singer:'FLOWER TEA / Jyh / HPC. / BigBron',album:'666',time:'03:26'},
                {id:'26',sname:'666',singer:'South-k / Lil clou',album:'666',time:'02:22'},
                {id:'27',sname:'666',singer:'dvour',album:'666',time:'02:48'},
                {id:'28',sname:'666',singer:'НАZИК',album:'666',time:'02:37'},
                {id:'29',sname:'666',singer:'Yzomandias / Youv Dee',album:'666',time:'03:18'},
            ]
        }
    },
    methods: {
        go1: function(){
            document.querySelector(".block").style.left="250px"
        },
        go2: function(){
            document.querySelector(".block").style.left="310px"
        },
        go3: function(){
            document.querySelector(".block").style.left="370px"
        },
        go4: function(){
            document.querySelector(".block").style.left="430px"
        },
        go5: function(){
            document.querySelector(".block").style.left="490px"
        },
        chartColor:function(){
            var list = document.querySelectorAll("tr");
            for(var i = 0;i<list.length;i++){
                list[i].index = i;
                if((list[i].index) % 2 == 0 ){
                    list[i].className = "even";
                }
            }
        },
    },
     mounted(){
            this.chartColor();
        }
}
</script>