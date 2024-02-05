<template>
    <div class="grid grid_right_1">
        <table>
            <tr v-for="(row, index) in tableData" :key="index">
                <td class="table_type tiny_type">{{ tableData.efficiency.title }}</td>
                <td class="table_type tiny_data">
                    <span>{{ tableData.efficiency.value }}</span>&nbsp&nbsp<span class="unit-style"> {{
                        tableData.efficiency.unit }}</span>
                </td>
            </tr>
        </table>
    </div>
</template>

<style></style>

<script>
import * as lodash from 'lodash'
import { fetchData } from '@/utils/http';
export default {
    data() {
        return {
            interval: {
                value: '1000'
            },
            // 表格数据
            tableData: {
                efficiency: {
                    title: '效率：',
                    value: '',
                    unit: '%'
                }
                
            }
        };
    },
    name: 'Com_right_1_6',
    methods: {
        updateEfficiency: function () {
            this.tableData.efficiency.value = Number(lodash.random(80, 100, true).toFixed(2));
        },
    },
    mounted() {
        setInterval(() => {
            fetchData('/index/GetData/resource_realtime_data/cid/gfbwx_pn').then((data) => {
                this.tableData.efficiency.value = data.item.value
            })
        }, this.interval.value)
    },
}

</script>