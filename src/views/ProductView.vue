<!-- 吴亦桐同学采用html文件写的，故引入html页面 -->
<template>
  <iframe :src="src" frameborder="0" style="width: 100%; height: 100vh"></iframe>
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
