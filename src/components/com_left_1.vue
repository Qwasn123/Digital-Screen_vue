<template>
    <div class="grid grid_left_1">
        <div class="grid grid_right_1 left_1">
            <table class="table_left_1">
                <tr>
                    <td class="table_type">{{ tableData.todayGenerate.title }}</td>
                    <td>
                        <span>{{ tableData.todayGenerate.value }}</span>&nbsp&nbsp<span class="unit-style"> {{
                            tableData.todayGenerate.unit }}</span>
                    </td>
                    <td class="table_type">{{ tableData.yesterdayGenerate.title }}</td>
                    <td>
                        <span>{{ tableData.yesterdayGenerate.value }}</span>&nbsp&nbsp<span class="unit-style"> {{
                            tableData.yesterdayGenerate.unit }}</span>
                    </td>
                    
                </tr>
                <tr>
                    <td class="table_type">{{ tableData.officeUse.title }}</td>

                    <td>
                        <span>{{ tableData.officeUse.value }}</span>&nbsp&nbsp<span class="unit-style"> {{
                            tableData.officeUse.unit }}</span>
                    </td>
                    <td class="table_type">{{ tableData.todayUse.title }}</td>

                    <td>
                        <span>{{ tableData.todayUse.value }}</span>&nbsp&nbsp<span class="unit-style"> {{
                            tableData.todayUse.unit }}</span>
                    </td>
                </tr>
            </table>
        </div>
        <h2 class="left_title">
            <slot>默认内容</slot>
        </h2>

        <MyChart ref="chart1" class="left_1" :options="option" />

    </div>
</template>

<style></style>

<script>
import { useGenerateStore } from '../stores/counter'
import * as lodash from 'lodash'
import * as echarts from 'echarts';
import MyChart from './MyChart.vue';
import { fetchData } from '@/utils/http';


export default {
    name: 'Com_left_1',
    methods: {
        initData: function () {
            this.setCharts();
        },
        // fetchNewData(url) {
        //     fetchData(url);
        // },

        setCharts: function () {
            var dayOneUse = lodash.random(10000, 50000);
            var dayTwoUse = lodash.random(10000, 50000);
            var dayThreeUse = lodash.random(10000, 50000);
            var dayFourUse = lodash.random(10000, 50000);
            var dayFiveUse = lodash.random(10000, 50000);
            var daySixUse = lodash.random(10000, 50000);
            const gen_store = useGenerateStore();
            gen_store.getRemoteData();
            var dayOneGenerate = gen_store.getDay1();
            var dayTwoGenerate = gen_store.getDay2();
            var dayThreeGenerate = gen_store.getDay3();
            var dayFourGenerate = gen_store.getDay4();
            var dayFiveGenerate = gen_store.getDay5();
            var daySixGenerate = gen_store.getDay6();
            this.option.series[0].data = [dayOneGenerate, dayTwoGenerate, dayThreeGenerate, dayFourGenerate, dayFiveGenerate, daySixGenerate];
            this.option.series[1].data = [dayOneUse, dayTwoUse, dayThreeUse, dayFourUse, dayFiveUse, daySixUse];
            //今日发电
            fetchData('/index/GetData/resource_realtime_data/cid/gfbwx_today_power_generation').then((data) => {
                // console.log(data);
                this.tableData.todayGenerate.value = data.item.value;
            })
            //营业厅用电
            fetchData('/index/GetData/resource_realtime_data/cid/gfyyt_fka').then((data) => {
                // console.log(data);
                this.tableData.officeUse.value = data.item.value;
            })
        },
        updateData() {
            this.setCharts();
            this.$refs.chart1.updateMyChart();
        },


    },
    created() {
        // this.fetchNewData(`index/GetData/resource_realtime_data/cid/gfbwx_pn`);
        this.initData();

        // fetchData('/index/GetData/resource_realtime_data/cid/gfbwx_pn').then((data)=>{
        //     console.log(data)
        // })
    },
    beforeMount() {

    },
    mounted() {
        setInterval(() => {
            this.updateData();
        }, this.interval.value);
    },
    beforeUnmount() {

    },
    components: {
        MyChart
    },
    data() {
        return {
            interval: {
                value: '5000'
            },
            option: {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: {
                    data: ['发电量(kWh)', '用电量(kWh)'],
                    textStyle: {
                        color: 'white' // 绿色
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
                    splitLine: {
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.2)'
                        },

                    },
                },
                series: [
                    {
                        name: '发电量(kWh)',
                        type: 'bar',
                        data: [27096, 24613, 25416, 21257, 43316, 24782],
                        itemStyle: {

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



                        },
                    },
                    {
                        name: '用电量(kWh)',
                        type: 'bar',
                        data: [26902, 42148, 26360, 29784, 42085, 17457],
                        itemStyle: {

                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {
                                        offset: 0,
                                        color: 'rgba(255, 165, 0, 0.8)',
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(255, 165, 0, 0.2)'
                                    }
                                ]
                            )



                        },
                    }

                ]
            },
            tableData: {
                yesterdayGenerate: {
                    title: '昨日发电量：',
                    value: '43316',
                    unit: 'kWh',
                },
                officeUse: {
                    title: '营业厅用电量：',
                    value: '42085',
                    unit: 'kWh',
                },
                todayGenerate: {
                    title: '今日发电量：',
                    value: '24782',
                    unit: 'kWh',
                },
                todayUse: {
                    title: '今日用电量：',
                    value: '17457',
                    unit: 'kWh',
                },
            },
        };
    }
}

</script>