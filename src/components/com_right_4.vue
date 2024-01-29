<template>
    <div class="grid grid_right_1">
        <h1 class="grid_right_title4">
            <slot></slot>
            &nbsp;
            {{ time }}
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
export default {
    data() {
        return {
            time: '',
        };
    },
    mounted() {
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
        }
    }
}
</script>