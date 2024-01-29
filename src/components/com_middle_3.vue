<template>
    <div class="grid_middle_3">
        <h3 class="grid_middle_title">
            <slot>默认内容</slot>
        </h3>
        <MyChart :options="option" />
    </div>
</template>

<style scoped>
.grid_middle_3 {
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("../assets/image/左下.png");
    margin: 10px;
    border-radius: 10px;
}

.grid_middle_title {
    margin-left: 30px;
    color: white;
}

.chart-container {
    color: white;
    width: 450px;
    height: 200px;
}
</style>

<script>
import MyChart from './MyChart.vue';
export default {
    name: 'Com_middle_3',
    components: {
        MyChart
    },
    data() {
        return {
            option: {
                tooltip: {
                    trigger: 'axis'
                },
                grid: {
                    left: '8%',
                    right: '8%',
                    bottom: '25%',
                    containLabel: true
                },
                legend: {
                    data: ['电流', '电压'],
                    textStyle: {
                        color: 'white' // 绿色
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['前日', '昨日', '今日'],

                },
                yAxis: [{
                    type: 'value',
                    name: '电流(A)',
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        formatter: '{value} A'
                    }
                }, {
                    type: 'value',
                    name: '电压(V)',
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        formatter: '{value} V'
                    },
                    position: 'right'
                }],
                series: [
                    {
                        name: '电流',
                        type: 'line',
                        smooth: true,
                        data: [8.89, 8.76, 6.51],
                        yAxisIndex: 0
                    },
                    {
                        name: '电压',
                        type: 'line',
                        smooth: true,
                        data: [203.26, 212.91, 200.68],
                        yAxisIndex: 1
                    }
                ]
            }
        }
    }
}

</script>