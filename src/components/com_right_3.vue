<template>
    <div class="grid_right_3">
        <table>
            <tr v-for="(row, index) in tableData" :key="index">
                <td>{{ row.column1 }}</td>
                <td>{{ row.column2 }}</td>
            </tr>
        </table>
    </div>
</template>

<style>
.grid_right_3 {
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("../assets/image/右下.png");
    margin: 10px;
    border-radius: 10px;
}

table {
    margin-top: 12px;
    margin-left: 30px;
    width: 80%;
    border-collapse: collapse;
}

td {
    font-weight: 700;
    color: white;
    padding: 8px;
    text-align: left;
}
</style>

<script>
export default {
    data() {
        return {
            // 表格数据
            tableData: [
                { column1: '当日峰值有功功率：', column2: 'XXXXX' },
                { column1: '    功率因数   ：', column2: 'XXXXX' },
                { column1: '效率：', column2: 'XXXXX' },
            ],
        };
    },
    name: 'Com_right_3',
    methods: {

    }
}

</script>