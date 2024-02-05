<template>
    <div class="grid grid_right_1">
        <table>
            <tr>
                <td class="table_type tiny_type">{{ tableData.stringNum.title }}</td>
                <td class="table_type tiny_data">{{ tableData.stringNum.value }}</td>
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
import { fetchData } from '@/utils/http';
export default {
    data() {
        return {
            // 表格数据
            tableData: {
                stringNum: {
                    title: '组串个数:  ',
                    value: '0'
                }
            },
            interval: {
                value: '1000'
            },
        };
    },
    name: 'Com_right_1_3',
    methods: {

    },
    mounted() {
        setInterval(() => {
            fetchData('/index/GetData/resource_realtime_data/cid/gfbwx_series_num').then((data) => {
                // console.log(data.item.value);
                this.tableData.stringNum.value = data.item.value;
            })
        }, this.interval.value)
    },
}

</script>