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
export default {
    data() {
        return {
            // 表格数据
            tableData: {
                sMax: {
                    title: '最大视在功率Smax:  ',
                    value: '20.37',
                    unit: ' kA'
                }
            }
        };
    },
    name: 'Com_right_1_6',
    methods: {

    }
}

</script>