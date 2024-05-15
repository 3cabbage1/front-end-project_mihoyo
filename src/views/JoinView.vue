<template>
  <!--第一层div，用来放背景色-->
  <div class="bdkgc">
    <!--第二层div，用来放网格-->
    <div class="bdgrid">
      <!-- 左下背景图标 -->
      <div id="back_icon">
        <div id="back_layer1">
          <!-- 线图标放下层 -->
          <img
            id="line_left_bottom"
            alt="line"
            src="../components/img/line-left-bottom.png"
            width="80"
            height="200"
          />
          <div id="back_layer2">
            <!-- 文字图标放上层 -->
            <img
              id="tech_left_bottom"
              alt="TECH OTACKUS  SAVE THE WORLD"
              src="../components/img/tech-left-bottom.png"
              width="8"
              height="200"
            />
          </div>
        </div>
      </div>
      <!-- 主要页面内容 -->
      <div id="join_main">
        <div id="images">
          <!-- 下层人物图片 -->
          <div id="images_layer1">
            <img
              alt="charecter1"
              class="char1"
              src="../components/img/join-char1.png"
              width="300"
              height="250"
            />
            <img
              alt="charecter3"
              class="char3"
              src="../components/img/join-char3.png"
              width="200"
              height="250"
            />
            <!-- 最上层人物图片 -->
            <div id="images_layer2">
              <img
                alt="charecter2"
                class="char2"
                src="../components/img/join-char2.png"
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
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
#back_icon {
  position: fixed;
  bottom: 100px;
  left: 60px;
}

#join_main {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
#images_layer2 {
  position: relative;
  top: -250px;
  left: 200px;
}
h2 {
  color: rgb(166, 166, 166);
}
</style>
