<template>
    <div class="grid_right_2">
        <div class="grid_right_title2">
            <MyChart ref="chart4" :options="option" />
        </div>

    </div>
</template>

<style>
.grid_right_2 {
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("../assets/image/右下.png");
    margin: 10px;
    border-radius: 10px;
}

.grid_right_title2 {
    margin-top: 20px;
}
</style>

<script>
import { useGenerateStore } from '../stores/counter'
import * as lodash from 'lodash'
import * as echarts from 'echarts';
import MyChart from './MyChart.vue';
export default {
    name: 'Com_right_2',
    methods: {
        setCharts: function () {
            var efficientP = Number(lodash.random(3, 10, true).toFixed(2));
            var inputP = Number(lodash.random(3, 10, true).toFixed(2));
            this.option.series[0].data = [inputP, efficientP];
        },
        updateData: function () {
            this.setCharts();
            this.$refs.chart4.updateMyChart();
        }
    },
    components: {
        MyChart
    },
    beforeMount() {
        this.setCharts();
    },
    mounted() {
        setInterval(() => {
            this.updateData();
        }, this.interval.value);
    },
    data() {
        return {
            interval: {
                value: '2000'
            },
            option: {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                grid: {
                    left: '25%'
                },
                xAxis: {
                    type: 'value',
                    axisLabel: {
                        color: 'white'
                    },
                    splitLine: {
                        show: false
                    }
                },
                yAxis: {
                    type: 'category',
                    data: ['输入功率(kW)', '有功功率(kW)'],
                    axisLabel: {
                        color: 'white',

                    }
                },
                series: [
                    {
                        name: '示例数据',
                        type: 'bar',
                        data: [8.76, 7.65],
                        barWidth: '80%',
                        itemStyle: {
                            
                                color: new echarts.graphic.LinearGradient(
                                    1, 0, 0, 0,
                                    [
                                        {
                                            offset: 0,
                                            color: 'rgba(73, 191, 245, 0.8)',
                                        },
                                        {
                                            offset: 1,
                                            color: 'rgba(73, 191, 245, 0.2)'
                                        }
                                    ]
                                )
                            


                        },
                    }
                ]
            }

        }
    }
}


</script>