<template>
  <!--第一层div，用来放背景色-->
  <div class="bdkgc">
    <!--第二层div，用来放网格-->
    <div class="bdgrid">
      <!-- 左下背景图标 -->
      <div id="back_icon">
        <!-- 框背景放下层 -->
        <div id="back_layer1">
          <img
            id="stars-background"
            alt="stars"
            src="../components/img/stars-background.png"
           style="width: 98vh;height:26.3vh;"
          />
        </div>
       <!-- 线图标放中层 -->
        <div id="back_layer2" style="position: relative;">
          <img
            id="line_left_bottom"
            alt="line"
            src="../components/img/line-left-bottom.png"
           style="width: 26vh;height:48vh;"
          />
         <!-- 文字图标放上层 -->
          <div id="back_layer3" style="position:relative;left:7.5vh;top:-5vh;">
            <img
              id="tech_left_bottom"
              alt="TECH OTACKUS  SAVE THE WORLD"
              src="../components/img/tech-left-bottom.png"
              style="width:0.8vh;height:30vh;"
            />
          </div>
        </div>
      </div>
      <!-- 主要页面内容 -->
      <div id="join_main">
        <div id="images">
        <div id="char_imgs">
          <!-- 下层人物图片 -->
          <div id="images_layer1">
            <img
              alt="charecter3"
              class="char3"
              src="../components/img/join-char3.png"
              style=" width:43vh;height:53vh;"
            />
              <!-- 中层人物图片 -->
            <div id="images_layer2">
              <img
              alt="charecter1"
              class="char1"
              src="../components/img/join-char1.png"
              style=" width:83vh;height:48vh;"
            />
              <div id="images_layer1">
            
            <!-- 上层人物图片 -->
            <div id="images_layer3">
              <img
                alt="charecter2"
                class="char2"
                src="../components/img/join-char2.png"
                style=" width:75vh;height:57vh;"
              />
              </div>
            </div>
            </div>
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
*{
  margin: 0 ;
  padding: 0;
}
#back_icon {
  position: fixed;
  bottom:-13vh;
}
#back_layer1{
  position:fixed;
  top:48vh;
}
#join_main {
  display: grid;
  grid-template-columns: 7fr 4fr;
}
#char_imgs{
position:relative;
top:13vh;
left:5vh;
}
#images_layer1{
  position: relative;
  left:50vh;
}
#images_layer2 {
  position: relative;
  top: -48.6vh;
  right:55vh;
}
#images_layer3 {
  position: relative;
  top: -57.6vh;
  left:-12vh;
}
h2 {
  color: rgb(166, 166, 166);
}

</style>
