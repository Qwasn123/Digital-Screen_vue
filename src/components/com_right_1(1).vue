<template>
    <div class="grid grid_right_1">
        <table>
            <tr>
                <td class="table_type tiny_type">{{ tableData.deviceStatus.title }}</td>
                <td class="table_type tiny_status">{{ tableData.deviceStatus.status }}</td>
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
                deviceStatus: {
                    title: '设备状态: ',
                    status: '在线'
                }
            }

        };
    },
    name: 'Com_right_1_1',
    methods: {

    }
}

</script>