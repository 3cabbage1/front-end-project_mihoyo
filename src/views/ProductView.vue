<!-- 吴亦桐同学采用html文件写的，故引入html页面 -->
<template>
  <iframe :src="src" frameborder="0" style="width: 100%; height: 100vh"></iframe>
  <!-- 否则无法触发鼠标滚动事件 -->
  <div id="catch_mouth"></div>
</template>

<script>
export default {
  data() {
    return {
      src: '/产品信息1/wenjian.html'
    }
  }
}
</script>
<style>
#catch_mouth{
  position: relative;
  top: -100vh;
  width: 100%;
  height:70vh;/*不能全覆盖，按钮空出 */
}
</style>
<!-- <script setup>
import product_info from '../components/产品信息1/ProductInfo.vue'
</script>

<template>
  <main>
    <product_info />
  </main>
</template> -->
