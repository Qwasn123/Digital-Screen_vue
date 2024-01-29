<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Com_left_1 from './components/com_left_1.vue'
import Com_left_2 from './components/com_left_2.vue'
import Com_middle_1 from './components/com_middle_1.vue'
import Com_right_1 from './components/com_right_1.vue'
import Com_right_2 from './components/com_right_2.vue'
import Com_right_3 from './components/com_right_3.vue'
import Com_right_4 from './components/com_right_4.vue'
</script>

<template>
  <div class="grid_container">
    <div class="grid_header">
      <div class="grid_header_title">
        数据面板
      </div>
    </div>
    <div class="grid_main">
      <div class="grid_left">
        <Com_left_1>发电用电量趋势对比</Com_left_1>
        <Com_left_2>累计发电量趋势</Com_left_2>
      </div>
      <div class="grid_middle">
        <Com_middle_1>PV1电流电压</Com_middle_1>
        <Com_middle_1>PV2电流电压</Com_middle_1>
        <Com_middle_1>PV3电流电压</Com_middle_1>
        <Com_middle_1>PV4电流电压</Com_middle_1>
      </div>
      <div class="grid_right">
        <Com_right_1>设备状态</Com_right_1>
        <Com_right_1>内部温度</Com_right_1>
        <Com_right_1>最大有功</Com_right_1>
        <Com_right_1>最大视在</Com_right_1>
        <Com_right_1>组串个数</Com_right_1>
        <Com_right_1>MPPT个数</Com_right_1>
        <Com_right_2></Com_right_2>
        <Com_right_3></Com_right_3>
        <Com_right_4>系统时间：</Com_right_4>
      </div>
      
    </div>
  </div>
</template>

<style>
html, body, h1, p {
  margin: 0;
  padding: 0;
}
.grid_container {
  width: 1920px;
  height: 1080px;
  margin: 0;
  padding: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("./assets/image/黑色背景.png");
}

.grid_header{
  background-image: url("./assets/image/背景标题.png");
  margin: 0px;
  width: 100%;
  height: 108px;
}
.grid_header_title{
  letter-spacing: 5px;
  padding: 15px;
  color: rgb(75, 207, 250);
  font-size:xx-large;
  font-weight: 800;
  text-align: center;
  align-items: center;
}
.grid_main {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  opacity: 0.9;
}
.grid_left{
  display: grid;
  grid-template-rows:486px 486px;
  max-height: 972px;
}
.grid_middle{
  display: grid;
  grid-template-rows:243px 243px 243px 243px;
  height: 972px;
}
.grid_right{
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 4fr 3fr 2fr;
  height: 972px;
}

</style>
