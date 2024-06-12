<template>
  <div id="home" >
    <div class="bg">
      <div class="title">
        <img
          src="data:image/png;base64,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"
          alt=""
          :class="{ 'flag': this.$route.meta.direction=== -1 }" v-observe="'active'"
        />
      </div>
      <div class="center">
        <img src="https://www.mihoyo.com/_nuxt/img/slogan@2x.301d3f9.png" alt="" :class="{ 'flag': this.$route.meta.direction=== -1 }" v-observe="'active'"/>
      </div>
      <div class="video">
        <img @click="play" src="../assets/1716430688033.png" alt="" :class="{ 'flag': this.$route.meta.direction=== -1 }" v-observe="'active'"/>
      </div>
      <div class="arrow">
        <img src="../assets/arrow.png" alt="" :class="{ 'flag': this.$route.meta.direction=== -1 }" v-observe="'active'"/>
      </div>
      <video v-if="videoShow" width="800" height="300" class="fVideo" controls id="bgVid" playsinline="" autoplay="" muted="" loop="">
        <source src="../assets/bg.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="videoContainer">
      <video class="fullscreenVideo" id="bgVid" playsinline="" autoplay="" muted="" loop="">
        <source src="../assets/bg.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const videoShow = ref(false)
console.log(videoShow)
 function play(){
  videoShow.value = true
 }
</script>

<style scoped lang="scss">
.videoContainer {
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -100;
}

.videoContainer:before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  display: block;
  z-index: -1;
  top: 0;
  left: 0;
  background: rgba(25, 29, 34, 0.65);
  background-size: cover;
}

.fullscreenVideo {
  width: 100%;
  height: 100%;
  object-fit: fill;
}
.bg {
  .arrow{
    text-align: center;
    height: 40px;
    overflow: hidden;
    img {
      width: 23px;
      height: 23px;
      margin-top:30px;
      animation: scroll-up 1s linear infinite;
    }
  }
  .fVideo{
    position: absolute;
  top: 50px;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  }
  @keyframes scroll-up {
  0% {
    transform: translateY(-100%); /* 初始位置 */
  }
  100% {
    transform: translateY(0); /* 移动到完全不可见的位置 */
  }
}
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAE1JREFUOE9j5BaRuvnr+2cGNk5eBhighM8IMhBuEhUYKAZS4jKQW0D6aeNCargMFge0cSE1Ync0DCGhSI3Ypk0sU8Nlo+lwtDykoOQGAAxCqvFBleXSAAAAAElFTkSuQmCC);
  .title {
    img {
      margin-top: 10px;
      margin-left: 30px;
      width: 80px;
      height: 28px;
    }
  }
  .video {
    text-align: center;
    img {
      width: 83px;
      height: 43px;
      margin-top:30px;
    }
  }
  .center {
    text-align: center;
    img {
      margin-top: 260px;
      margin-left: 40px;
      width: 444px;
      height: 271px;
    }
  }
}
.flag {
  transition: ease-out 0.6s;
  transform: translateY(-50px);
}
.active{
  transform: translateY(0%);
}
</style>
