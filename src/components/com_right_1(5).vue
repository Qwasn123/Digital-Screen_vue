<template>
    <div class="grid grid_right_1">
        <table>
            <tr v-for="(row, index) in tableData" :key="index">
                <td class="table_type tiny_type">{{ tableData.pMax.title }}</td>
                <td class="table_type tiny_data">
                    <span>{{ tableData.pMax.value }}</span>&nbsp&nbsp<span class="unit-style"> {{ tableData.pMax.unit }}</span>
                </td>

            </tr>
        </table>
    </div>
</template>

<style></style>

<script>
export default {
    data() {
        return {
            // 表格数据
            tableData: {
                pMax:{
                    title: '最大有功功率Pmax: ', 
                    value: '15.99',
                    unit:' kW'
                }
            }
        };
    },
    name: 'Com_right_1_5',
    methods: {

    }
}

</script>