<template>
    <div class="grid grid_left_1">
        <div class="grid grid_right_1">
            <table class="table_left_2">
                <tr>
                    <td class="table_type">{{ tableData.todayGenerate.title }}</td>
                    <td>
                        <span>{{ tableData.todayGenerate.value }}</span>&nbsp&nbsp<span class="unit-style"> {{ tableData.todayGenerate.unit }}</span>
                    </td>
                    <td class="table_type">{{ tableData.yesterdayGenerate.title }}</td>
                    <td>
                        <span>{{ tableData.yesterdayGenerate.value }}</span>&nbsp&nbsp<span class="unit-style"> {{ tableData.yesterdayGenerate.unit }}</span>
                    </td>
                </tr>
            </table>
        </div>
        <h2 class="left_title">
            <slot>默认内容</slot>
        </h2>
        <MyChart class="left_2" :options="option" />
    </div>
</template>

<style>
.chart-container {}
</style>

<script>
import * as echarts from 'echarts';
import MyChart from './MyChart.vue';
export default {
    name: 'Com_left_2',
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
                xAxis: {
                    type: 'category',
                    data: ['5日前', '4日前', '3日前', '前日', '昨日', '今日'],
                    axisLabel: {
                        color: 'white'
                    }
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} kWh'
                    },
                    splitLine: {
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.2)'
                        },

                    },
                },
                series: [{
                    type: 'bar',
                    data: [27096, 24613, 25416, 21257, 43316, 24782],
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {
                                        offset: 0,
                                        color: 'rgba(129, 251, 88, 0.8)',
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(129, 251, 88, 0.2)'
                                    }
                                ]
                            )
                        }


                    },
                }]
            },
            tableData:{
                todayGenerate: {
                    title: '今日发电量：',
                    value: '43316',
                    unit: 'kWh',
                },
                yesterdayGenerate: {
                    title: '昨日发电量：',
                    value: '24782',
                    unit: 'kWh',
                },
            }
        };
    }
}

</script>