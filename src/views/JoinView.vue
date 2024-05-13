<template>
  <main>
    <div id="images">
      <!--alt: 图片无法加载时描述为character1 -->
      <div id="images-layer1">
        <img
          alt="charecter1"
          class="char1"
          src="../components/img/join_char1.png"
          width="300"
          height="250"
        />

        <img
          alt="charecter3"
          class="char3"
          src="../components/img/join_char3.png"
          width="200"
          height="250"
        />
        <div id="images-layer2">
          <img
            alt="charecter2"
            class="char2"
            src="../components/img/join_char2.png"
            width="250"
            height="250"
          />
        </div>
      </div>
    </div>
    <div id="articles">
      <h1>加入米哈游</h1>
      <h2>development history</h2>
    </div>
  </main>
</template>

<script></script>

<style scoped>
main {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
#images-layer2 {
  position: relative;
  top: -250px;
  left: 200px;
}
</style>
