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
           style="width: auto;height:215px;"
          />
        </div>
       <!-- 线图标放中层 -->
        <div id="back_layer2" style="position: relative;top:15px;">
          <img
            id="line_left_bottom"
            alt="line"
            src="../components/img/line-left-bottom.png"
           style="width: auto;height:400px;"
          />
         <!-- 文字图标放上层 -->
          <div id="back_layer3" style="position:relative;left:63px;top:-40px;">
            <img
              id="tech_left_bottom"
              alt="TECH OTACKUS  SAVE THE WORLD"
              src="../components/img/tech-left-bottom.png"
              style="width:auto;height:250px;"
            />
          </div>
        </div>
      </div>
      <!-- 主要页面内容 -->
      <div id="join_main">
        <div id="images">
        <div id="char_imgs">
          <!-- 人物图片层叠关系  -->
          <!-- 下层人物图片 -->
          <div id="images_layer1">
            <img
              alt="charecter3"
              class="char3"
              src="../components/img/join-char3.png"
              style=" width:auto;height:414px;"
            />
              <!-- 中层人物图片 -->
            <div id="images_layer2">
              <img
              alt="charecter1"
              class="char1"
              src="../components/img/join-char1.png"
              style=" width:auto;height:384px;"
            />
            <!-- 上层人物图片 -->
            <div id="images_layer3">
              <img
                alt="charecter2"
                class="char2"
                src="../components/img/join-char2.png"
                style=" width:auto;height:456px;"
              />
              <!-- 遮盖人物图片多余部分，形成框的视觉效果 -->
              <div id="images_layer4">
                <img
                alt="mask"
                src="../components/img/mask-patch.png"
                style="width:auto;height:357.22px;"
              />
              <!-- 招聘图标层 -->
              <div id="recurit_layer">
              <!-- 招聘链接 -->
              <a href="https://jobs.mihoyo.com/"> 
              <!-- 斜切角矩形框 -->
                <div id="social" class="recruit">  
                    <!-- 背景箭头 -->
                  <div class="back_rec">
                  <div class="text_rec">
                  <h5>社会招聘</h5>
                  <h6>MORE INFORMATION</h6>
                </div>
                </div>
              </div> 
              </a>
              <a href="https://campus.mihoyo.com/"> 
              <div id="school" class="recruit">
                <div class="back_rec">
                <div class="text_rec">
                <h5>校园招聘</h5>
                <h6>MORE INFORMATION</h6>
                </div>
              </div>
              </div>
              </a>
            </div>
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
          <div id="text_frames">
          <div id="text_frame1" class="text_frame">
            <h3>技术宅拯救世界 </h3>
            <h4>技术密集型公司 精英化团队理念 面向未来的产品</h4>
          
            <img
                alt="01"
                class="num"
                src="../components/img/number-img-01.png"
                style=" width:auto;height:25px;"
              />
              <img
                alt=">>>"
                class="text_arr"
                src="../components/img/text-frame-arrow.png"
                style=" width:auto;height:15px;"
              />
              <div class="blue"></div>
          </div>
        <div id="text_frame2" class="text_frame">
          <h3>价值观</h3>
          <h4>说到做到 有话直说 只认功劳 追求极致</h4>
          
          <img
                alt="02"
                class="num"
                src="../components/img/number-img-02.png"
                style=" width:auto;height:25px;"
              />
              <img
                alt=">>>"
                class="text_arr"
                src="../components/img/text-frame-arrow.png"
                style=" width:auto;height:15px;"
              />
              <div class="blue"></div>
        </div>
        <div id="text_frame3" class="text_frame">
          <h3>快乐工作用心成长</h3>
          <h4>体系化培训助力成长 简单纯粹的工作氛围</h4>
          
          <img
                alt="03"
                class="num"
                src="../components/img/number-img-03.png"
                style=" width:auto;height:25px;"
              />
              <img
                alt=">>>"
                class="text_arr"
                src="../components/img/text-frame-arrow.png"
                style=" width:auto;height:15px;"
              />
              <div class="blue"></div>
        </div>
        <div id="text_frame4" class="text_frame">
          <h3>优秀的薪酬福利</h3>
          <h4>诚意满满薪金回报 丰富年节福利 贴心关爱员工健康</h4>
        
          <img
                alt="04"
                class="num"
                src="../components/img/number-img-04.png"
                style=" width:auto;height:25px;"
              />
              <img
                alt=">>>"
                class="text_arr"
                src="../components/img/text-frame-arrow.png"
                style=" width:auto;height:15px;"
              />
              <div class="blue"></div>
        </div>
      </div>
        </div>
        
        </div>
      </div>
    </div>
    <!-- 右侧背景图标 -->
