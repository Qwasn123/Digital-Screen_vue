<template>
    <div class="grid grid_middle_1">
        <h3 class="grid_middle_title">
            <slot>默认内容</slot>
        </h3>
        <MyChart :options="option" />
    </div>
</template>

<style>

.grid_middle_title {
    margin-left: 30px;
    color: white;
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
                    data: ['1', '2', '3','4','5','6','7','8','9','10','11','12'],

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
                        data: [12.95, 1.36, 14.93, 2.40, 16.50, 10.25, 7.20, 14.57, 17.99, 3.09, 5.57, 10.59],
                        yAxisIndex: 0,
                        symbol: 'none'
                    },
                    {
                        name: '电压',
                        type: 'line',
                        smooth: true,
                        data: [223.33, 214.48, 237.89, 207.24, 230.40, 201.97, 222.10, 203.49, 242.50, 240.94, 213.32, 231.82],
                        yAxisIndex: 1,
                        symbol: 'none'
                    }
                ]
            }
        }
    }
}

</script>