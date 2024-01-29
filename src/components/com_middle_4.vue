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
    name: 'Com_middle_4',
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
                        data: [5.31, 10.07, 18.52, 7.53, 12.38, 13.05, 6.80, 15.05, 19.43, 9.33, 5.70, 11.08],
                        yAxisIndex: 0,
                        symbol: 'none'
                    },
                    {
                        name: '电压',
                        type: 'line',
                        smooth: true,
                        data: [233.97, 208.13, 208.08, 219.89, 217.93, 249.28, 245.26, 227.38, 205.09, 227.54, 206.45, 209.34],
                        yAxisIndex: 1,
                        symbol: 'none'
                    }
                ]
            }
        }
    }
}

</script>