<template>
    <div class="grid_middle_1">
        <h3 class="grid_middle_title">
            <slot>默认内容</slot>
        </h3>
        <MyChart :options="option" />
    </div>
</template>

<style scoped>
.grid_middle_1 {
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
                legend: {
                    data: ['销售额']
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
                    data: ['周一', '周二', '周三', '周四'],

                },
                yAxis: {
                    type: 'value',
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    }
                },
                series: [
                    {
                        name: '电流',
                        type: 'line',
                        smooth: true,
                        data: [56, 12, 71, 63]
                    },
                    {
                        name: '电压',
                        type: 'line',
                        smooth: true,
                        data: [40, 30, 60, 80]
                    }
                ]
            }
        }
    }
}

</script>