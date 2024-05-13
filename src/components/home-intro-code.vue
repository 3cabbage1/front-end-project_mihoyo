<script setup>
import home_about_decoration from '../components/img/decoration.b195643.png'
import aside_slogan__line from '../components/img/line.a3e37b6.png'

//import Swiper from "swiper";
//import "swiper/swiper-bundle.css";

////import { onMounted } from "vue";

///onMounted(() => {
// new Swiper(".swiper-container", {
// Swiper 的配置选项
// 例如：
// });
//});
</script>

<template>
  <div class="home">
    <div
      class="swiper-container home-swiper swiper-container-initialized swiper-container-vertical"
    >
      <div
        class="swiper-wrapper"
        style="transition-duration: 0ms; transform: translate3d(0px, -1528px, 0px)"
      >
        <div class="swiper-slide" style="height: 764px">
          <div class="home-index fp-page">
            <div class="fp-page__wrap">
              <div class="home-index-logo">
                <img
                  src="data:image/png;base64,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"
                  alt=""
                />
              </div>
              <div class="home-index-action">
                <div class="home-index-btn"><b></b></div>
              </div>
              <div data-v-162f564a="" class="scroll-btn scroll-tip">
                <div data-v-162f564a="" class="scroll-btn__mouse"></div>
                <div data-v-162f564a="" class="scroll-btn__arrow">
                  <img
                    data-v-162f564a=""
                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSImI3g3QkFEOyYjeDU5MzQ7XyYjeDYyRjc7JiN4OEQxRDtfMV8iDQoJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgOCAxMSINCgkgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgOCAxMTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGcgaWQ9IiYjeDdCQUQ7JiN4NTkzNDtfJiN4NjJGNzsmI3g4RDFEOyI+DQoJPGc+DQoJCTxwb2x5Z29uIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtmaWxsOiNGRkZGRkY7IiBwb2ludHM9IjUsNy45OTggNSwwIDMuMDAxLDAgMy4wMDEsOCAwLDQuOTk5IDAsNi45OTkgDQoJCQkzLjAwMSwxMCA0LjAzMywxMSA1LDkuOTk4IDgsNi45OTkgOCw0Ljk5OSAJCSIvPg0KCTwvZz4NCjwvZz4NCjwvc3ZnPg0K"
                    alt="miHoYo"
                  />
                </div>
                <div data-v-162f564a="" class="scroll-btn__line" style="display: none"></div>
              </div>
            </div>
            <!--<div class="home-index-bg">
              <video
                src="https://webstatic.mihoyo.com/upload/op-public/2021/08/12/c7f405d6cbb03e5c668a12d3e0de290a_2683598109381103734.mp4"
                poster="https://webstatic.mihoyo.com/upload/op-public/2021/08/12/7a388979f57b0943e38a4fd33ea6d593_3621961254475262927.png"
                autoplay="autoplay"
                autobuffer=""
                x5-video-player-type="h5"
                x-webkit-airplay=""
                playsinline=""
                webkit-playsinline=""
                loop="loop"
                muted="muted"
              ></video>
            </div>-->
            <!---->
            <div class="home-index-bg__mask"></div>
          </div>
        </div>
        <div class="swiper-slide swiper-slide-prev" style="height: 764px">
          <p>轮播上一页的内容</p>
        </div>
        <!------------------------------------------------------------------------------>
        <div class="swiper-slide swiper-slide-active" style="height: 764px">
          <!--------当前幻灯片部分-------->
          <div class="home-about fp-page">
            <img :src="home_about_decoration" class="home-about-decoration" />
            <div data-v-5dd2d15e="" class="aside-slogan aside-slogan">
              <img
                data-v-5dd2d15e=""
                :src="aside_slogan__line"
                alt="miHoYo"
                class="aside-slogan__line"
              />
              <img
                data-v-5dd2d15e=""
                src="data:image/png;base64,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"
                alt="miHoYo"
                class="aside-slogan__text"
              />
            </div>
            <div class="fp-page__wrap">
              <div class="home-about-cates">
                <div class="home-about-cates-wrap home-about-cates-wrap--active">
                  <div class="home-about-cate">
                    <div
                      class="home-about-cate-wrap"
                      style="transform: translateY(-0.6rem); transition-duration: 0ms"
                    >
                      <div class="span-wrapper"><span> 关于米哈游 </span></div>
                      <div class="span-wrapper">
                        <span class="tab-dark"> 关于米哈游 </span>
                      </div>
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
                      <div class="span-wrapper">
                        <span class="tab-dark"> 发展历程 </span>
                      </div>
                      <div class="span-wrapper"><span> 发展历程 </span></div>
                    </div>
                  </div>
                </div>
                <div class="home-about-cates-wrap">
                  <div class="home-about-cate">
                    <div
                      class="home-about-cate-wrap"
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
                        <p style="white-space: pre-wrap; text-align: right">
                          愿意生活在其中的虚拟世界。
                        </p>
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
          </div>
        </div>
        <div class="swiper-slide swiper-slide-next" style="height: 764px">
          <p>轮播下一页的内容</p>
        </div>
        <!------------------------------------------------------------------------------>
      </div>

      <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
    </div>
    <div data-v-162f564a="" class="scroll-btn aside-scroll scroll-btn--dark">
      <div data-v-162f564a="" class="scroll-btn__mouse"></div>
      <div data-v-162f564a="" class="scroll-btn__arrow">
        <img
          data-v-162f564a=""
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSImI3g3QkFEOyYjeDU5MzQ7XyYjeDYyRjc7JiN4OEQxRDtfMV8iDQoJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgOCAxMSINCgkgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgOCAxMTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGcgaWQ9IiYjeDdCQUQ7JiN4NTkzNDtfJiN4NjJGNzsmI3g4RDFEOyI+DQoJPGc+DQoJCTxwb2x5Z29uIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtmaWxsOiMzRDQyNEQ7IiBwb2ludHM9IjUsNy45OTggNSwwIDMuMDAxLDAgMy4wMDEsOCAwLDQuOTk5IDAsNi45OTkgDQoJCQkzLjAwMSwxMCA0LjAzMywxMSA1LDkuOTk4IDgsNi45OTkgOCw0Ljk5OSAJCSIvPg0KCTwvZz4NCjwvZz4NCjwvc3ZnPg0K"
          alt="miHoYo"
        />
      </div>
      <div data-v-162f564a="" class="scroll-btn__line"></div>
    </div>
  </div>
