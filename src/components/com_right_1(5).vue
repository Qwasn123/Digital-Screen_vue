<template>
    <div class="grid grid_right_1">
        <table>
            <tr v-for="(row, index) in tableData" :key="index">
                <td class="table_type tiny_type">{{ tableData.pNum.title }}</td>
                <td class="table_type tiny_data">
                    <span>{{ tableData.pNum.value }}</span>&nbsp&nbsp<span class="unit-style"> {{ tableData.pNum.unit
                    }}</span>
                </td>

            </tr>
        </table>
    </div>
</template>

<style></style>

<script>
import * as lodash from 'lodash'
import { fetchData } from '@/utils/http'
export default {
    data() {
        return {
            // 表格数据
            tableData: {
                pNum: {
                    title: '功率因数：',
                    value: '0',
                    unit: ''
                },
            },
            interval: {
                value: '1000'
            }
        };
    },
    name: 'Com_right_1_5',
    methods: {
        updateP: function () {
            fetchData('/index/GetData/resource_realtime_data/cid/gfbwx_pmax').then((data) => {
                // console.log(data);
                this.tableData.pMax.value = data.item.value;
            })
        }
    },
    created() {
        fetchData('/index/GetData/resource_realtime_data/cid/gfbwx_pmax').then((data) => {
            // console.log(data);
            this.tableData.pMax.value = data.item.value;
        })
    },
    mounted() {
        setInterval(() => {
            fetchData('/index/GetData/resource_realtime_data/cid/gfbwx_power_factor').then((data) => {
                this.tableData.pNum.value = data.item.value
            })
            
        }, this.interval.value)
    },
}

</script>