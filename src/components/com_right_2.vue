<template>
    <div class="grid_right_2">
        <div class="grid_right_title2">
            <MyChart :options="option" />
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
import * as echarts from 'echarts';
import MyChart from './MyChart.vue';
export default {
    name: 'Com_right_2',
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
                            normal: {
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
                            }


                        },
                    }
                ]
            }

        }
    }
}


</script>