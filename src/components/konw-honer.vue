<script setup>
import home_about_decoration from '@/components/img/decoration.b195643.png'
import aside_slogan__line from '@/components/img/line.a3e37b6.png'
</script>

<template>
  <div class="home">
    <div class="home-about fp-page">
      <img :src="home_about_decoration" class="home-about-decoration" />
      <div data-v-5dd2d15e="" class="aside-slogan aside-slogan">
        <img data-v-5dd2d15e="" :src="aside_slogan__line" alt="miHoYo" class="aside-slogan__line" />
        <img
          data-v-5dd2d15e=""
          src="data:image/png;base64,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"
          alt="miHoYo"
          class="aside-slogan__text"
        />
      </div>

      <div class="fp-page__wrap">
        <div class="home-about-cates">
          <div class="home-about-cates-wrap">
            <div class="home-about-cate">
              <div
                class="home-about-cate-wrap"
                style="transform: translateY(-0.6rem); transition-duration: 0ms"
              >
                <div class="span-wrapper"><span> 关于米哈游 </span></div>
                <div class="span-wrapper"><span class="tab-dark"> 关于米哈游 </span></div>
                <div class="span-wrapper"><span> 关于米哈游 </span></div>
              </div>
            </div>
          </div>
          <div class="home-about-cates-wrap">
            <div class="home-about-cate">
              <div
                class="home-about-cate-wrap"
                style="transform: translateY(-0.6rem); transition-duration: 0ms"
              >
                <div class="span-wrapper"><span> 发展历程 </span></div>
                <div class="span-wrapper"><span class="tab-dark"> 发展历程 </span></div>
                <div class="span-wrapper"><span> 发展历程 </span></div>
              </div>
            </div>
          </div>
          <div class="home-about-cates-wrap home-about-cates-wrap--active">
            <div class="home-about-cate">
              <div
                class="home-about-cate-wrap"
                style="transform: translateY(-0.3rem); transition-duration: 300ms"
              >
                <div class="span-wrapper"><span> 荣誉资质 </span></div>
                <div class="span-wrapper"><span class="tab-dark"> 荣誉资质 </span></div>
                <div class="span-wrapper"><span> 荣誉资质 </span></div>
              </div>
            </div>
          </div>
        </div>
        <div class="home-about-container">
          <div class="about-honor">
            <div class="about-honor-title">
              荣誉资质
              <b> Honors &amp; Awards</b>
            </div>
            <div class="about-honor-container">
              <div class="about-honor-container__content">
                <div
                  class="about-honor-container__data hasTransition"
                  style="transform: translateX(0px)"
                >
                  <div class="about-honor-list">
                    <div class="about-honor-item">
                      <div class="about-honor-item__title">原神 - 2023 年度大奖</div>
                      <div class="about-honor-item__origin">索尼PS年度游戏</div>
                    </div>
                    <div class="about-honor-item">
                      <div class="about-honor-item__title">
                        崩坏：星穹铁道 - TGA 2023最佳移动游戏
                      </div>
                      <div class="about-honor-item__origin">TGA（The Game Awards）</div>
                    </div>
                    <div class="about-honor-item">
                      <div class="about-honor-item__title">崩坏：星穹铁道 - 最佳创新游戏大奖</div>
                      <div class="about-honor-item__origin">第三届中国游戏创新大赛</div>
                    </div>
                    <div class="about-honor-item">
                      <div class="about-honor-item__title">崩坏：星穹铁道 - 年度移动游戏</div>
                      <div class="about-honor-item__origin">App Store Awards</div>
                    </div>
                    <div class="about-honor-item">
                      <div class="about-honor-item__title">
                        崩坏：星穹铁道 - 年度最佳游戏 、最佳剧情游戏
                      </div>
                      <div class="about-honor-item__origin">Google Play Awards</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="about-honor-btns" style="display: none">
                <button class="about-honor-btns__prev disabled"></button>
                <button class="about-honor-btns__next disabled"></button>
              </div>
              <div class="about-honor-container__tool">
                <div
                  class="swiper-container about-honor-swiper swiper-container-initialized swiper-container-vertical swiper-container-free-mode"
                >
                  <div
                    class="swiper-wrapper"
                    style="transform: translate3d(0px, 0px, 0px); transition-duration: 300ms"
                  >
                    <div class="swiper-slide swiper-slide-active">
                      <div class="about-honor-year about-honor-year--active">2023</div>
                    </div>
                    <div class="swiper-slide swiper-slide-next">
                      <div class="about-honor-year">2022</div>
                    </div>
                    <div class="swiper-slide"><div class="about-honor-year">2021</div></div>
                    <div class="swiper-slide"><div class="about-honor-year">2020</div></div>
                    <div class="swiper-slide"><div class="about-honor-year">2019</div></div>
                    <div class="swiper-slide"><div class="about-honor-year">2018</div></div>
                    <div class="swiper-slide"><div class="about-honor-year">2017</div></div>
                    <div class="swiper-slide"><div class="about-honor-year">2016</div></div>
                    <div class="swiper-slide"><div class="about-honor-year">2015</div></div>
                    <span class="line" style="transform: translateY(0px)"></span>
                  </div>
                  <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.about-honor-title {
  position: relative;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  font-weight: bold;
  left: 180px;
  color: #242933;
}
.about-honor-title b {
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
.about-honor-swiper {
  width: 0.2rem;
  height: auto;

  max-height: 100%;
}
.about-honor-year {
  font-size: 1em;
  font-weight: bold;
  text-align: center;
  position: relative;
  color: #9e9e9e;
  font-family: HarmonyOS, Arial, Helvetica, sans-serif;
}
.about-honor-container {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  left: 180px;
  width: 60rem;
  padding-right: 1rem;
  height: 23.78rem;
}
.about-honor-container__tool {
  position: absolute;
  right: 0;
  left: 800px;
  width: 1rem;
  height: 100%;
  border-left: 1px solid #2c2c2c;
}
.about-honor-container__tool .line {
  position: absolute;
  top: 0;
  left: 0;
  width: 0.08rem;
  height: 0.34rem;
  background: #3778e5;
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
  -webkit-transition: -webkit-transform 500ms ease-out;
  transition: -webkit-transform 500ms ease-out;
  -o-transition: transform 500ms ease-out;
  transition: transform 500ms ease-out;
  transition:
    transform 500ms ease-out,
    -webkit-transform 500ms ease-out;
}
.about-honor-container__tool .about-honor-swiper {
  position: relative;
  margin-left: -2px;
}
.about-honor-container__tool .about-honor-swiper .swiper-slide {
  height: 0.6rem !important;
  cursor: pointer;
}
.about-honor-container__tool .about-honor-swiper .about-honor-year {
  height: 100%;
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
  -webkit-transition: -webkit-transform 300ms ease-out;
  transition: -webkit-transform 300ms ease-out;
  -o-transition: transform 300ms ease-out;
  transition: transform 300ms ease-out;
  transition:
    transform 300ms ease-out,
    -webkit-transform 300ms ease-out;
}
.about-honor-container__tool .about-honor-swiper .about-honor-year:hover {
  color: #3778e5;
}
.about-honor-container__tool .about-honor-swiper .about-honor-year--active {
  color: #3778e5;
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}
.about-honor-container__content {
  position: relative;
  width: 80rem;
  height: 23.78rem;
  padding: 0.4rem 0;
  margin-top: -0.4rem;
  overflow: hidden;
}
.about-honor-container__data {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.about-honor-container__data.hasTransition {
  -webkit-transition: -webkit-transform 500ms ease-in-out;
  transition: -webkit-transform 500ms ease-in-out;
  -o-transition: transform 500ms ease-in-out;
  transition: transform 500ms ease-in-out;
  transition:
    transform 500ms ease-in-out,
    -webkit-transform 500ms ease-in-out;
}
.about-honor-list {
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -ms-flex-line-pack: start;
  align-content: flex-start;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  margin-top: -0.1rem;
}
.about-honor-item {
  position: relative;
  width: 19rem;
  height: 10.2rem;
  padding: 0 0.3rem;
  margin-right: 5.1rem;
  margin-top: -1.5rem;
  text-align: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  line-height: 1.4;
}
.about-honor-item:nth-child(even) {
  margin-right: 0;
}
.about-honor-item::before,
.about-honor-item::after {
  content: '';
  position: absolute;
  top: 37%;
  margin-top: -0.36rem;
  width: 1.3rem;
  height: 3.72rem;
  background-repeat: 0;
  background-size: cover;
  background-position: center center;
}
.about-honor-item::before {
  left: 0;
  background-image: url(data:image/png;base64,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);
}
.about-honor-item::after {
  right: 0;
  background-image: url(data:image/png;base64,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);
  -webkit-transform: scaleX(-1);
  -ms-transform: scaleX(-1);
  transform: scaleX(-1);
}
.about-honor-item__title,
.about-honor-item .about-honor-hover__title {
  font-size: 0.76rem;
  font-weight: bold;
  color: #242933;
  margin-bottom: 0.3rem;
}
.about-honor-item__origin,
.about-honor-item .about-honor-hover__origin {
  color: #676b73;
  font-size: 0.64rem;
}
.about-honor-btns {
  position: absolute;
  right: 1.1rem;
  bottom: 0.02rem;
  z-index: 2;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.about-honor-btns__prev,
.about-honor-btns__next {
  width: 0.38rem;
  height: 0.45rem;
  margin-right: 0.1rem;
  font-size: 0;
  line-height: 0.45rem;
  text-align: center;
  border: 1px solid #868686;
  cursor: pointer;
}
.about-honor-btns__prev.disabled,
.about-honor-btns__next.disabled {
  opacity: 0.4;
  pointer-events: none;
}
.about-honor-btns__prev:hover,
.about-honor-btns__next:hover {
  background-color: #3778e5;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAASCAYAAABit09LAAAAAXNSR0IArs4c6QAAAJNJREFUKFOF0jEOwjAMheHfKudAohJnoYemAjGVE3COTnQzCnUrxXHSLFk+K/aLhYOjql0i0nKqegbuwFKFhh5AD7xC6NAbuBUwRCJzBmsoG6aFdniE/tBy+gBXYG1cZPaxeTgBQwhTpXs6xPvUhp/ABShwFM+Gs35rgRe49YU5rm2P6zleiq3Y8Ah8m/to0Z3S/QPLCV9Gvg2wEQAAAABJRU5ErkJggg==);
  border-color: rgba(0, 0, 0, 0);
}
.about-honor-btns__prev {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAASCAYAAABit09LAAAAAXNSR0IArs4c6QAAAKVJREFUKFOF0jEOAiEQBdA/aOAWJmtiwyno9ALcVqOx0oKac1hpaWYDm4UdgIbmDZn5DGFwvPc7JtRz1tqDUuoK4NeECd0BHAE8RbhGRPTWWp83UEIhhE8BW6gYpocWOEIz5JxijBHAKTfOPdWxFRDAyxhzESFXVpmJeJk64QeASXpZimfGdb+twDe494UFHi1F7lleipxhGvAG4NvdRy5wzu35/gN9Q1JfwOUE0gAAAABJRU5ErkJggg==)
    center/0.1rem 0.18rem no-repeat;
}
.about-honor-btns__next {
  -webkit-transform: scaleX(-1);
  -ms-transform: scaleX(-1);
  transform: scaleX(-1);
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAASCAYAAABit09LAAAAAXNSR0IArs4c6QAAAKVJREFUKFOF0jEOAiEQBdA/aOAWJmtiwyno9ALcVqOx0oKac1hpaWYDm4UdgIbmDZn5DGFwvPc7JtRz1tqDUuoK4NeECd0BHAE8RbhGRPTWWp83UEIhhE8BW6gYpocWOEIz5JxijBHAKTfOPdWxFRDAyxhzESFXVpmJeJk64QeASXpZimfGdb+twDe494UFHi1F7lleipxhGvAG4NvdRy5wzu35/gN9Q1JfwOUE0gAAAABJRU5ErkJggg==)
    center/0.1rem 0.18rem no-repeat;
}
.about-honor .honor-fadeout-top-leave-active {
  -webkit-transition:
    opacity 500ms,
    -webkit-transform 500ms;
  transition:
    opacity 500ms,
    -webkit-transform 500ms;
  -o-transition:
    opacity 500ms,
    transform 500ms;
  transition:
    opacity 500ms,
    transform 500ms;
  transition:
    opacity 500ms,
    transform 500ms,
    -webkit-transform 500ms;
}
.about-honor .honor-fadeout-top-leave-to {
  opacity: 0;
  -webkit-transform: translateY(0.6rem);
  -ms-transform: translateY(0.6rem);
  transform: translateY(0.6rem);
}
.about-honor .honor-fadeout-top-enter-active {
  -webkit-transition:
    opacity 500ms,
    -webkit-transform 500ms;
  transition:
    opacity 500ms,
    -webkit-transform 500ms;
  -o-transition:
    opacity 500ms,
    transform 500ms;
  transition:
    opacity 500ms,
    transform 500ms;
  transition:
    opacity 500ms,
    transform 500ms,
    -webkit-transform 500ms;
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
}
.about-honor .honor-fadeout-top-enter {
  opacity: 0;
  -webkit-transform: translateY(-0.6rem);
  -ms-transform: translateY(-0.6rem);
  transform: translateY(-0.6rem);
}
.about-honor .honor-fadeout-bottom-leave-active {
  -webkit-transition:
    opacity 500ms,
    -webkit-transform 500ms;
  transition:
    opacity 500ms,
    -webkit-transform 500ms;
  -o-transition:
    opacity 500ms,
    transform 500ms;
  transition:
    opacity 500ms,
    transform 500ms;
  transition:
    opacity 500ms,
    transform 500ms,
    -webkit-transform 500ms;
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
}
.about-honor .honor-fadeout-bottom-leave-to {
  opacity: 0;
  -webkit-transform: translateY(-0.6rem);
  -ms-transform: translateY(-0.6rem);
  transform: translateY(-0.6rem);
}
.about-honor .honor-fadeout-bottom-enter-active {
  -webkit-transition:
    opacity 500ms,
    -webkit-transform 500ms;
  transition:
    opacity 500ms,
    -webkit-transform 500ms;
  -o-transition:
    opacity 500ms,
    transform 500ms;
  transition:
    opacity 500ms,
    transform 500ms;
  transition:
    opacity 500ms,
    transform 500ms,
    -webkit-transform 500ms;
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
}
.about-honor .honor-fadeout-bottom-enter {
  opacity: 0;
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
}

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
} /*swiper设置 */
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

/*左侧信息*/
.aside-slogan[data-v-5dd2d15e] {
  position: absolute;
  left: -9.5rem;
  top: 13.38rem;
}
.aside-slogan__line[data-v-5dd2d15e] {
  position: relative;
  top: -4rem;
  left: 9rem;
  width: 13rem;
  height: 24.28rem;
  background: url(./components/img/line.a3e37b6.png) no-repeat center center/100% 100%;
}
.aside-slogan__text[data-v-5dd2d15e] {
  position: relative;
  top: 9rem;
  left: 0rem;
  z-index: 1;
  width: 0.5rem;
}
/*右侧 aboutus*/
.home-about-decoration {
  position: absolute;

  top: 0.9rem;
  right: 0rem;
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
  position: relative; /*
overflow: hidden; */ /**超出内容部分隐藏。 */
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
  -webkit-transform: translateY(-0.6rem);
  /**设置垂直方向上的位移，可能是为了添加动画效果 */
  -ms-transform: translateY(-0.6rem);
  transform: translateY(-0.6rem);
}
.home-about-cates-wrap::before,
.home-about-cates-wrap::after {
  /**用于在
.home-about-cates-wrap 元素的前后添加一个竖线 */
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
</style>
