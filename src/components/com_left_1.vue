<template>
    <div class="grid_left_1">
        <div class="grid_left_data">
            <table>
                <tr v-for="(row, index) in tableData" :key="index">
                    <td>{{ row.column1 }}</td>
                    <td>{{ row.column2 }}</td>
                    
                </tr>
            </table>
        </div>
        <h2 class="grid_left_title">
            <slot>默认内容</slot>
        </h2>
        <MyChart :options="option" />
    </div>
</template>

<style scoped>
table {
    position: relative;
    top: 10px;
    margin-top: 12px;
    margin-left: 30px;
    width: 80%;
    border-collapse: collapse;
}

td {
    font-weight: 700;
    color: white;
    padding: 8px;
    text-align: center;
}

.grid_left_1 {
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("../assets/image/中上.png");
    margin: 10px;
    border-radius: 10px;
}

.grid_left_title {
    margin-top: 15px;
    margin-left: 30px;
    color: white;
}
.grid_left_data {
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("../assets/image/右下.png");
    margin: 10px;
    border-radius: 10px;
    margin-top: 10px;
    height: 170px;
    color: white;
}
.chart-container {
    color: white;
    width: 900px;
    height: 230px;
}
</style>

<script>
import MyChart from './MyChart.vue';
export default {
    name: 'Com_left_1',
    methods: {},
    components: {
        MyChart
    },
    data() {
        return {
            option: {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: {
                    data: ['发电量(kWh)', '用电量(kWh)'],
                    textStyle: {
                        color: 'white' // 绿色
                    }
                },
                xAxis: {
                    type: 'category',
                    data: ['5日前', '4日前', '3日前', '前日', '昨日', '今日'],
                    axisLabel: {
                        color: 'white'
                    }
                },
                yAxis: {
                    type: 'value',

                },
                series: [
                    {
                        name: '发电量(kWh)',
                        type: 'bar',
                        data: [27096, 24613, 25416, 21257, 43316, 24782]
                    },
                    {
                        name: '用电量(kWh)',
                        type: 'bar',
                        data: [26902, 42148, 26360, 29784, 42085, 17457]
                    }
                ]
            },
            tableData: [
                { column1: '今日发电量(kWh)：', column2: '24,782' },
                { column1: '今日用电量(kWh)：', column2: '17,457' },
                { column1: '昨日发电量(kWh)：', column2: '43,316' },
                { column1: '昨日用电量(kWh)：', column2: '42,085' },
            ],
        };
    }
}

</script>