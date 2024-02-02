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
    beforeUnmount() {
        if (this.chartInstance) {
            // 在组件卸载前，销毁图表实例释放资源
            this.chartInstance.dispose();
        }
    },
    methods: {
        initChart() {
            if(!this.chartInstance){
                this.chartInstance = echarts.init(this.$refs.chart);
            }
            
            this.chartInstance.setOption(this.options);
        },
        updateMyChart() {
            this.initChart();
        },
        disposeChart() {
            if (this.chartInstance) {
                this.chartInstance.dispose();
                this.chartInstance = null; 
            }
        },
    },
    data() {
        return {
            chartInstance: null,
        };
    }

};
</script>
  
<style></style>
  