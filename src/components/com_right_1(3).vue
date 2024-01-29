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
export default {
    data() {
        return {
            // 表格数据
            tableData: {
                stringNum: {
                    title: '组串个数:  ',
                    value: '8'
                }
            }
        };
    },
    name: 'Com_right_1_3',
    methods: {

    }
}

</script>