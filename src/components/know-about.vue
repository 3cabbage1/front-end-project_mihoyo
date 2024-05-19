<script setup>
import { RouterLink, RouterView } from 'vue-router'

// import { onMounted } from 'vue'

// import Swiper from 'swiper'
// import 'swiper/swiper-bundle.css'

// onMounted(() => {
//   new Swiper('.swiper-container', {
//     direction: 'vertical',
//     followFinger: false,
//     speed: 800,
//     mousewheel: true,
//     pagination: {
//       el: '.swiper-pagination'
//     },
//     on: {
//       init(swiper) {
//         const slide = swiper.slides.eq(0)
//         slide.addClass('ani-slide')
//       },
//       transitionStart(swiper) {
//         for (let i = 0; i < swiper.slides.length; i++) {
//           const slide = swiper.slides.eq(i)
//           slide.removeClass('ani-slide')
//         }
//       },
//       transitionEnd(swiper) {
//         const slide = swiper.slides.eq(swiper.activeIndex)
//         slide.addClass('ani-slide')
//       }
//     }
//   })
// })
// 在你的 Vue 3 组件中
import { ref, onMounted, onUnmounted } from 'vue'

const isActive = ref(false)

const toggleActive = () => {
  isActive.value = !isActive.value
}

onMounted(() => {
  const elements = document.querySelectorAll('.home-about-cate-wrap')
  elements.forEach((element) => {
    element.addEventListener('mouseenter', toggleActive)
    element.addEventListener('mouseleave', toggleActive)
  })
})

onUnmounted(() => {
  const elements = document.querySelectorAll('.home-about-cate-wrap')
  elements.forEach((element) => {
    element.removeEventListener('mouseenter', toggleActive)
    element.removeEventListener('mouseleave', toggleActive)
  })
})

const rotateSpan = (event) => {
  const element = event.currentTarget.querySelector('.home-about-cate-wrap')
  element.style.transform = 'rotateX(90deg)'
}

const resetSpan = (event) => {
  const element = event.currentTarget.querySelector('.home-about-cate-wrap')
  element.style.transform = 'none'
}
const handleMouseOver = (event) => {
  toggleActive()
  rotateSpan(event)
}
const handleMouseleft = (event) => {
  toggleActive()
  resetSpan(event)
}
</script>

