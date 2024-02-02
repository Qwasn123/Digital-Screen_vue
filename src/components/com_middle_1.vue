<template>
    <div class="grid grid_middle_1">
        <h3 class="grid_middle_title">
            <slot>默认内容</slot>
        </h3>
        <MyChart ref="chart3" :options="option" />
    </div>
</template>

<style>
.grid_middle_title {
    margin-left: 30px;
    color: white;
}
</style>

<script>
import { useGenerateStore } from '../stores/counter'
import * as echarts from 'echarts';
import * as lodash from 'lodash'
import MyChart from './MyChart.vue';
export default {
    name: 'Com_middle_1',
    components: {
        MyChart
    },
    methods: {
        setCharts: function () {
            var data1A = lodash.random(3, 15);
            var data2A = lodash.random(3, 15);
            var data3A = lodash.random(3, 15);
            var data4A = lodash.random(3, 15);
            var data5A = lodash.random(3, 15);
            var data6A = lodash.random(3, 15);
            var data7A = lodash.random(3, 15);
            var data8A = lodash.random(3, 15);
            var data9A = lodash.random(3, 15);
            var data10A = lodash.random(3, 15);
            var data11A = lodash.random(3, 15);
            var data12A = lodash.random(3, 15);
            const gen_store = useGenerateStore();
            gen_store.getRemoteData();
            var data1V = lodash.random(170, 250);
            var data2V = lodash.random(170, 250);
            var data3V = lodash.random(170, 250);
            var data4V = lodash.random(170, 250);
            var data5V = lodash.random(170, 250);
            var data6V = lodash.random(170, 250);
            var data7V = lodash.random(170, 250);
            var data8V = lodash.random(170, 250);
            var data9V = lodash.random(170, 250);
            var data10V = lodash.random(170, 250);
            var data11V = lodash.random(170, 250);
            var data12V = lodash.random(170, 250);
            this.option.series[0].data = [data1A, data2A, data3A, data4A, data5A, data6A, data7A, data8A, data9A, data10A, data11A, data12A];
            this.option.series[1].data = [data1V, data2V, data3V, data4V, data5V, data6V, data7V, data8V, data9V, data10V, data11V, data12V];
        },
        updateData: function () {

            // this.$refs.chart1.disposeChart();
            this.setCharts();
            this.$refs.chart3.updateMyChart();

        }
    },

    mounted() {
        setInterval(() => {
            this.updateData();
        }, this.interval.value);
    },
    data() {
        return {
            interval:{
                value:'10000'
            },
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
                    data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],

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