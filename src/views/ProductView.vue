<!-- 吴亦桐同学采用html文件写的，故引入html页面 -->
<template>
  
  <iframe :src="src" frameborder="0" style="width: 100%; height: 100vh">
  </iframe>
  <!-- 否则无法触发鼠标滚动事件 -->
  <div id="catch_mouth"></div>
</template>

<script>
export default {
  data() {
    return {
      src: '/product-infomation/111.html'
    }
  }
}
</script>
<style>
#catch_mouth{
  position: relative;
  top: -100vh;
  width: 100%;
  height:100vh;
}
</style>