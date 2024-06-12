<template>
  <!--第一层div，用来放网格背景-->
  <div class="bdgrid" >
    <!-- 左下背景图标 -->
    <div id="back_icon">
      <!-- 框背景放下层 -->
      <div id="back_layer1" class= 'flag1' v-observe="'act1'">
        <img
          id="stars-background"
          alt="stars"
          src="../components/img/stars-background.png"
         style="width: auto;height:215px;"

        />
      </div>
     <!-- 线图标放中层 -->
      <div id="back_layer2" style="position: relative;top:15px;" class="flag1" v-observe="'act1'" v-observe1="act11">
        <img
          id="line_left_bottom"
          alt="line"
          src="../components/img/line-left-bottom.png"
         style="width: auto;height:400px;"
        />
       <!-- 文字图标放上层 -->
        <div id="back_layer3" style="position:relative;left:63px;top:-40px;" >
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
    <div id="join_main" @mousemove="handleMouseMove"><!-- 鼠标移动事件 鼠标左右移动更新img动态效果 -->
      <div id="images" style="height:100px;">
      <div id="char_imgs" style="height:100px;" class="flag1" v-observe="'act1'">
        <!-- 人物图片层叠关系  -->
        <!-- 下层人物图片 -->
        <div id="images_layer1" style="height:100px;">
          <div id="char1_frame">
          <img
            alt="charecter3"
            class="char3"
            src="../components/img/join-char3.png"
            :style="imageStyle1"
          />
          </div>
            <!-- 中层人物图片 -->
          <div id="images_layer2" style="height:100px;">
            <img
            alt="charecter1"
            class="char1"
            src="../components/img/join-char1.png"
            :style="imageStyle2"
          />
          <!-- 上层人物图片 -->
          <div id="images_layer3">
            <div id="char2_frame">
            <img
              alt="charecter2"
              class="char2"
              src="../components/img/join-char2.png"
              :style="imageStyle3"
            />
          </div>
            <!-- 招聘图标层 -->
            <div id="recurit_layer">
            <!-- 招聘链接 -->
            <a href="https://jobs.mihoyo.com/"  @mouseleave="hleave1"> 
            <!-- 斜切角矩形框 -->
             
              <div id="social" class="recruit"
                  >  
             
                   <!-- 监听鼠标离开事件，绑定类设置鼠标离开动画 -->
                <div class="back_rec"
                  @mouseleave="backleave1"
                  :class="{ 'back_leave1': is_back_leave1 }">
                    <!-- 背景箭头 -->
                  <img 
                  alt=">>>"
                  id="back_rec1"
                  class="back_rec_img"
                  src="../components/img/left-arrows.png"
                  style=" width:auto;height:77px;"
                 
                   >
        
                <div class="text_rec" id="text_rec1">
                <h5>社会招聘</h5>
                <!-- 监听鼠标离开事件，绑定类设置鼠标离开动画 -->
                <h6  @mouseleave="hleave1"
                  :class="{ 'h_leave1': is_h_leave1 }">MORE INFORMATION</h6>
              </div>
              </div>
            </div> 
            </a>
            <a href="https://campus.mihoyo.com/"  @mouseleave="hleave2"> 
            <div id="school" class="recruit"
            >  
              <div class="back_rec"
                  @mouseleave="backleave2"
                  :class="{ 'back_leave2': is_back_leave2 }">
              
                  <img 
                  alt=">>>"
                  id="back_rec2"
                  class="back_rec_img"
                  src="../components/img/left-arrows.png"
                  style=" width:auto;height:77px;"
                  
                 />
  
              <div class="text_rec" id="text_rec2">
              <h5>校园招聘</h5>
              <h6  @mouseleave="hleave2"
                  :class="{ 'h_leave2': is_h_leave2 }">MORE INFORMATION</h6>
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
      <div id="articles" class="flag2" v-observe="'act1'">
        <!-- 标题 -->
        <div id="titles">
        <h1>加入米哈游
          <!-- 副标题 -->
          <h2>development history</h2>
        </h1>
        <div id="text_frames">
        <div id="text_frame1" class="text_frame" @mouseenter="hover_frame_show1=true" :class="{ 'hover_text_frame': hover_frame_show1 }"  @mouseleave="hover_frame_show1=false">
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
           <Transition>
            <div v-if= "hover_frame_show1" class="hover_frame">
              <div class="hover_texts">
              <div class="text_h">
                <h7>技术密集型公司</h7>
              <p>行业领先卡通渲染、人工智能、云游戏技术</p>
              <p>不断探索前沿科技，是一件很酷的事情</p>
            </div>
            <div class="text_h">
              <h7>精英化团队理念</h7>
              <p>高人才密度</p>
              <p>全球化团队</p>
              <p>与优秀的人在一起，做卓越的事情，获得最好的回报</p>
            </div>
            <div class="text_h">
              <h7>面向未来的产品</h7>
              <p>始终敢为人先</p>
              <p>致力于为用户提供美好的、超出想象的产品与体验</p>
            </div>
          </div>
            </div>
          </Transition>
        </div>
         <div class="blue"></div>
      <div id="text_frame2" class="text_frame">
        <h3>价值观</h3>
        <h4>说到做到 有话直说 只认功劳 追求极致</h4>
        
        <img
              alt="02"
              class="num"
              src="../components/img/number-img-02.png"
              style=" width:auto;height:25px;"
            />
            <!-- 2框无悬浮框，所以不需要箭头 -->
            <!-- <img
              alt=">>>"
              class="text_arr"
              src="../components/img/text-frame-arrow.png"
              style=" width:auto;height:15px;"
            /> -->
         
      </div>
      <div class="blue"></div>
      <div id="text_frame3" class="text_frame" @mouseenter="hover_frame_show3=true" :class="{ 'hover_text_frame': hover_frame_show3 }"  @mouseleave="hover_frame_show3=false">
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
            <Transition>
            <div v-if= "hover_frame_show3" class="hover_frame">
              <div class="hover_texts" >
              <div class="text_h" style="width:160px;">
                <h7 >体系化培训助力成长</h7>
              <p style="width:160px;">社招新人培训、校招新人培训</p>
              <p style="width:160px;">【阿蒙森】计划Leader培训</p>
              <p style="width:160px;">系列通用&专业课程/沙龙</p>
            </div>
            <div class="text_h" style="width:260px;">
              <h7>简单纯粹的工作氛围</h7>
              <p>扁平架构、决策高效</p>
              <p>问题驱动、务实专注</p>
              <p style="width:260px;">让你在追求极致的道路上更加轻松愉快</p>
            </div>
          </div>
            </div>
          </Transition>
           
      </div>
      <div class="blue"></div>
      <div id="text_frame4" class="text_frame" @mouseenter="hover_frame_show4=true" :class="{ 'hover_text_frame': hover_frame_show4 }"  @mouseleave="hover_frame_show4=false">
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
            <Transition>
            <div v-if= "hover_frame_show4" class="hover_frame">
              <div class="hover_texts">
              <div class="text_h" style="width:140px;">
                <h7>诚意满满薪金回报</h7>
              <p>行业领先的薪酬</p>
              <p style="width:140px;">每年两次的薪酬回顾机会</p>
              <p style="width:140px;">优秀的你，值得有竞争力的回报</p>
            </div>
            <div class="text_h" style="width:140px;">
              <h7>丰富年节福利</h7>
              <p>年会好礼、多样周边、节日礼品</p>
              <p style="width:140px;">免费晚餐、零食与下午茶</p>
              <p>360度关爱你的生活</p>
            </div>
            <div class="text_h" style="width:140px;">
              <h7>贴心关爱员工健康</h7>
              <p>六险二金、家庭体检、</p>
              <p>EAP心理咨询</p>
              <p>10天起步的年假</p>
              <p>工作与生活平衡，</p>
              <p style="width:140px;">让你在前进路上后顾无忧</p>
            </div>
          </div>
            </div>
          </Transition>
      </div>
      <div class="blue"></div>
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
class="flag_careers" v-observe="'act2'"
/>

