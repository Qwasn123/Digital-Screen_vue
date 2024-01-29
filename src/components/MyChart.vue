<template>
    <div ref="chart" class="chart-container"></div>
</template>
  
<script>
import * as echarts from 'echarts';
export default {
    name: 'MyChart',
    props: {
        options: {
            type: Object,
            required: true
        }
    },
    mounted() {
        this.initChart();
    },
    methods: {
        initChart() {
            const chart = echarts.init(this.$refs.chart);
            chart.setOption(this.options);
        }
    }
};
</script>
  
<style>

</style>
  