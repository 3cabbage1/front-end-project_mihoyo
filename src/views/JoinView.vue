<template>
  <!--第一层div，用来放背景色-->
  <!-- <div class="bdkgc"> -->
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
           style="width: auto;height:26.5vh;"
          />
        </div>
       <!-- 线图标放中层 -->
        <div id="back_layer2" style="position: relative;">
          <img
            id="line_left_bottom"
            alt="line"
            src="../components/img/line-left-bottom.png"
           style="width: auto;height:48vh;"
          />
         <!-- 文字图标放上层 -->
          <div id="back_layer3" style="position:relative;left:7.5vh;top:-5vh;">
            <img
              id="tech_left_bottom"
              alt="TECH OTACKUS  SAVE THE WORLD"
              src="../components/img/tech-left-bottom.png"
              style="width:auto;height:30vh;"
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
              style=" width:auto;height:53vh;"
            />
              <!-- 中层人物图片 -->
            <div id="images_layer2">
              <img
              alt="charecter1"
              class="char1"
              src="../components/img/join-char1.png"
              style=" width:auto;height:48vh;"
            />
            <!-- 上层人物图片 -->
            <div id="images_layer3">
              <img
                alt="charecter2"
                class="char2"
                src="../components/img/join-char2.png"
                style=" width:auto;height:57vh;"
              />
              <!-- 遮盖人物图片多余部分，形成框的视觉效果 -->
              <div id="images_layer4">
                <img
                alt="mask"
                src="../components/img/mask-patch.png"
                style="width:auto;height:305.7px;"
              />
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
        <div id="articles">
          <!-- 标题 -->
          <div id="titles">
          <h1>加入米哈游
            <!-- 副标题 -->
            <h2>development history</h2>
          </h1>
        </div>
        </div>
      </div>
    </div>
  <!-- </div> -->
</template>

<script></script>

<style scoped>
/* 整体布局设置 */
*{
  margin: 0 ;
  padding: 0;
}
#join_main {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
}
/* 左侧背景及图片布局设置 */
#back_icon {
  position: fixed;
  bottom:-3vh;
}
/* 框背景层 */
#back_layer1{
  position:fixed;
  top:48vh;
  left:-8.5vh;
}
/* 人物图片布局设置 */
#char_imgs{
position:relative;
top:13.3vh;
left:11vh;
}
#images_layer1{
  position: relative;
  left:40vh;
}
#images_layer2 {
  position: relative;
  top: -48.6vh;
  right:55vh;
}
#images_layer3 {
  position: relative;
  top: -57.6vh;
  left:37vh;
}
/* 遮盖物层 */
#images_layer4{
  position: relative;
  bottom:290.3px;
  left:391.5px;
}
/* 右侧文字框图设置 */
#titles{
  position: fixed;
  top:185px;
}
h1{
  font-size: 1.1rem;
}
h2 {
  position: relative;/*相对主标题左移一定距离*/
  left:30px;
  font-size: 0.4rem;
  font-weight: 500;
  color: rgba(186, 186, 186, 0.86);
}

</style>