<foot_view id="foot"/>

<!-- </div> -->
</template>

<script>
import foot_view from '../components/foot-com.vue'
export default{
  props: ['slide_direction']
,
components: {
foot_view,//调用页脚组件
},
data(){
  return{
    is_back_leave1:false,
    is_back_leave2:false,
    is_h_leave1:false,
    is_h_leave2:false,
    hover_frame_show1:false,
    hover_frame_show3:false,
    hover_frame_show4:false,
    mouseX: 0,
    direction:this.$route.meta.direction,
    imageStyle1: {
      width:'auto',height:'414px',transition: 'ease-out 0.5s', 
      transform: 'translateX(0)'
    },
    imageStyle2: {
      width:'auto',height:'384px',transition: 'ease-out 0.5s',
      transform: 'translateX(0)'
    },
    imageStyle3: {
      width:'auto',height:'456px',transition: 'ease-out 0.5s',position:'relative',left:"100px",
      transform: 'translateX(0)'
    },
    bdgridStyle:{
      transition: 'ease-out 1s', 
      transform: 'translateX(0)'
    }
  }
},
methods:{
  mounted(){
    console.log("开始");
    this.updateSlideStyle();
  },
  // 招聘图标背景动画
backleave1(){
  this.is_back_leave1=true;
  setTimeout(() => {
      this.is_back_leave1 = false;
    },270); // 动画持续时间 ms
},
backleave2(){
  this.is_back_leave2=true;
  setTimeout(() => {
      this.is_back_leave2 = false;
    },270); 
}, 
// 招聘图标文字动画
hleave1(){
  this.is_h_leave1=true;
    setTimeout(() => {
      this.is_h_leave1 = false;
    },800);
},hleave2(){
  this.is_h_leave2=true;
    setTimeout(() => {
      this.is_h_leave2 = false;
    },800);
}, 
//鼠标移动动画处理
handleMouseMove(event) {
    this.mouseX = event.clientX;
    this.updateImageStyle();
    console.log("dir",this.direction)
  },updateImageStyle() {
    const translateX1 = `translateX(${-(this.mouseX-600)/20}px)`;
    const translateX2 = `translateX(${-(this.mouseX-600)/25}px)`;
    const translateX3 = `translateX(${-(this.mouseX-600)/15}px)`;
    this.imageStyle1.transform = `${translateX1} `;
    this.imageStyle2.transform = `${translateX2} `;
    this.imageStyle3.transform = `${translateX3} `;
  },
  // updateSlideStyle() {
  //   console.log("up_direction:",this.$route.meta.direction);
  //   clearTimeout(this.timer);
  //   if(this.$route.meta.direction===1){
  //     const translateY = `translateY(${-100}vh`;
  //     this.bdgridStyle.transform=`${translateY} `;
  //     console.log("向上动");
  //   }
  //   if(this.$route.meta.direction===-1){
  //     const translateY = `translateY(${100}vh`;
  //     this.bdgridStyle.transform=`${translateY} `;
  //     console.log("向下动");
  //   }
  //   this.timer=setTimeout(()=>{
  //     this.$route.meta.direction=0;
  //   },100);

  // }
},
watch:{
//   direction() {
//     direction=this.$route.meta.direction,
//     console.log("direction:",this.$route.meta.direction);
//     if(this.$route.meta.direction!=0){
//   this.updateSlideStyle();
//     }
// },
}

}
</script>

