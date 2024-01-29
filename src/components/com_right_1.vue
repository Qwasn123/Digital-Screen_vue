<template>
    <div class="grid_right_1">
        <h3 class="grid_right_title1"><slot></slot></h3>
    </div>
</template>

<style>
.grid_right_1 {
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("../assets/image/右下.png");
    margin: 10px;
    border-radius: 10px;
}
.grid_right_title1{
    margin-left: 30px;
    color: white;
}
</style>

<script>
export default {
    name: 'Com_right_1',
    methods: {

    }
}

</script>