<template>
    <div class="grid grid_right_1">
        <table>
            <tr v-for="(row, index) in tableData" :key="index">
                <td class="table_type tiny_type">{{ tableData.pMax.title }}</td>
                <td class="table_type tiny_data">
                    <span>{{ tableData.pMax.value }}</span>&nbsp&nbsp<span class="unit-style"> {{ tableData.pMax.unit
                    }}</span>
                </td>

            </tr>
        </table>
    </div>
</template>

<style></style>

<script>
import * as lodash from 'lodash'
export default {
    data() {
        return {
            // 表格数据
            tableData: {
                pMax: {
                    title: '最大有功功率Pmax: ',
                    value: '0',
                    unit: ' kW'
                }
            },
            interval: {
                value: '1000'
            }
        };
    },
    name: 'Com_right_1_5',
    methods: {
        updateP: function () {
            var nowP = Number(lodash.random(0, 10,true).toFixed(2));
            if (nowP >= this.tableData.pMax.value) {
                this.tableData.pMax.value = nowP;
            }
        }
    },
    mounted() {
       setInterval(() => {
        this.updateP();
       } , this.interval.value)
    },
}

</script>