<style scoped>
/* 整体布局设置 */
*{
margin: 0 ;
padding: 0;
}
#join_main {
display: grid;
grid-template-columns: 1fr 1fr;
height: 100px;
}
/* 左侧背景及图片布局设置 */
#back_icon {
position:absolute;
bottom:-30px;
top:88px;
}
/* 框背景层 */
#back_layer1{
position:absolute;
top:247px;
left:-61px;
}
/* 人物图片布局设置 */
#char_imgs{
position:relative;
top:133px;
left:130px;
}
#char1_frame,#char2_frame{
overflow:hidden;/* 超出部分图片不显示 */
}
#char2_frame{
position: relative;
left:-100px;
width:590px;
}
#char1_frame{
width:340px;

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
/* 招聘图标部分设置 */
a{
width: 230px;
height:78px;
}
#recurit_layer{
position: relative;
display: flex;
flex-direction: column;
justify-content: space-between;
top:-140px;
left:230px;
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
width: 230px;
height:78px;
overflow:hidden;/* 超出部分箭头不显示 */
}
#back_rec1,#back_rec2{
  position: relative;
  left:100px;
  height:175px;
}
/* 动态效果 */
/* 箭头动画 */
@keyframes move_img{
15%{
  left:230px;
}
25%{
top:100px;
left:230px;
}
60%{
  top:100px;
left:-200px;
}
65%{
  top:0px;
left:-200px;
}
80%{
  top:0px;
  left:55px;/* 回弹效果 */ 
}
100%{
  top:0px;
  left:30px;
}
}
/* 鼠标悬浮 */ 
a:hover img{
animation-name: move_img;
animation-duration:0.8s;
animation-timing-function: ease-out;
animation-fill-mode:forwards;/*保持最后的状态*/
}
/* 文字动画 */
 /* 鼠标悬浮 */ 
