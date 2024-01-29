<template>
    <div class="grid grid_right_1">
        <table>
            <tr>
                <td class="table_type tiny_type">{{ tableData.insideTemp.title }}</td>
                <td class="table_type tiny_temp">{{ tableData.insideTemp.value }}</td>
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
export default {
    data() {
        return {
            // 表格数据
            tableData: {
                insideTemp: {
                    title: '内部温度: ',
                    value: '47.1 °C'
                }
            }



        };
    },
    name: 'Com_right_1_2',
    methods: {

    }
}

</script>