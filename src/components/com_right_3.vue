<template>
    <div class="grid grid_right_1">
        <table class="table_right_1">
            <tr>
                <td class="table_type tiny_type">{{ tableData.todayMaxP.title }}</td>
                <td class="table_type tiny_data">
                    <span>{{ tableData.todayMaxP.value }}</span>&nbsp&nbsp<span class="unit-style"> {{ tableData.todayMaxP.unit }}</span>
                </td>
            </tr>
            <tr>
                <td class="table_type tiny_type">{{ tableData.pNum.title }}</td>
                <td class="table_type tiny_data">
                    <span>{{ tableData.pNum.value }}</span>&nbsp&nbsp<span class="unit-style"> {{ tableData.pNum.unit }}</span>
                </td>
            </tr>
            <tr>
                <td class="table_type tiny_type">{{ tableData.efficiency.title }}</td>
                <td class="table_type tiny_data">
                    <span>{{ tableData.efficiency.value }}</span>&nbsp&nbsp<span class="unit-style"> {{ tableData.efficiency.unit }}</span>
                </td>
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
                todayMaxP: {
                    title: '当日峰值有功功率：',
                    value: '13.24',
                    unit: 'kW'
                },
                pNum: {
                    title: '功率因数：',
                    value: '0.85',
                    unit: ''
                },
                efficiency: {
                    title: '效率：',
                    value: '83.37%',
                    unit: ''
                }
            }
        };
    },
    name: 'Com_right_3',
    methods: {

    }
}

</script>