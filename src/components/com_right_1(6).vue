<template>
    <div class="grid grid_right_1">
        <table>
            <tr v-for="(row, index) in tableData" :key="index">
                <td class="table_type tiny_type">{{ tableData.sMax.title }}</td>
                <td class="table_type tiny_data">
                    <span>{{ tableData.sMax.value }}</span>&nbsp&nbsp<span class="unit-style"> {{ tableData.sMax.unit }}</span>
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
            interval:{
                value:'1000'
            },
            // 表格数据
            tableData: {
                sMax: {
                    title: '最大视在功率Smax:  ',
                    value: '0',
                    unit: ' kW'
                }
            }
        };
    },
    name: 'Com_right_1_6',
    methods: {
        updateS: function () {
            var nowS = Number(lodash.random(0, 10,true).toFixed(2));
            if (nowS >= this.tableData.sMax.value) {
                this.tableData.sMax.value = nowS;
            }
        }
    },
    mounted() {
       setInterval(() => {
        this.updateS();
       } , this.interval.value)
    },
}

</script>