</template>

<style scoped>
/*header*/
#layout,
#frame,
#__nuxt,
#__layout {
  height: 100%;
}
.fp-page {
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
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.header {
  width: 100%;
  min-width: 14rem;
  height: 5rem;
  overflow: hidden;
  position: fixed;

  top: 0;
  left: 0;
  z-index: 9999;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: #fff;
  border: 1px solid #e6e7eb !important;
}
.header__navwrap {
  width: 100%;
}
.header__navbar {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0 4.8rem 0 3rem;
  margin-right: 38rem;
  white-space: nowrap;
}
.header__navbar::after {
  content: '';
  position: absolute;
  right: 0;
  width: 1px;
  height: 0.18rem;
  background: #e6e7eb;
}
.header__navbar-logo {
  height: 2rem;
}
.header__navbar-logo img {
  height: 2rem;
}
.header__navbar-links {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.header__navbar-link {
  position: relative;
  font-size: 1rem;
  color: #676b73;
  padding: 8rem;
  padding-right: 0.05rem;
  margin-left: 0.8rem;
  cursor: pointer;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  -webkit-transition: color 500ms;
  -o-transition: color 500ms;
  transition: color 500ms;
}
.header__navbar-link span {
  visibility: visible;
}
.header__navbar-link b {
  position: absolute;
  top: 50%;
  right: 0.05rem;
  visibility: hidden;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
.header__navbar-link:hover,
.header__navbar-link--active {
  color: #3778e5;
}
.header__navbar-link:hover b,
.header__navbar-link--active b {
  visibility: visible;
}
.header__navbar-link:hover span,
.header__navbar-link--active span {
  visibility: hidden;
}

/*header*/

/* home-about */
.home-about-container {
  position: relative;
  width: 100%;
  height: 100%;
}
.home-about-container > div {
  position: absolute;
  left: 50%;
  top: 0;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
}
.about-intro {
  width: 98%;
  height: 100%;
  padding-right: 0.4rem;
}
.about-intro img {
  width: 100%;
}
.about-intro__vision {
  max-height: 2.84rem;
}
.about-intro__vision-title,
.about-intro__mihoyo-title {
  position: relative;
  margin-bottom: 0.4rem;
  font-size: 0.24rem;
  font-weight: bold;
  color: #242933;
}
.about-intro__vision-title b,
.about-intro__mihoyo-title b {
  position: absolute;
  left: 1.04rem;
  bottom: -0.16rem;
  font-size: 0.1rem;
  font-weight: normal;
  color: #ccc;
  letter-spacing: 0.1em;
  font-family: HarmonyOS, Arial, Helvetica, sans-serif;
  text-transform: uppercase;
}
.about-intro__vision-slg {
  position: relative;
  display: inline-block;
  width: calc(100% - 0.76rem);
  padding-left: 0.2rem;
  margin-bottom: 1.4rem;
  margin-left: 0.64rem;
  font-size: 0.54rem;
  line-height: 0.8rem;
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
  width: 0.08rem;
  height: 0.25rem;
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
  font-size: 0.17rem;
  color: #3d424d;
  line-height: 0.34rem;
  height: 2rem;
}
.about-intro__mihoyo-desc p {
  margin-bottom: 0.1rem;
}
.about-intro__mihoyo-desc strong {
  color: #3778e5;
  font-weight: bold;
}
/* home-about */

/* home-intro */
.home {
  position: -webkit-sticky;
  position: sticky;
  width: 1414px;

  height: 100%;
  background: #f8f9fb
    url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAAAXNSR0IArs4c6QAAAFVJREFUSEtjfPn+238GJMDBxozMJZn949dfuB5GkOHiglyMJJtChIYhbPjHrz//83Oz0yZYRg3HlngYR4NlNFiIKFUgSkZTC9agGg0W7MEyWs1hCxcAF5pe5Ya82ZoAAAAASUVORK5CYII=)
    repeat center center/0.23rem 0.23rem;
  font-family: 'Microsoft YaHei', 微软雅黑, 'MicrosoftJhengHei', PingFang, MingLiu, sans-serif;
}
/*侧边*/
.home .aside-slogan {
  position: fixed;
  z-index: 6;
}
.home .aside-slogan.isEnd {
  -webkit-transition-duration: 0ms;
  -o-transition-duration: 0ms;
  transition-duration: 0ms;
}
.home .aside-scroll {
  position: absolute;
  right: 0.3rem;
  bottom: 0.38rem;
  z-index: 6;
}

.home-swiper {
  height: 100%;
}
.home-swiper .swiper-wrapper .swiper-slide {
  height: 100%;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}
.home .last-swiper {
  height: 100%;
}
.home .last-swiper .swiper-slide {
  height: calc(100% + 1px);
}
.home .last-swiper .swiper-slide:last-child {
  height: auto !important;
}

/*home-about*/
.home-about {
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(10%, rgba(248, 249, 251, 0)),
    color-stop(40%, rgba(248, 249, 251, 0.5)),
    to(#f8f9fb)
  );
  background-image: -o-linear-gradient(
    top,
    rgba(248, 249, 251, 0) 10%,
    rgba(248, 249, 251, 0.5) 40%,
    #f8f9fb 100%
  );
  background-image: linear-gradient(
    to bottom,
    rgba(248, 249, 251, 0) 10%,
    rgba(248, 249, 251, 0.5) 40%,
    #f8f9fb 100%
  );
}
.home-about .scroll-tip {
  position: absolute;
  right: 0.3rem;
  bottom: 0.38rem;
  z-index: 9;
  cursor: pointer;
  pointer-events: auto;
}
.home-about-container {
  position: relative;
  width: 100%;
  height: 100%;
}
.home-about-container > div {
  position: absolute;
  left: 50%;
  top: 0;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
}
.home-about-decoration {
  position: absolute;
  top: 0.9rem;
  right: 0;
  width: 1.76rem;
}
.home-about-cates {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 0.5rem;
  margin-right: -0.3rem;
  height: 0.25rem;
}
.home-about-cates-wrap {
  position: relative;
  height: 0.3rem;
  overflow: hidden;
  margin-right: -1px;
  cursor: pointer;
}
.home-about-cates-wrap::before,
.home-about-cates-wrap::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 1px;
  height: 0.18rem;
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
.home-about-cate {
  height: 0.3rem;
  overflow: hidden;
}
.home-about-cate-wrap {
  font-size: 0;
  color: #676b73;
  white-space: nowrap;
  position: relative;
  height: 0.9rem;
  -webkit-transform: translateY(-0.6rem);
  -ms-transform: translateY(-0.6rem);
  transform: translateY(-0.6rem);
}

.home-about-cate .span-wrapper {
  height: 0.3rem;
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
  font-size: 0.18rem;
  height: 0.25rem;
  line-height: 0.25rem;
  position: relative;
  padding: 0 0.38rem;
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
.home-about-container,
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

.swiper-slide-prev .home-about-container {
  -webkit-transform: translateY(-1.5rem);
  -ms-transform: translateY(-1.5rem);
  transform: translateY(-1.5rem);
}
.swiper-slide-prev .home-about-cates {
  -webkit-transform: translateY(-1rem);
  -ms-transform: translateY(-1rem);
  transform: translateY(-1rem);
}
.swiper-slide-prev .home-about-decoration {
  -webkit-transform: translateX(1.5rem);
  -ms-transform: translateX(1.5rem);
  transform: translateX(1.5rem);
  opacity: 0;
}
.swiper-slide-active .home-about-container,
.swiper-slide-active .home-about-cates {
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
}
.swiper-slide-active .home-about-decoration {
  -webkit-transform: translateX(0);
  -ms-transform: translateX(0);
  transform: translateX(0);
  opacity: 1;
}
.swiper-slide-next .home-about-container {
  -webkit-transform: translateY(2rem);
  -ms-transform: translateY(2rem);
  transform: translateY(2rem);
}
.swiper-slide-next .home-about-cates {
  -webkit-transform: translateY(1.5rem);
  -ms-transform: translateY(1.5rem);
  transform: translateY(1.5rem);
}
.swiper-slide-next .home-about-decoration {
  -webkit-transform: translateX(1.5rem);
  -ms-transform: translateX(1.5rem);
  transform: translateX(1.5rem);
  opacity: 0;
}
.aside-slogan[data-v-5dd2d15e] {
  position: absolute;
  left: 0.8rem;
  bottom: 0.38rem;
}
.aside-slogan__line[data-v-5dd2d15e] {
  position: absolute;
  top: -5rem;
  left: -0.79rem;
  width: 2.72rem;
  height: 5.28rem;
  background: url(/_nuxt/img/line.a3e37b6.png) no-repeat center center/100% 100%;
}
.aside-slogan__text[data-v-5dd2d15e] {
  position: relative;
  z-index: 1;
  width: 0.1rem;
}

/*home-index*/
.home-index {
  width: 100%;
  height: 100%;
  position: relative;
}
.home-index img {
  width: 100%;
}
.home-index .scroll-tip {
  position: absolute;
  bottom: 1.24rem;
  left: 0;
  right: 0;
  margin: 0 auto;
}

.home-index .fp-page__wrap {
  z-index: 9;
  display: -webkit-box; /*缓动效果完成*/
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.home-index-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  overflow: hidden;
}
.home-index-bg video {
  position: absolute;
  min-width: 100%;
  min-height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  top: 50%;
  left: 50%;
  -webkit-transform: translate3d(-50%, -50%, 0);
  transform: translate3d(-50%, -50%, 0);
}
.home-index-bg__mask {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAE1JREFUOE9j5BaRuvnr+2cGNk5eBhighM8IMhBuEhUYKAZS4jKQW0D6aeNCargMFge0cSE1Ync0DCGhSI3Ypk0sU8Nlo+lwtDykoOQGAAxCqvFBleXSAAAAAElFTkSuQmCC)
    repeat 0 0/0.2rem 0.2rem;
}
.home-index-bg__maskcolor {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}
.home-index-logo {
  position: absolute;
  top: 0.22rem;
  left: 0.7rem;
  z-index: 9;
  height: 0.46rem;
}
.home-index-logo img {
  width: auto;
  height: 0.46rem;
}
.home-index-slg {
  z-index: 9;
  width: 5.74rem;
  max-height: 3.7rem;
  margin-left: 0.84rem;
  margin-bottom: 0.44rem;
}
.home-index-action {
  position: relative;
  z-index: 9;
  width: 1.1rem;
  height: 0.56rem;
}
.home-index-btn {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 1.06rem;
  height: 0.56rem;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGoAAAA4CAYAAAAVZ21rAAAAAXNSR0IArs4c6QAAAm5JREFUeF7tl7/LEnEcxz1OCBp8nBwSLlwa7gQXeQjBCIyGihAHoWhxKmxqzAgOIfqBs4s03j+QQzjKhYODj9KiQyA43CDcFAiBXTj0EFE95zvuPb1d/by/L3i9pjOiKIpS+lEN7Pf7XRiGt3O53Ke4YOMQyjCM+3EHuvt/A/1+/7TVaj05xMrn82dxXlSoOJYSuPE872aj0Xi03W4rlmV9uQihUBcZSvD/4XB4p1ar3Vuv16e2bQf/QilUgiHiPO37/oNSqVTebDbXHccJ/7ZRqDg2E76Zz+ePLcu6EgTBDcdxvv4Jp1AJR4jzvGmaxnK5fJbJZMzxeHyr2Wx++32nUHFMEm6y2ay5WCyep9PpcDAY3HVd9/uvWIUiRIiLsCzr0nQ6dXe73edCofAwlUqdf+MqVFyLpLtisXjZ9/3XQRB8tG376U+sQpECHIOpVCono9Ho3Wq1el8ul18etgp1jEHibb1ez3me92Y2m/Wq1epbhSLKPxbVbrev9no9dzKZvFCoY+2R7zudzrVut/tKocjiEVwURR8UCjFH3igUWTiKUyjUHHmnUGThKE6hUHPknUKRhaM4hULNkXcKRRaO4hQKNUfeKRRZOIpTKNQceadQZOEoTqFQc+SdQpGFoziFQs2RdwpFFo7iFAo1R94pFFk4ilMo1Bx5p1Bk4ShOoVBz5J1CkYWjOIVCzZF3CkUWjuIUCjVH3ikUWTiKUyjUHHmnUGThKE6hUHPknUKRhaM4hULNkXcKRRaO4hQKNUfeKRRZOIpTKNQceadQZOEoTqFQc+SdQpGFoziFQs2RdwpFFo7izkOhD2jHM/ADHdbwJ8875eoAAAAASUVORK5CYII=)
    no-repeat 0 0/100% 100%;
  cursor: pointer;
  -webkit-transition: all 500ms;
  -o-transition: all 500ms;
  transition: all 500ms;
}
.home-index-btn b {
  width: 0;
  height: 0;
  margin-left: 0.14rem;
  border: 0.1rem solid rgba(0, 0, 0, 0);
  border-left: 0.16rem solid #fff;
  -webkit-transition: all 500ms;
  -o-transition: all 500ms;
  transition: all 500ms;
  position: relative;
  z-index: 1;
}
.home-index-btn:hover {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGoAAAA4CAYAAAAVZ21rAAAAAXNSR0IArs4c6QAAAodJREFUeF7tl09Ik3Ecxt/xRjGxQo0iwyKIKV6EGjIjp7YwyRiIJy3wqCEMhCLGCH5EZandu3jwoIdu6sE//aW8F0SB4J9Dh8HCiTI3MZzhIYmo/O2J9zk9u+77/D7w+ZxeX3RkfsfRj2pgJ7+d+55db57uDc3Zgn27oSa6KqO2A939v4GaLlNbUd/es5lNN7+MNXyweVGhbCx5cHPh1mDjyeDVm9mNbxdfxyKL+yEUaj9DHv4f6nt2ray67vp6Kln7PtGS/BdKoTwMYfP0pcRYx5HTVcHtZCo0Y1rSf9solI1Nj28a7493+4+Vl+dSmfBb05T5E06hPI5g9bzr+iL9U30H/MXu15XZK1+M2fp9p1BWJr0/Olh02G14MBn3uW56dvVVq2NM/leqQnnfwJrgLz11KGyem/zW5qcXtyOdjuPsfeMqlLVGzmFxRaAoHB/tz62lpt7EW3t/UhWK478gSsm580fr7gwPZJJLw+9M+73dsUIVpJB3fCIYOR7sfvp4bfnz0NyjG08Uiue+YNLZy51nqjvumvTCx4RCFayPOwhEewKVbbGHCsX1DtGiI/MTCgWp444UiusbpikUrI47VCiub5imULA67lChuL5hmkLB6rhDheL6hmkKBavjDhWK6xumKRSsjjtUKK5vmKZQsDruUKG4vmGaQsHquEOF4vqGaQoFq+MOFYrrG6YpFKyOO1Qorm+YplCwOu5Qobi+YZpCweq4Q4Xi+oZpCgWr4w4ViusbpikUrI47VCiub5imULA67lChuL5hmkLB6rhDheL6hmkKBavjDhWK6xumKRSsjjtUKK5vmKZQsDruUKG4vmGaQsHquEOF4vqGaXuh4Bc0pBn4AfBTumBicdXLAAAAAElFTkSuQmCC);
}
.home-index-btn:hover b {
  border-left-color: #4ea1d9;
}
.home-index-logo {
  -webkit-transition: opacity 1000ms;
  -o-transition: opacity 1000ms;
  transition: opacity 1000ms;
  -webkit-transition-delay: 200ms;
  -o-transition-delay: 200ms;
  transition-delay: 200ms;
}
.home-index-slg,
.home-index-action,
.scroll-tip {
  -webkit-transition: -webkit-transform 1000ms;
  transition: -webkit-transform 1000ms;
  -o-transition: transform 1000ms;
  transition: transform 1000ms;
  transition:
    transform 1000ms,
    -webkit-transform 1000ms;
  -webkit-transition-delay: 200ms;
  -o-transition-delay: 200ms;
  transition-delay: 200ms;
}
.swiper-slide-prev .home-index-logo {
  opacity: 0;
}
.swiper-slide-prev .home-index-slg {
  -webkit-transform: translateY(-1.4rem);
  -ms-transform: translateY(-1.4rem);
  transform: translateY(-1.4rem);
}
.swiper-slide-prev .home-index-action {
  -webkit-transform: translateY(-1rem);
  -ms-transform: translateY(-1rem);
  transform: translateY(-1rem);
}
.swiper-slide-prev .scroll-tip {
  -webkit-transform: translateY(-1rem);
  -ms-transform: translateY(-1rem);
  transform: translateY(-1rem);
}
.swiper-slide-active .home-index-logo {
  opacity: 1;
}
.swiper-slide-active .home-index-slg,
.swiper-slide-active .home-index-action,
.swiper-slide-active .scroll-tip {
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
}
.swiper-slide-next .home-index-logo {
  opacity: 1;
}
.swiper-slide-next .home-index-slg,
.swiper-slide-next .home-index-action,
.swiper-slide-next .scroll-tip {
  -webkit-transform: translateY(1rem);
  -ms-transform: translateY(1rem);
  transform: translateY(1rem);
}
.home-pv .custom-mihoyo-common-container {
  position: relative;
}
.home-pv-video {
  width: 12.8rem;
}
.home-pv-close {
  position: absolute;
  right: -0.64rem;
  top: -0.14rem;
  z-index: 9;
  width: 0.6rem;
  height: 0.6rem;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAARRJREFUSEvN18sNwjAMgOE/VxZgBmAIBEuwASdWYAcuHNiAKXgsATMwhVFQQaI0tWMaSo+Vmi+uk9gJIjIBtsAihHCj4CMiQ2APrIKInIApcAVmpfAKPQBj4BzhOIsjMCqFNxrxz5bEU2OHZ0pL4G1jvuCuI9cCeYO7wjU0Oh/wt7gFTcJe3Iq2wg34BZin9nkOqsJWPBc1wRruQc1wCq/OANep17iqU3WiFl3MefzeddRmwQ2Rx1eu4vIt7EKzcuzd26m0mSNuW70iMgA2wNpaz02wtmVEZAcsc/KtwhrqTUErbEG99TwJ56Ae/H/KoifS+paxjNF/62OZZW6vrzZ7JVBtwfXX0P/4CvOs3Y8rTC+XtjtsokIg6khevAAAAABJRU5ErkJggg==)
    no-repeat center center/0.3rem 0.3rem;
  cursor: pointer;
  -webkit-transform: rotate(0);
  -ms-transform: rotate(0);
  transform: rotate(0);
  -webkit-transition: -webkit-transform 500ms;
  transition: -webkit-transform 500ms;
  -o-transition: transform 500ms;
  transition: transform 500ms;
  transition:
    transform 500ms,
    -webkit-transform 500ms;
}
.home-pv-close:hover {
  -webkit-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
}
/* home-about */

/* swiper-slide */
/**
 * Swiper 4.5.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2019 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: September 13, 2019
 */
.swiper-container {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  /* Fix of Webkit flickering */
  z-index: 1;
}
.swiper-container-no-flexbox .swiper-slide {
  float: left;
}
.swiper-container-vertical > .swiper-wrapper {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}
.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-transition-property: -webkit-transform;
  transition-property: -webkit-transform;
  -o-transition-property: transform;
  transition-property: transform;
  transition-property:
    transform,
    -webkit-transform;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
}
.swiper-container-android .swiper-slide,
.swiper-wrapper {
  -webkit-transform: translate3d(0px, 0, 0);
  transform: translate3d(0px, 0, 0);
}
.swiper-container-multirow > .swiper-wrapper {
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
.swiper-container-free-mode > .swiper-wrapper {
  -webkit-transition-timing-function: ease-out;
  -o-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
  margin: 0 auto;
}
.swiper-slide {
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  position: relative;
  -webkit-transition-property: -webkit-transform;
  transition-property: -webkit-transform;
  -o-transition-property: transform;
  transition-property: transform;
  transition-property:
    transform,
    -webkit-transform;
}
.swiper-slide-invisible-blank {
  visibility: hidden;
}
/* Auto Height */
.swiper-container-autoheight,
.swiper-container-autoheight .swiper-slide {
  height: auto;
}
.swiper-container-autoheight .swiper-wrapper {
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
  -webkit-transition-property:
    height,
    -webkit-transform;
  transition-property:
    height,
    -webkit-transform;
  -o-transition-property: transform, height;
  transition-property: transform, height;
  transition-property:
    transform,
    height,
    -webkit-transform;
}
/* 3D Effects */
.swiper-container-3d {
  -webkit-perspective: 1200px;
  perspective: 1200px;
}
.swiper-container-3d .swiper-wrapper,
.swiper-container-3d .swiper-slide,
.swiper-container-3d .swiper-slide-shadow-left,
.swiper-container-3d .swiper-slide-shadow-right,
.swiper-container-3d .swiper-slide-shadow-top,
.swiper-container-3d .swiper-slide-shadow-bottom,
.swiper-container-3d .swiper-cube-shadow {
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}
.swiper-container-3d .swiper-slide-shadow-left,
.swiper-container-3d .swiper-slide-shadow-right,
.swiper-container-3d .swiper-slide-shadow-top,
.swiper-container-3d .swiper-slide-shadow-bottom {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 10;
}
.swiper-container-3d .swiper-slide-shadow-left {
  background-image: -webkit-gradient(
    linear,
    right top,
    left top,
    from(rgba(0, 0, 0, 0.5)),
    to(rgba(0, 0, 0, 0))
  );
  background-image: -webkit-linear-gradient(right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  background-image: -o-linear-gradient(right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}
.swiper-container-3d .swiper-slide-shadow-right {
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(rgba(0, 0, 0, 0.5)),
    to(rgba(0, 0, 0, 0))
  );
  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}
.swiper-container-3d .swiper-slide-shadow-top {
  background-image: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(rgba(0, 0, 0, 0.5)),
    to(rgba(0, 0, 0, 0))
  );
  background-image: -webkit-linear-gradient(bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  background-image: -o-linear-gradient(bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}
.swiper-container-3d .swiper-slide-shadow-bottom {
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(0, 0, 0, 0.5)),
    to(rgba(0, 0, 0, 0))
  );
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  background-image: -o-linear-gradient(top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}
/* IE10 Windows Phone 8 Fixes */
.swiper-container-wp8-horizontal,
.swiper-container-wp8-horizontal > .swiper-wrapper {
  -ms-touch-action: pan-y;
  touch-action: pan-y;
}
.swiper-container-wp8-vertical,
.swiper-container-wp8-vertical > .swiper-wrapper {
  -ms-touch-action: pan-x;
  touch-action: pan-x;
}
.swiper-button-prev,
.swiper-button-next {
  position: absolute;
  top: 50%;
  width: 27px;
  height: 44px;
  margin-top: -22px;
  z-index: 10;
  cursor: pointer;
  background-size: 27px 44px;
  background-position: center;
  background-repeat: no-repeat;
}
.swiper-button-prev.swiper-button-disabled,
.swiper-button-next.swiper-button-disabled {
  opacity: 0.35;
  cursor: auto;
  pointer-events: none;
}
.swiper-button-prev,
.swiper-container-rtl .swiper-button-next {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E");
  left: 10px;
  right: auto;
}
.swiper-button-next,
.swiper-container-rtl .swiper-button-prev {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E");
  right: 10px;
  left: auto;
}
.swiper-button-prev.swiper-button-white,
.swiper-container-rtl .swiper-button-next.swiper-button-white {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E");
}
.swiper-button-next.swiper-button-white,
.swiper-container-rtl .swiper-button-prev.swiper-button-white {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E");
}
.swiper-button-prev.swiper-button-black,
.swiper-container-rtl .swiper-button-next.swiper-button-black {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E");
}
.swiper-button-next.swiper-button-black,
.swiper-container-rtl .swiper-button-prev.swiper-button-black {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E");
}
.swiper-button-lock {
  display: none;
}
.swiper-pagination {
  position: absolute;
  text-align: center;
  -webkit-transition: 300ms opacity;
  -o-transition: 300ms opacity;
  transition: 300ms opacity;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  z-index: 10;
}
.swiper-pagination.swiper-pagination-hidden {
  opacity: 0;
}
/* Common Styles */
.swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: 10px;
  left: 0;
  width: 100%;
}
/* Bullets */
.swiper-pagination-bullets-dynamic {
  overflow: hidden;
  font-size: 0;
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
  -webkit-transform: scale(0.33);
  -ms-transform: scale(0.33);
  transform: scale(0.33);
  position: relative;
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active {
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main {
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {
  -webkit-transform: scale(0.66);
  -ms-transform: scale(0.66);
  transform: scale(0.66);
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev {
  -webkit-transform: scale(0.33);
  -ms-transform: scale(0.33);
  transform: scale(0.33);
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {
  -webkit-transform: scale(0.66);
  -ms-transform: scale(0.66);
  transform: scale(0.66);
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next {
  -webkit-transform: scale(0.33);
  -ms-transform: scale(0.33);
  transform: scale(0.33);
}
.swiper-pagination-bullet {
  width: 8px;
  height: 8px;
  display: inline-block;
  border-radius: 100%;
  background: #000;
  opacity: 0.2;
}
button.swiper-pagination-bullet {
  border: none;
  margin: 0;
  padding: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.swiper-pagination-clickable .swiper-pagination-bullet {
  cursor: pointer;
}
.swiper-pagination-bullet-active {
  opacity: 1;
  background: #007aff;
}
.swiper-container-vertical > .swiper-pagination-bullets {
  right: 10px;
  top: 50%;
  -webkit-transform: translate3d(0px, -50%, 0);
  transform: translate3d(0px, -50%, 0);
}
.swiper-container-vertical > .swiper-pagination-bullets .swiper-pagination-bullet {
  margin: 6px 0;
  display: block;
}
.swiper-container-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  width: 8px;
}
.swiper-container-vertical
  > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic
  .swiper-pagination-bullet {
  display: inline-block;
  -webkit-transition:
    200ms top,
    200ms -webkit-transform;
  transition:
    200ms top,
    200ms -webkit-transform;
  -o-transition:
    200ms transform,
    200ms top;
  transition:
    200ms transform,
    200ms top;
  transition:
    200ms transform,
    200ms top,
    200ms -webkit-transform;
}
.swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {
  margin: 0 4px;
}
.swiper-container-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  white-space: nowrap;
}
.swiper-container-horizontal
  > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic
  .swiper-pagination-bullet {
  -webkit-transition:
    200ms left,
    200ms -webkit-transform;
  transition:
    200ms left,
    200ms -webkit-transform;
  -o-transition:
    200ms transform,
    200ms left;
  transition:
    200ms transform,
    200ms left;
  transition:
    200ms transform,
    200ms left,
    200ms -webkit-transform;
}
.swiper-container-horizontal.swiper-container-rtl
  > .swiper-pagination-bullets-dynamic
  .swiper-pagination-bullet {
  -webkit-transition:
    200ms right,
    200ms -webkit-transform;
  transition:
    200ms right,
    200ms -webkit-transform;
  -o-transition:
    200ms transform,
    200ms right;
  transition:
    200ms transform,
    200ms right;
  transition:
    200ms transform,
    200ms right,
    200ms -webkit-transform;
}
/* Progress */
.swiper-pagination-progressbar {
  background: rgba(0, 0, 0, 0.25);
  position: absolute;
}
.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
  background: #007aff;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  -webkit-transform: scale(0);
  -ms-transform: scale(0);
  transform: scale(0);
  -webkit-transform-origin: left top;
  -ms-transform-origin: left top;
  transform-origin: left top;
}
.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
  -webkit-transform-origin: right top;
  -ms-transform-origin: right top;
  transform-origin: right top;
}
.swiper-container-horizontal > .swiper-pagination-progressbar,
.swiper-container-vertical > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite {
  width: 100%;
  height: 4px;
  left: 0;
  top: 0;
}
.swiper-container-vertical > .swiper-pagination-progressbar,
.swiper-container-horizontal
  > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite {
  width: 4px;
  height: 100%;
  left: 0;
  top: 0;
}
.swiper-pagination-white .swiper-pagination-bullet-active {
  background: #ffffff;
}
.swiper-pagination-progressbar.swiper-pagination-white {
  background: rgba(255, 255, 255, 0.25);
}
.swiper-pagination-progressbar.swiper-pagination-white .swiper-pagination-progressbar-fill {
  background: #ffffff;
}
.swiper-pagination-black .swiper-pagination-bullet-active {
  background: #000000;
}
.swiper-pagination-progressbar.swiper-pagination-black {
  background: rgba(0, 0, 0, 0.25);
}
.swiper-pagination-progressbar.swiper-pagination-black .swiper-pagination-progressbar-fill {
  background: #000000;
}
.swiper-pagination-lock {
  display: none;
}
/* Scrollbar */
.swiper-scrollbar {
  border-radius: 10px;
  position: relative;
  -ms-touch-action: none;
  background: rgba(0, 0, 0, 0.1);
}
.swiper-container-horizontal > .swiper-scrollbar {
  position: absolute;
  left: 1%;
  bottom: 3px;
  z-index: 50;
  height: 5px;
  width: 98%;
}
.swiper-container-vertical > .swiper-scrollbar {
  position: absolute;
  right: 3px;
  top: 1%;
  z-index: 50;
  width: 5px;
  height: 98%;
}
.swiper-scrollbar-drag {
  height: 100%;
  width: 100%;
  position: relative;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  left: 0;
  top: 0;
}
.swiper-scrollbar-cursor-drag {
  cursor: move;
}
.swiper-scrollbar-lock {
  display: none;
}
.swiper-zoom-container {
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  text-align: center;
}
.swiper-zoom-container > img,
.swiper-zoom-container > svg,
.swiper-zoom-container > canvas {
  max-width: 100%;
  max-height: 100%;
  -o-object-fit: contain;
  object-fit: contain;
}
.swiper-slide-zoomed {
  cursor: move;
}
/* Preloader */
.swiper-lazy-preloader {
  width: 42px;
  height: 42px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -21px;
  margin-top: -21px;
  z-index: 10;
  -webkit-transform-origin: 50%;
  -ms-transform-origin: 50%;
  transform-origin: 50%;
  -webkit-animation: swiper-preloader-spin 1s steps(12, end) infinite;
  animation: swiper-preloader-spin 1s steps(12, end) infinite;
}
.swiper-lazy-preloader:after {
  display: block;
  content: '';
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%236c6c6c'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
  background-position: 50%;
  background-size: 100%;
  background-repeat: no-repeat;
}
.swiper-lazy-preloader-white:after {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%23fff'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
}
@-webkit-keyframes swiper-preloader-spin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes swiper-preloader-spin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
/* a11y */
.swiper-container .swiper-notification {
  position: absolute;
  left: 0;
  top: 0;
  pointer-events: none;
  opacity: 0;
  z-index: -1000;
}
.swiper-container-fade.swiper-container-free-mode .swiper-slide {
  -webkit-transition-timing-function: ease-out;
  -o-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.swiper-container-fade .swiper-slide {
  pointer-events: none;
  -webkit-transition-property: opacity;
  -o-transition-property: opacity;
  transition-property: opacity;
}
.swiper-container-fade .swiper-slide .swiper-slide {
  pointer-events: none;
}
.swiper-container-fade .swiper-slide-active,
.swiper-container-fade .swiper-slide-active .swiper-slide-active {
  pointer-events: auto;
}
.swiper-container-cube {
  overflow: visible;
}
.swiper-container-cube .swiper-slide {
  pointer-events: none;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  z-index: 1;
  visibility: hidden;
  -webkit-transform-origin: 0 0;
  -ms-transform-origin: 0 0;
  transform-origin: 0 0;
  width: 100%;
  height: 100%;
}
.swiper-container-cube .swiper-slide .swiper-slide {
  pointer-events: none;
}
.swiper-container-cube.swiper-container-rtl .swiper-slide {
  -webkit-transform-origin: 100% 0;
  -ms-transform-origin: 100% 0;
  transform-origin: 100% 0;
}
.swiper-container-cube .swiper-slide-active,
.swiper-container-cube .swiper-slide-active .swiper-slide-active {
  pointer-events: auto;
}
.swiper-container-cube .swiper-slide-active,
.swiper-container-cube .swiper-slide-next,
.swiper-container-cube .swiper-slide-prev,
.swiper-container-cube .swiper-slide-next + .swiper-slide {
  pointer-events: auto;
  visibility: visible;
}
.swiper-container-cube .swiper-slide-shadow-top,
.swiper-container-cube .swiper-slide-shadow-bottom,
.swiper-container-cube .swiper-slide-shadow-left,
.swiper-container-cube .swiper-slide-shadow-right {
  z-index: 0;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.swiper-container-cube .swiper-cube-shadow {
  position: absolute;
  left: 0;
  bottom: 0px;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.6;
  -webkit-filter: blur(50px);
  filter: blur(50px);
  z-index: 0;
}
.swiper-container-flip {
  overflow: visible;
}
.swiper-container-flip .swiper-slide {
  pointer-events: none;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  z-index: 1;
}
.swiper-container-flip .swiper-slide .swiper-slide {
  pointer-events: none;
}
.swiper-container-flip .swiper-slide-active,
.swiper-container-flip .swiper-slide-active .swiper-slide-active {
  pointer-events: auto;
}
.swiper-container-flip .swiper-slide-shadow-top,
.swiper-container-flip .swiper-slide-shadow-bottom,
.swiper-container-flip .swiper-slide-shadow-left,
.swiper-container-flip .swiper-slide-shadow-right {
  z-index: 0;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.swiper-container-coverflow .swiper-wrapper {
  /* Windows 8 IE 10 fix */
  -ms-perspective: 1200px;
}
/* swiper-side */
</style>
