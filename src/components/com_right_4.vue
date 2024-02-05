<template>
    <div class="grid grid_right_1">
        <h1 class="grid_right_title4" style="position: relative; left: 25px;font-weight: 600;">
            <span>{{ formattedTime }}</span>
        </h1>

    </div>
</template>

<style scoped>
.grid_right_title4 {
    margin-top: 30px;
    margin-left: 30px;
    color: white;
}
</style>

<script>
import axios from 'axios';
import moment from 'moment';
export default {
    data() {
        return {
            time: '', // 原始时间数据
            formattedTime: '', // 格式化后的时间
        };
    },
    mounted() {
        this.fetchTime();
        this.updateTime();
        this.timer = setInterval(this.updateTime, 1000);
    },
    beforeDestroy() {
        clearInterval(this.timer);
    },
    name: 'Com_right_4',
    methods: {
        updateTime() {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            this.time = `${hours}:${minutes}:${seconds}`;
        },
        fetchTime() {
            const timeApiUrl = 'https://worldtimeapi.org/api/timezone/Europe/London';
            axios.get(timeApiUrl)
                .then(response => {
                    this.time = response.data.datetime;
                    // 使用 moment 来格式化时间
                    this.formattedTime = moment(this.time).format('YYYY-MM-DD HH:mm:ss');
                })
                .catch(error => {
                    console.error('Error fetching time:', error);
                });
        }
    }
}
</script>