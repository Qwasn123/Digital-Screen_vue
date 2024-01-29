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
export default {
    data() {
        return {
            // 表格数据
            tableData: {
                MTTPNum: {
                    title: 'MPPT 个数:  ',
                    value: '1'
                }
            }
        };
    },
    name: 'Com_right_1_4',
    methods: {

    }
}

</script>