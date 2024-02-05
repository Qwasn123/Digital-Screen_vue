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
import { fetchData } from '@/utils/http';
import * as lodash from 'lodash'
export default {
    data() {
        return {
            // 表格数据
            tableData: {
                deviceStatus: {
                    title: '设备状态: ',
                    status: '在线'
                }
            },
            interval: {
                value: '1000'
            },

        };
    },
    name: 'Com_right_1_1',
    methods: {

    },
    created() {
        fetchData('/index/GetData/resource_realtime_data/cid/gfbwx_device_status').then((data) => {
            // console.log(data);
            this.tableData.deviceStatus.status = data.item.value;
        })
    },
    mounted() {
        setInterval(() => {
            fetchData('/index/GetData/resource_realtime_data/cid/gfbwx_device_status').then((data) => {
            // console.log(data);
            this.tableData.deviceStatus.status = data.item.value;
        })
        }, this.interval.value)
    },
}

</script>