<template>
  <div class="fp-page__wrap">
    <!-----轮播的选择---->
    <!-- <div class="swiper-container swiper-container-initialized swiper-container-vertical"> -->
    <div class="home-about-cates">
      <div class="home-about-cates-wrap home-about-cates-wrap--active">
        <div class="home-about-cate">
          <div
            class="home-about-cate-wrap"
            @mouseover="handleMouseOver"
            @mouseleave="handleMouseleft"
            :class="{ 'home-about-cates-wrap--active': isActive }"
            style="transform: translateY(-0.6rem); transition-duration: 0ms"
          >
            <div class="span-wrapper">
              <span> 关于米哈游 </span>
            </div>
            <div class="span-wrapper">
              <span class="tab-dark"> 关于米哈游 </span>
            </div>
            <div class="span-wrapper"><span> 关于米哈游 </span></div>
          </div>
        </div>
      </div>
      <RouterLink to="/homehistory">
        <div class="home-about-cates-wrap">
          <div class="home-about-cate">
            <div
              class="home-about-cate-wrap"
              @mouseover="handleMouseOver"
              @mouseleave="handleMouseleft"
              :class="{ 'home-about-cates-wrap--active': isActive }"
              style="transform: translateY(-0.6rem); transition-duration: 0ms"
            >
              <div class="span-wrapper"><span> 发展历程 </span></div>
              <div class="span-wrapper">
                <span class="tab-dark"> 发展历程 </span>
              </div>
              <div class="span-wrapper"><span> 发展历程 </span></div>
            </div>
          </div>
        </div></RouterLink
      ><RouterView />

      <div class="home-about-cates-wrap">
        <div class="home-about-cate">
          <div
            class="home-about-cate-wrap"
            @mouseover="handleMouseOver"
            @mouseleave="handleMouseleft"
            :class="{ 'home-about-cates-wrap--active': isActive }"
            style="transform: translateY(-0.6rem); transition-duration: 0ms"
          >
            <div class="span-wrapper"><span> 荣誉资质 </span></div>
            <div class="span-wrapper">
              <span class="tab-dark"> 荣誉资质 </span>
            </div>
            <div class="span-wrapper"><span> 荣誉资质 </span></div>
          </div>
        </div>
      </div>
    </div>

    <div class="home-about-container">
      <div class="about-intro">
        <div class="about-intro__vision">
          <div class="about-intro__vision-title">
            我们的愿景
            <b> Our Vision</b>
          </div>
          <div class="about-intro__vision-slg">
            <div class="anim">
              <p style="white-space: pre-wrap">2030年，打造出全球十亿人</p>
              <p style="white-space: pre-wrap; text-align: right">愿意生活在其中的虚拟世界。</p>
            </div>
          </div>
        </div>

        <div class="about-intro__mihoyo">
          <div class="about-intro__mihoyo-title">
            关于米哈游
            <b> About miHoYo</b>
          </div>
          <div class="about-intro__mihoyo-desc">
            <div>
              <p style="white-space: pre-wrap">
                米哈游成立于2011年，致力于为用户提供美好的、超出预期的产品与内容。米哈游陆续推出了多款高品质人气产品，包括《崩坏学园2》、《崩坏3》、《未定事件簿》、《原神》、《崩坏：星穹铁道》，动态桌面软件《人工桌面》以及社区产品《米游社》，并围绕原创IP打造了动画、音乐及周边等多元产品。即将上线的《绝区零》等同样受到全球玩家广泛关注。
              </p>
              <p style="white-space: pre-wrap">
                秉承着“<strong>技术宅拯救世界</strong>”的使命，米哈游始终致力于技术研发、探索前沿科技，在卡通渲染、人工智能、云游戏技术等领域积累了先进的技术能力。
              </p>
              <p style="white-space: pre-wrap">
                米哈游总部位于中国上海，并在新加坡、美国、加拿大、日本、韩国等国家和地区进行全球化布局。目前，公司员工5,000人，来自世界知名游戏/互联网/科技公司。
              </p>
              <p style="white-space: pre-wrap; min-height: 1.5em"></p>
              <p style="white-space: pre-wrap; min-height: 1.5em"></p>
              <p style="white-space: pre-wrap">
                <strong>米哈游的研发理念</strong>
              </p>
              <p style="white-space: pre-wrap">
                Something New | Something Exciting | Something Out of Imagination
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/*header*/
.home {
  position: relative;

  width: 100%;
  background-color: #f8f9fb;
  height: 100%;
  font-family: 'Microsoft YaHei', 微软雅黑, 'MicrosoftJhengHei', PingFang, MingLiu, sans-serif;
}
.home-about {
  height: 100%;
  background-color: #f8f9fb;
  width: 100%;
  overflow: hidden;
}
/*swiper设置 */

/*左侧信息*/
.aside-slogan[data-v-5dd2d15e] {
  position: absolute;

  left: 1rem;
  bottom: 7.38rem;
}
.aside-slogan__line[data-v-5dd2d15e] {
  position: absolute;
  top: -13rem;
  left: -0.2rem;
  width: 10rem;
  height: 20.28rem;
  background: url(./components/img/line.a3e37b6.png) no-repeat center center/100% 100%;
}
.aside-slogan__text[data-v-5dd2d15e] {
  position: relative;
  top: 6rem;
  left: 2.2rem;
  z-index: 1;
  width: 0.4rem;
}
/*右侧 aboutus*/
.home-about-decoration {
  position: absolute;
  top: 0.9rem;
  right: 1rem;
  width: 10rem;
}
.home-about-decoration {
  -webkit-transition-delay: 2000ms;
  -o-transition-delay: 2000ms;
  transition-delay: 2000ms;
  -webkit-transition:
    opacity 1500ms,
    -webkit-transform 1500ms;
  transition:
    opacity 1500ms,
    -webkit-transform 1500ms;
  -o-transition:
    opacity 1500ms,
    transform 1500ms;
  transition:
    opacity 1500ms,
    transform 1500ms;
  transition:
    opacity 1500ms,
    transform 1500ms,
    -webkit-transform 1500ms;
}

