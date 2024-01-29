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
    name: 'Com_middle_1',
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
                        data: [11.26, 1.46, 12.24, 1.20, 8.49, 7.26, 1.48, 12.58, 7.35, 11.27, 13.65, 16.34],
                        yAxisIndex: 0,
                        symbol: 'none'
                    },
                    {
                        name: '电压',
                        type: 'line',
                        smooth: true,
                        data: [200.78, 228.99, 219.22, 213.10, 224.91, 216.40, 218.66, 208.57, 201.76, 206.26, 215.24, 228.78],
                        yAxisIndex: 1,
                        symbol: 'none'
                    }
                ]
            }
        }
    }
}

</script>