<template>
    <!-- 作品 -->
            <div>
                <el-table
                :data="tableData"
                stripe
                style="width: 98%; marginBottom:50px; paddingLeft:20px"
                class="tableList">
                <el-table-column
                prop="num"
                label="序号"
                width="140"
                class="number">
                </el-table-column>
                <el-table-column
                prop="name"
                label="歌曲"
                width="480">
                </el-table-column>
                <el-table-column
                prop="singerName"
                label="歌手"
                width="280">
                </el-table-column>
                <el-table-column
                prop="address"
                label="专辑">
                </el-table-column>
                <el-table-column
                prop="time"
                label="时长"
                width="100">
                </el-table-column>
                </el-table>
            </div>
</template>

<script>
export default {
    name:"songs",
    data(){
        return{
            // 歌单
        tableData: [{
          num: '01',
          name: '像我这样的人',
          singerName:'毛不易',
          address: '平凡的一天',
          time:'03:27'
        }, {
          num: '02',
          name: '消愁',
          singerName:'毛不易',
          address: '平凡的一天',
          time:'03:27'
        }, {
          num: '03',
          name: '借',
          singerName:'毛不易',
          address: '平凡的一天',
          time:'03:27'
        }, {
          num: '04',
          name: '不染',
          singerName:'毛不易',
          address: '香蜜沉沉烬如霜 电视原声带',
          time:'03:27'
        },{
          num: '05',
          name: '呓语',
          singerName:'毛不易',
          address: '小王',
          time:'03:27'
        },{
          num: '06',
          name: '一荤一素',
          singerName:'毛不易',
          address: '平凡的一天',
          time:'03:27'
        },{
          num: '07',
          name: '给你给我',
          singerName:'毛不易',
          address: '平凡的一天',
          time:'03:27'
        },{
          num: '08',
          name: '无问',
          singerName:'毛不易',
          address: '无问',
          time:'03:27'
        },{
          num: '09',
          name: '平凡的一天',
          singerName:'毛不易',
          address: '平凡的一天',
          time:'03:27'
        },{
          num: '10',
          name: '盛夏',
          singerName:'毛不易',
          address: '平凡的一天',
          time:'03:27'
        },],
        }
    }
}
</script>