<template>
    <div class="grid grid_right_1">
        <table>
            <tr v-for="(row, index) in tableData" :key="index">
                <td class="table_type tiny_type">{{ tableData.MTTPNum.title }}</td>
                <td class="table_type tiny_data">{{ tableData.MTTPNum.value }}</td>
            </tr>
        </table>
    </div>
</template>

<style scoped>
table {
    width: 77%;
}
</style>

<script>
import { fetchData } from '@/utils/http';
export default {
    data() {
        return {
            // 表格数据
            tableData: {
                MTTPNum: {
                    title: 'MPPT 个数:  ',
                    value: '0'
                }
            },
            interval: {
                value: '1000'
            },
        };
    },
    name: 'Com_right_1_4',
    methods: {

    },
    mounted() {
        setInterval(() => {
            fetchData('/index/GetData/resource_realtime_data/cid/gfbwx_mppt_num').then((data) => {
                // console.log(data.item.value);
                this.tableData.MTTPNum.value = data.item.value;
            })
        }, this.interval.value)
    },
}

</script>