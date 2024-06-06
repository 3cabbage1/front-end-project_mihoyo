<script setup>
//import home_about from '../components/home-about.vue'
import newTry from '../components/know-index.vue'
// import newTry2 from '../components/know-about.vue'
// import KonwHoner from '@/components/konw-honer.vue'
</script>

<template>
  <main>
    <new-try />
    <!-- <new-try2  /> -->
    <!-- <KonwHoner /> -->
  </main>
</template>
<style>
.flag {
  opacity: 0;
  filter: blur(5px);
  transition: all 1s;
  transform: translateY(-100%);
}
.active {
  opacity: 1;
  filter: blur(0);
  transform: translateY(0);
}
</style>
