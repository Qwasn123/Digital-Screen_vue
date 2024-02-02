<template>
    <div class="grid grid_right_1">
        <table>
            <tr>
                <td class="table_type tiny_type">{{ tableData.insideTemp.title }}</td>
                <td class="table_type tiny_temp">{{ tableData.insideTemp.value }}&nbsp{{ tableData.insideTemp.unit }}</td>
            </tr>
        </table>
    </div>
</template>

<style scoped>
table {
    width: 100%;
}
</style>

<script>
import * as lodash from 'lodash'
export default {
    computed:{
    },
    methods: {
        updateTemp: function () {
            this.tableData.insideTemp.value = Number(lodash.random(30, 80, true).toFixed(1));
        }
    },
    mounted() {
        setInterval(() => {
            this.updateTemp();
        }, this.interval.value)
    },
    data() {
        return {
            interval: {
                value: '5000'
            },
            // 表格数据
            tableData: {
                insideTemp: {
                    title: '内部温度: ',
                    value: '47.1',
                    unit: ' °C'
                }
            }



        };
    },
    name: 'Com_right_1_2',

}

</script>