a:hover h6{
transform: translateX(35px);
transition: all 0.8s;
}
/* 鼠标离开 */
.h_leave1,.h_leave2{
transform: translateX(-0.5px);
transition: all 0.8s;
}
/* 背景色切换动画 */
@keyframes move_back {
0% {
  background: linear-gradient(45deg, rgb(61, 123, 230) 0%,  rgb(61, 123, 230) 95%,  transparent 95%);
}
5% {
  background: linear-gradient(
  45deg, rgb(59, 72, 94) 0%,rgb(59, 72, 94) 5%, rgb(61, 123, 230) 5%,rgb(61, 123, 230) 95%,  transparent 95%
)
}
10% {
  background: linear-gradient(
  45deg, rgb(59, 72, 94) 0%,rgb(59, 72, 94) 10%, rgb(61, 123, 230) 10%,rgb(61, 123, 230) 95%,  transparent 95%
)
}
15% {
  background: linear-gradient(
  45deg, rgb(59, 72, 94) 0%,rgb(59, 72, 94) 15%, rgb(61, 123, 230) 15%,rgb(61, 123, 230) 95%,  transparent 95%
)
}
20% {
  background: linear-gradient(
  45deg, rgb(59, 72, 94) 0%,rgb(59, 72, 94) 20%, rgb(61, 123, 230) 20%,rgb(61, 123, 230) 95%,  transparent 95%
)
}
25% {
  background: linear-gradient(
  45deg, rgb(59, 72, 94) 0%,rgb(59, 72, 94) 25%, rgb(61, 123, 230) 25%,rgb(61, 123, 230) 95%,  transparent 95%
)
}
30% {
  background: linear-gradient(
  45deg, rgb(59, 72, 94) 0%,rgb(59, 72, 94) 30%, rgb(61, 123, 230) 30%,rgb(61, 123, 230) 95%,  transparent 95%
)
}
35% {
  background: linear-gradient(
  45deg,rgb(59, 72, 94) 0%,rgb(59, 72, 94) 35%, rgb(61, 123, 230) 35%,rgb(61, 123, 230) 95%,  transparent 95%
)
}
40% {
  background: linear-gradient(
  45deg,rgb(59, 72, 94) 0%,rgb(59, 72, 94) 40%, rgb(61, 123, 230) 40%,rgb(61, 123, 230) 95%,  transparent 95%
)
}
45% {
  background: linear-gradient(
  45deg, rgb(59, 72, 94) 0%,rgb(59, 72, 94) 45%, rgb(61, 123, 230) 45%,rgb(61, 123, 230) 95%,  transparent 95%
)
}
50% {
  background: linear-gradient(
  45deg, rgb(59, 72, 94) 0%,rgb(59, 72, 94) 50%, rgb(61, 123, 230) 50%,rgb(61, 123, 230) 95%,  transparent 95%
)
}
55% {
  background: linear-gradient(
  45deg, rgb(59, 72, 94) 0%,rgb(59, 72, 94) 55%, rgb(61, 123, 230) 55%,rgb(61, 123, 230) 95%,  transparent 95%
)
}
60% {
  background: linear-gradient(
  45deg, rgb(59, 72, 94) 0%,rgb(59, 72, 94) 60%, rgb(61, 123, 230) 60%,rgb(61, 123, 230) 95%,  transparent 95%
)
}
65% {
  background: linear-gradient(
  45deg, rgb(59, 72, 94) 0%,rgb(59, 72, 94) 65%, rgb(61, 123, 230) 65%,rgb(61, 123, 230) 95%,  transparent 95%
)
}
70% {
  background: linear-gradient(
  45deg, rgb(59, 72, 94) 0%,rgb(59, 72, 94) 70%, rgb(61, 123, 230) 70%,rgb(61, 123, 230) 95%,  transparent 95%
)
}
75% {
  background: linear-gradient(
  45deg, rgb(59, 72, 94) 0%,rgb(59, 72, 94) 75%, rgb(61, 123, 230) 75%,rgb(61, 123, 230) 95%,  transparent 95%
)
}
80% {
  background: linear-gradient(
  45deg, rgb(59, 72, 94) 0%,rgb(59, 72, 94) 80%, rgb(61, 123, 230) 80%,rgb(61, 123, 230) 95%,  transparent 95%
)
}
85% {
  background: linear-gradient(
  45deg, rgb(59, 72, 94) 0%,rgb(59, 72, 94) 85%, rgb(61, 123, 230) 85%,rgb(61, 123, 230) 95%,  transparent 95%
)
}
90% {
  background: linear-gradient(
  45deg, rgb(59, 72, 94) 0%,rgb(59, 72, 94) 90%, rgb(61, 123, 230) 90%,rgb(61, 123, 230) 95%,  transparent 95%
)
}
95% {
  background: linear-gradient(
  45deg, rgb(59, 72, 94) 0%,rgb(59, 72, 94) 95%, rgb(61, 123, 230) 95%,rgb(61, 123, 230) 95%,  transparent 95%
)
}
100% {
  background: linear-gradient(
  45deg, rgb(59, 72, 94) 0%,  rgb(59, 72, 94) 95%,  transparent 95%
);
}
}
/* 鼠标悬浮 */
a:hover .recruit{
animation-name: move_back;
animation-duration: 0.27s;
animation-timing-function: ease;
animation-fill-mode:forwards;

}
/* 鼠标离开 */
.back_leave1{
animation-name: move_back;
animation-duration:270ms;
animation-timing-function: linear;
animation-direction:reverse;
animation-fill-mode:forwards;
animation-iteration-count:infinite;
}
.back_leave2{
animation-name: move_back;
animation-duration:270ms;
animation-timing-function: linear;
animation-direction:reverse;
animation-fill-mode:forwards;
animation-iteration-count:infinite;
}
/* 文字部分 */
.text_rec{
position:absolute;
top:15px;
left:25px;
}
#text_rec2{
position: absolute;
top:110px;
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
position: absolute;
top:145px;
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
height:560px;
display: flex;
flex-direction: column;
justify-content:flex-start;
margin-top: 20px;
}
.text_frame{
position: relative;
width:500px;
height:110px;
background-image: url('../components/img/normal-frame.png');/* 文字框背景 */
background-size: 500px 110px;
background-repeat: no-repeat;
overflow:hidden;
/* margin-bottom: 15px; */
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
font-size: 0.75rem;
font-weight:400;
color:rgb(100, 100, 100);
}
/* 框装饰 */
.blue{
position: relative;
bottom:85px;
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

/* 鼠标悬浮 */
/* 鼠标悬浮样式变化 */
.hover_text_frame{
width:540px;
height:135px;
background-size: 540px 135px;
}
/* 鼠标悬浮动画效果 */
/* 悬浮框 */
.hover_frame{
position: relative;
top:-68px;
/* left:-550px; */
width:540px;
height:140px;
background-image: url('../components/img/hover-frame.png');/* 文字框背景 */
background-size: 540px 140px;
background-repeat: no-repeat;
margin-bottom: 15px;
animation-name:hover_frame ;
}
/* 进入动画 */
@keyframes hover_frame {
  from {
      left:-550px;
  }
  to {
    left:0px;
  }
}
.v-enter-active {
  animation-name: hover_frame;
  animation-duration: 0.3s;
}
/* 离开：始位置 */
.v-leave {
  transform: translateX(0%);

  transition: ease-in 0.3s;
}
/* 离开：末位置 */
.v-leave-to {
  transform: translateX(-100%);

   transition: ease-in 0.3s;
}



/* 悬浮框中文字 */
.hover_texts{
position: relative;
left: 30px;
top:18px;
width:500px;
display: flex;
justify-content:space-around;

}
h7{
font-size:0.9rem;
font-weight: bold;
color: rgba(45, 119, 222, 0.801);
}
p{
position: relative;
top:8px;
width:130px;
font-size:0.75rem;
align-content: center;
font-weight:400;
color:rgb(100, 100, 100);
}
/* 右侧背景图表设置 */
/* 右上careers图标 */
#careers{
position: absolute;
right: 1rem;
width: 10rem;
}
/* 页脚样式调整 */
#foot{
position: absolute;
width:100vw;
bottom: -40vh;
}
/* 切页动画设置 */
/* 左侧内容 */
.flag1 {
  transition: all 0.6s;
  transform: translateY(300px);
}
/* .flag11 {
  transition: all 0.6s;
  transform: translateY(-300px);
} */
/* 右侧内容 */
.flag2 {
  transition: ease-out 0.6s;
  transform: translateY(300px);
}
/* 纵向 */
.act1{
  transform: translateY(0%);
}
.act11{
  transition: all 0.6s;
  transform: translateY(30%);
}
/* 右上图标 */
.flag_careers{
  transition: ease-out 0.6s;
  transform: translateX(40px);
}
/* 横向 */
.act2{
  transform: translateX(0%);
}
</style>
