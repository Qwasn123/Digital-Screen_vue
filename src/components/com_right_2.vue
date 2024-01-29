<template>
    <div class="grid_right_2">
        <MyChart :options="option" />
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
                grid:{
                    left:'20%'
                },
                xAxis: {
                    type: 'value',
                    axisLabel:{
                        color:'white'
                    },
                    splitLine: {
                        show: false
                    }
                },
                yAxis: {
                    type: 'category',
                    data: ['输入功率', '有功功率'],
                    axisLabel:{
                        color:'white'
                    }
                },
                series: [
                    {
                        name: '示例数据',
                        type: 'bar',
                        data: [120, 200, 150, 80, 70],
                        barWidth: '80%',
                    }
                ]
            }

        }
    }
}


</script>