<img 
  id="careers"
  alt="careers"
  src="../components/img/careers.png"
/>
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
  grid-template-columns: 1fr 1.2fr;
}
/* 左侧背景及图片布局设置 */
#back_icon {
  position: fixed;
  bottom:-30px;
}
/* 框背景层 */
#back_layer1{
  position:fixed;
  top:387px;
  left:-70px;
}
/* 人物图片布局设置 */
#char_imgs{
position:relative;
top:133px;
left:130px;
}
#images_layer1{
  position: relative;
  left:290px;
}
#images_layer2 {
  position: relative;
  top: -386px;
  right:450px;
}
#images_layer3 {
  position: relative;
  top: -461px;
  left:300px;
}
/* 遮盖物层（遮住多余头发） */
#images_layer4{
  position: relative;
  bottom:297px;
  left:485px;
}
/* 招聘图标部分设置 */
#recurit_layer{
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top:-200px;
  left:-270px;
  height:175px;
}
/* 斜切角矩形 */
.recruit{
  width: 230px;
  height:78px;
  background: linear-gradient(45deg, rgb(61, 123, 230) 0%,  rgb(61, 123, 230) 95%,  transparent 95%);/* 通过线性渐变实现斜切角矩形 */
}
/* 箭头 */
.back_rec{
  height:175px;
  background-image: url('../components/img/left-arrows.png');
  background-size: 126px;
  background-repeat: no-repeat;
  background-position: 100px 0px;
}
/* 文字部分 */
.text_rec{
  position: relative;
  left:30px;
  top:15px;
}
h5,h6{
  color: white;
}
h5{
  font-size: 1.4rem;
}
h6{
  font-size:0.45rem;
}
a{
  text-decoration: none;/* 取消链接下划线 */
}
/* 右侧部分设置 */
#titles{
  position: fixed;
  top:235px;
}
/* 标题 */
h1{
  font-size: 1.5rem;
}
h2 {
  position: relative;/*相对主标题左移一定距离*/
  left:40px;
  font-size: 0.9rem;
  font-weight: 500;
  color: rgba(186, 186, 186, 0.86);
}
/* 文字框 */
#text_frames{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 20px;
  height:480px;
}
.text_frame{
  position: relative;
  width:540px;
  height:110px;
  background-image: url('../components/img/normal-frame.png');/* 文字框背景 */
  background-size: 500px;
  background-repeat: no-repeat;
}
/* 框中文字 */
h3{
  position: relative;
  left: 40px;
  top:25px;
  font-size: 0.95rem;
  color:rgb(66, 66, 66);
}
h4{
  position: relative;
  left: 40px;
  top:35px;
  font-size: 0.9rem;
  font-weight:400;
  color:rgb(100, 100, 100);
}
/* 框装饰 */
.blue{
  position: relative;
  bottom:50px;
  width:4px;
  height: 30px;
  background-color: rgb(45, 119, 222);
}
.num{
  position: relative;
  left:450px;
  top:25px;
}
.text_arr{
  position: relative;
  left:370px;
  top:25px;
}
/* 右侧背景图表设置 */
/* 右上careers图标 */
#careers{
  position: absolute;
  right: 1rem;
  width: 10rem;
}
</style>
