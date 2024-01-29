<template>
    <div class="grid_right_1">
        <table>
            <tr v-for="(row, index) in tableData" :key="index">
                <td>{{ row.column1 }}</td>
                <td>{{ row.column2 }}</td>
            </tr>
        </table>
    </div>
</template>

<style scoped>
.grid_right_1 {
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("../assets/image/右下.png");
    margin: 10px;
    border-radius: 10px;
}

table {
    margin-top: 10px;
    margin-left: 30px;
    width: 80%;
    border-collapse: collapse;
}

td {
    position: relative;
    bottom: 4px;
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
                { column1: '最大视在功率 Smax:  ', column2: '20.37 千伏安' },
                
            ],
        };
    },
    name: 'Com_right_1_6',
    methods: {

    }
}

</script>