/* home-about-cates */
.home-about-cates {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
  justify-content: flex-end;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 10rem;
  margin-right: 2rem;
  top: 50px;
  right: 160px;
  position: relative;
}
.home-about-cates {
  -webkit-transition: -webkit-transform 800ms;
  transition: -webkit-transform 800ms;
  -o-transition: transform 800ms;
  transition: transform 800ms;
  transition:
    transform 800ms,
    -webkit-transform 800ms;
  -webkit-transition-delay: 200ms;
  -o-transition-delay: 200ms;
  transition-delay: 200ms;
}
.home-about-cates-wrap {
  /**应用于子元素，用于包装关于米哈游的内容 */
  position: relative;

  /* overflow: hidden; */ /**超出内容部分隐藏。 */
  margin-right: -1px;
  cursor: pointer; /*可以点击 */
}
.home-about-cate {
  height: 20px;
  width: 120px;
  overflow: hidden;
}
.home-about-cate-wrap {
  font-size: 0;
  color: #676b73;
  white-space: nowrap; /**防止文本换行 */
  position: relative;
  height: 20px;
  width: 40px;

  -webkit-transform: translateY(-0.6rem); /**设置垂直方向上的位移，可能是为了添加动画效果 */
  -ms-transform: translateY(-0.6rem);
  transform: translateY(-0.6rem);
}

