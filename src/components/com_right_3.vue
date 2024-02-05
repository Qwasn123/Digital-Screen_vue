<template>
    <div class="grid grid_right_1">
        <table class="table_right_1">
            <tr>
                <td class="table_type tiny_type">{{ tableData.todayMaxP.title }}</td>
                <td class="table_type tiny_data">
                    <span>{{ tableData.todayMaxP.value }}</span>&nbsp&nbsp<span class="unit-style"> {{
                        tableData.todayMaxP.unit }}</span>
                </td>
            </tr>
            <tr>
                <td class="table_type tiny_type">{{ tableData.pMax.title }}</td>
                <td class="table_type tiny_data">
                    <span>{{ tableData.pMax.value }}</span>&nbsp&nbsp<span class="unit-style"> {{ tableData.pMax.unit
                    }}</span>
                </td>
                
            </tr>
            <tr>
                <td class="table_type tiny_type">{{ tableData.sMax.title }}</td>
                <td class="table_type tiny_data">
                    <span>{{ tableData.sMax.value }}</span>&nbsp&nbsp<span class="unit-style"> {{ tableData.sMax.unit
                    }}</span>
                </td>
            </tr>
        </table>
    </div>
</template>

<style scoped>
table {
    width: 80%;
}
</style>

<script>
import { fetchData } from '@/utils/http'
import * as lodash from 'lodash'
export default {
    methods: {
        updatePNum: function () {
            this.tableData.pNum.value = Number(lodash.random(0.5, 1, true).toFixed(2));
        },
        
        updateS: function () {
            fetchData('/index/GetData/resource_realtime_data/cid/gfbwx_smax').then((data) => {
                // console.log(data.item.value);
                this.tableData.sMax.value = data.item.value;
            })
            
        }
    },
    created() {
        //efficiency
        fetchData('/index/GetData/resource_realtime_data/cid/gfbwx_pn').then((data) => {
            // console.log(data.item.value);
            this.tableData.efficiency.value = data.item.value;
        })
        //pNum
        fetchData('/index/GetData/resource_realtime_data/cid/gfbwx_power_factor').then((data) => {
            // console.log(data.item.value);
            this.tableData.pNum.value = data.item.value;
        })
        //todayMaxP
        fetchData('/index/GetData/resource_realtime_data/cid/gfbwx_today_max_active_power').then((data) => {
            // console.log(data.item.value);
            this.tableData.todayMaxP.value = data.item.value;
        })
    },
    mounted() {
        setInterval(() => {
            
            fetchData('/index/GetData/resource_realtime_data/cid/gfbwx_today_max_active_power').then((data) => {
                this.tableData.todayMaxP.value = data.item.value
            })
            this.updateP();
            this.updateS();
        }, this.interval.value)
        
    },
    data() {
        return {
            interval: {
                value: '2000'
            },
            // 表格数据
            tableData: {
                todayMaxP: {
                    title: '当日峰值有功功率：',
                    value: '0',
                    unit: 'kW'
                },
                pMax: {
                    title: '最大有功功率Pmax: ',
                    value: '0',
                    unit: ' kW'
                },
                sMax: {
                    title: '最大视在功率Smax:  ',
                    value: '0',
                    unit: ' kW'
                }
            }
        };
    },
    name: 'Com_right_3',

}
</script>