.home-about-cates-wrap::before,
.home-about-cates-wrap::after {
  /**用于在 .home-about-cates-wrap 元素的前后添加一个竖线 */
  content: '';
  position: absolute;
  top: 50%;
  width: 1px;
  height: 20px;
  background: #707173;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
.home-about-cates-wrap::before {
  left: 0;
}
.home-about-cates-wrap::after {
  right: 0;
}

.home-about-cates-wrap:hover::before,
.home-about-cates-wrap:hover::after,
.home-about-cates-wrap--active::before,
.home-about-cates-wrap--active::after {
  background-color: #3778e5;
}
.home-about-cates-wrap:hover + .home-about-cates-wrap::before,
.home-about-cates-wrap--active + .home-about-cates-wrap::before {
  background-color: #3778e5;
}
.home-about-cates-wrap--active {
  /**被点击选中 */
  color: #fff;
}
.home-about-cates-wrap--active .home-about-cate-wrap {
  -webkit-transform: translateY(-0.6rem);
  -ms-transform: translateY(-0.6rem);
  transform: translateY(-0.6rem);
}
.home-about-cates-wrap--active span {
  color: #fff;
  background-color: #3778e5;
}

.home-about-cate .span-wrapper {
  height: 40px;
  width: 120px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  overflow: hidden;
}
.home-about-cate span {
  display: block;
  font-size: 0.9rem;
  height: 20px;
  line-height: 1rem;
  position: relative;
  padding: 0 2rem;
}
.home-about-cate .tab-dark {
  color: #fff;
  background: #3778e5;
}
.about-fade-enter-active,
.about-fade-leave-active {
  -webkit-transition: opacity 700ms;
  -o-transition: opacity 700ms;
  transition: opacity 700ms;
}
.about-fade-enter,
.about-fade-leave-to {
  opacity: 0;
}

/*内容*/
.home-about-container {
  position: relative;
  width: 1000px;
  height: 800px;
  bottom: 90px;
  left: 100px;
}
.home-about-container > div {
  position: absolute;
  left: 50%;
  top: 0;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
}
.home-about-container {
  -webkit-transition: -webkit-transform 800ms;
  transition: -webkit-transform 800ms;
  -o-transition: transform 800ms;
  transition: transform 800ms;
  transition:
    transform 800ms,
    -webkit-transform 800ms;
  -webkit-transition-delay: 200ms;
  -o-transition-delay: 200ms;
  transition-delay: 200ms;
}

.about-intro {
  width: 98%;
  height: 100%;
  padding-left: 19rem;
}
.about-intro img {
  width: 100%;
}
.about-intro__vision {
  max-height: 400px;
}
.about-intro__vision-title,
.about-intro__mihoyo-title {
  position: relative;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  font-weight: bold;
  color: #242933;
}
.about-intro__vision-title b,
.about-intro__mihoyo-title b {
  position: absolute;
  left: 6rem;
  bottom: -0.6rem;
  font-size: 0.5rem;
  font-weight: normal;
  color: #ccc;
  letter-spacing: 0.1em;
  font-family: HarmonyOS, Arial, Helvetica, sans-serif;
  text-transform: uppercase;
}
/**彩字设置 */
.about-intro__vision-slg {
  position: relative;
  display: inline-block;

  width: calc(100% - 15.76rem);
  padding-left: 3.2rem;
  width: 730px;
  margin-bottom: 1.4rem;
  margin-left: 3.64rem;
  font-size: 2.3rem;
  line-height: 2.3rem;
  letter-spacing: 0.1em;
  font-weight: lighter;
  color: #4ea1d9;
}
.about-intro__vision-slg.pureColor {
  background: none;
  pointer-events: none;
}
.about-intro__vision-slg.pureColor em {
  background: none;
  -webkit-background-clip: none;
}
.about-intro__vision-slg strong {
  color: #74d5ee;
  font-weight: inherit;
}
.about-intro__vision-slg em {
  color: #418ae0;
  font-style: normal;
  background-image: -o-linear-gradient(225deg, #dc8bc3 0, #418ae0 100%);
  background-image: linear-gradient(-135deg, #dc8bc3 0, #418ae0 100%);
  -webkit-text-fill-color: rgba(0, 0, 0, 0);
  -webkit-background-clip: text;
}
.about-intro__vision-slg u {
  color: #dc8bc3;
  text-decoration: none;
}
.about-intro__vision-slg::before,
.about-intro__vision-slg::after {
  content: '';
  position: absolute;
  width: 0.38rem;
  height: 1.25rem;
  background-repeat: 0;
  background-size: cover;
  background-position: center center;
}
.about-intro__vision-slg::before {
  left: 0;
  top: 0;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAZCAYAAAAMhW+1AAAAAXNSR0IArs4c6QAAACZJREFUOE9j9Ft48z8DHsBIXQWb4tUZ0W1DsWJUASR4RsNhcIcDADoPYG82O/IpAAAAAElFTkSuQmCC);
}
.about-intro__vision-slg::after {
  right: 0;
  bottom: 0;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAZCAYAAAAMhW+1AAAAAXNSR0IArs4c6QAAAChJREFUOE9jZMACrsx98h8mzDiqABwCo+EASQhDIxyQUzC2BMxIsQIAEOdTTmAeOPYAAAAASUVORK5CYII=);
}
.about-intro__vision-slg .anim {
  background-image: -o-linear-gradient(
    225deg,
    #418ae0,
    #56a0d8,
    #dc8bc3,
    #56a0d8,
    #418ae0,
    #56a0d8,
    #dc8bc3,
    #56a0d8,
    #418ae0
  );
  background-image: linear-gradient(
    -135deg,
    #418ae0,
    #56a0d8,
    #dc8bc3,
    #56a0d8,
    #418ae0,
    #56a0d8,
    #dc8bc3,
    #56a0d8,
    #418ae0
  );
  background-image: -ms-linear-gradient(
    -135deg,
    #418ae0,
    #56a0d8,
    #dc8bc3,
    #56a0d8,
    #418ae0,
    #56a0d8,
    #dc8bc3,
    #56a0d8,
    #418ae0
  );
  -webkit-text-fill-color: rgba(0, 0, 0, 0);
  -webkit-background-clip: text;
  background-size: 200% 100%;
  -webkit-animation: masked-animation 3s infinite linear;
  animation: masked-animation 3s infinite linear;
}
@-webkit-keyframes masked-animation {
  0% {
    background-position: 0 -100%;
  }
  100% {
    background-position: -100% 0;
  }
}
@keyframes masked-animation {
  0% {
    background-position: 0 -100%;
  }
  100% {
    background-position: -100% 0;
  }
}
.about-intro__mihoyo-desc {
  text-align: left;
  margin-bottom: 0.7rem;
  font-size: 0.8rem;
  color: #3d424d;
  line-height: 1.34rem;
  height: 2rem;
}
.about-intro__mihoyo-desc p {
  margin-bottom: 0.1rem;
}
.about-intro__mihoyo-desc strong {
  color: #3778e5;
  font-weight: bold;
}
</style>
