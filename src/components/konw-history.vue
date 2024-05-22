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
        <div class="swiper-container swiper-container-initialized swiper-container-vertical">
          <div class="home-about-cates">
            <RouterLink to="/aside3">
              <div class="home-about-cates-wrap">
                <div class="home-about-cate">
                  <div
                    class="home-about-cate-wrap"
                    style="transform: translateY(-0.6rem); transition-duration: 0ms"
                  >
                    <button class="custom-btn btn-12">
                      <span>关于米哈游</span><span>关于米哈游</span>
                    </button>
                  </div>
                </div>
              </div> </RouterLink
            ><router-view></router-view>
            <div class="home-about-cates-wrap home-about-cates-wrap--active">
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
            <!-- <RouterLink to="/homehoner">
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
              </div> </RouterLink
            ><router-view></router-view> -->
          </div>
        </div>
        <!-- 中间展示页面 -->
        <div class="about-history">
          <div class="about-history-title">
            发展历程
            <b> Milestones</b>
          </div>
          <!-- 中间轮播内容 -->
          <div class="about-history-process">
            <swiper
              @swiper="onSwiper"
              :spaceBetween="30"
              :effect="'fade'"
              :loop="false"
              :navigation="{
                prevEl: '.swiper-button-next',
                nextEl: '.swiper-button-prev'
              }"
              :fadeEffect="{
                crossFade: true
              }"
              :pagination="pagination"
              :modules="modules"
              class="mySwiper"
            >
              <swiper-slide>
                <div
                  class="bg"
                  style="
                    background: url('https://webstatic.mihoyo.com/upload/op-public/2021/10/11/dd4a5ed7f96947a998f588ec433bfa3f_7278556924923918775.png')
                      center center / cover no-repeat;
                    overflow: hidden;
                  "
                ></div>
                <div class="event-item__info-label">
                  银河冒险策略类游戏《崩坏：星穹铁道》全球上线
                </div>
                <div class="under">
                  <img src="@/components/img/10.png" alt="" /></div
              ></swiper-slide>

              <swiper-slide>
                <div
                  class="bg"
                  style="
                    background: url('https://webstatic.mihoyo.com/upload/op-public/2023/02/27/215cea0fcaa54574242b33cb8c31d1fa_6478646765191066553.png')
                      center center / cover no-repeat;
                    overflow: hidden;
                  "
                ></div>
                <div class="event-item__info-label">2022年5月，公布全新动作游戏《绝区零》</div>
                <div class="under">
                  <img src="@/components/img/9.png" alt="" /></div
              ></swiper-slide>

              <swiper-slide>
                <div
                  class="bg"
                  style="
                    background: url('https://webstatic.mihoyo.com/upload/op-public/2021/10/03/87db6426a52df35c8aa0fbb067323956_999970175693659617.png')
                      center center / cover no-repeat;
                    overflow: hidden;
                  "
                ></div>
                <div class="event-item__info-label">全球多平台发行开放世界游戏《原神》</div>
                <div class="under">
                  <img src="@/components/img/8.png" alt="" /></div
              ></swiper-slide>

              <swiper-slide>
                <div
                  class="bg"
                  style="
                    background: url('https://webstatic.mihoyo.com/upload/op-public/2021/10/03/030eaaa3073ff45b07069218fe11fdb5_663977200499875839.png')
                      center center / cover no-repeat;
                    overflow: hidden;
                  "
                ></div>
                <div class="event-item__info-label">推出鹿鸣相关项目《人工桌面》</div>
                <div class="under">
                  <img src="@/components/img/7.png" alt="" /></div
              ></swiper-slide>

              <swiper-slide>
                <div
                  class="bg"
                  style="
                    background: url('https://webstatic.mihoyo.com/upload/op-public/2021/10/03/ad5a5ae70f75e8f8c17cb7b875deb362_3270952533189107468.png')
                      center center / cover no-repeat;
                    overflow: hidden;
                  "
                ></div>
                <div class="event-item__info-label">推出女性向手游 《未定事件簿》</div>
                <div class="under">
                  <img src="@/components/img/6.png" alt="" /></div
              ></swiper-slide>

              <swiper-slide>
                <div
                  class="bg"
                  style="
                    background: url('https://webstatic.mihoyo.com/upload/op-public/2021/11/12/178d7d0d29c2a05dbf8fd3a5bf7fe3eb_5063849575672974300.png')
                      center center / cover no-repeat;
                    overflow: hidden;
                  "
                ></div>
                <div class="event-item__info-label">推出社区产品《米游社》</div>
                <div class="under">
                  <img src="@/components/img/5.png" alt="" /></div
              ></swiper-slide>

              <swiper-slide>
                <div
                  class="bg"
                  style="
                    background: url('https://webstatic.mihoyo.com/upload/op-public/2021/10/03/e0432bb9aa22b536a848328f3ac6d6ab_5279937607414594040.png')
                      center center / cover no-repeat;
                    overflow: hidden;
                  "
                ></div>
                <div class="event-item__info-label">推出3D动作手游《崩坏3》</div>
                <div class="under">
                  <img src="@/components/img/4.png" alt="" /></div
              ></swiper-slide>
              <swiper-slide>
                <div
                  class="bg"
                  style="
                    background: url('https://webstatic.mihoyo.com/upload/op-public/2021/10/03/55409602b060760f1ce6e91c521e6551_2986216951670747578.png')
                      center center / cover no-repeat;
                    overflow: hidden;
                  "
                ></div>
                <div class="event-item__info-label">推出Q版射击手游《崩坏学园2》</div>
                <div class="under">
                  <img src="@/components/img/3.png" alt="" />
                </div>
              </swiper-slide>
              <swiper-slide>
                <div
                  class="bg"
                  style="
                    background: url('https://webstatic.mihoyo.com/upload/op-public/2021/10/03/d6c9ed59996625a250e19f61f3177923_3821725499114308110.png')
                      center center / cover no-repeat;
                    overflow: hidden;
                  "
                ></div>
                <div class="event-item__info-label">上线《崩坏学园》</div>
                <div class="under">
                  <img src="@/components/img/2.png" alt="" />
                </div>
              </swiper-slide>
              <!---------------->
              <swiper-slide>
                <div
                  class="bg"
                  style="
                    background: url('https://webstatic.mihoyo.com/upload/op-public/2021/10/03/c29195f0ac395e1d2261f459f8c46d9c_4233539030289543689.png')
                      center center / cover no-repeat;
                    overflow: hidden;
                  "
                ></div>
                <div class="event-item__info-label">
                  米哈游创始团队推出独立游戏《FlyMe2theMoon》
                </div>
                <div class="under">
                  <img src="@/components/img/1.png" alt="" />
                </div>
              </swiper-slide>
            </swiper>

            <div class="about-history-process-arrow__lf"></div>
            <div class="about-history-process-arrow__rf"></div>
            <div class="swiper-button-prev" id="prev">
              <!-- <img class="leftArrowBg4" draggable="false" :src="leftArrowChangeBg4" alt="" /> -->
            </div>
            <div class="swiper-button-next" id="next">
              <!-- <img class="rightArrowBg4" draggable="false" :src="rightArrowChangeBg4" alt="" /> -->
            </div>
          </div>
          <div class="about-history-process-arrow__lf"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import home_about_decoration from '@/components/img/decoration.b195643.png'
import aside_slogan__line from '@/components/img/line.a3e37b6.png'

import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules'
import { onMounted, onUpdated, ref, watch } from 'vue'
const modules = [EffectFade, Navigation, Pagination]

const leftArrowChangeBg4 = ref()
// 'https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2022/09/23/99f21ec58d52e7ebf0ec9d9f022d9d14_1589204872202004144.png'
const rightArrowChangeBg4 = ref()
// 'https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2022/09/23/f688748fd532d201b9f8810e275b0e3f_6877776947729540757.png'
// JavaScript 代码
document.addEventListener('DOMContentLoaded', function () {
  // 获取时间轴列表和切换按钮
  var timelineList = document.getElementById('timelineList')
  var prevButton = document.getElementById('prevButton')
  var nextButton = document.getElementById('nextButton')

  // 设置每次切换的位移量
  var step = 300 // 假设每次切换 300px

  // 向前切换按钮点击事件
  prevButton.addEventListener('click', function () {
    timelineList.scrollLeft -= step // 向左滚动
  })

  // 向后切换按钮点击事件
  nextButton.addEventListener('click', function () {
    timelineList.scrollLeft += step // 向右滚动
  })
})

const p4Paginations = ref<string[]>([
  'https://webstatic.mihoyo.com/upload/op-public/2021/11/12/be890111a5a4e904219b5514672ca29a_5391610122551803033.png',
  'https://webstatic.mihoyo.com/upload/op-public/2021/11/12/3dc43d6fc7f2f0cc0b1d84f8d3a8ca6b_5010791790203761005.png',
  'https://webstatic.mihoyo.com/upload/op-public/2021/11/12/758954ddcffc39cb0d487114174c3949_4694224143298760540.png',
  'https://webstatic.mihoyo.com/upload/op-public/2021/11/12/35427b2e03fd190310aac1ad24f12dde_2546310471563307463.png',
  'https://webstatic.mihoyo.com/upload/op-public/2021/11/12/57b3436033f128a73eb0a408e680ebfa_5674466218505358185.png',
  'https://webstatic.mihoyo.com/upload/op-public/2021/11/12/e87390d4e528ff7b539861cccc4e7e05_1744499204553962039.png',
  'https://webstatic.mihoyo.com/upload/op-public/2021/10/03/7de06678a2b2a08361f1720c4207633f_7363418870897180657.png',
  'https://webstatic.mihoyo.com/upload/op-public/2021/11/12/1756f3a190535e1ebc3a9134ed3cc918_2015760630281845443.png',
  'https://webstatic.mihoyo.com/upload/op-public/2023/02/27/5ed9692182bfe3697b5d062c8aa724f5_2339632450759206061.png',
  'https://webstatic.mihoyo.com/upload/op-public/2021/11/12/44c08e9f018523ee9429f821c658c2d7_5556620968002944689.png',
  'data:image/png;base64,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'
])

const temp = ref<string[]>([
  'https://webstatic.mihoyo.com/upload/op-public/2021/11/12/be890111a5a4e904219b5514672ca29a_5391610122551803033.png',
  'https://webstatic.mihoyo.com/upload/op-public/2021/11/12/3dc43d6fc7f2f0cc0b1d84f8d3a8ca6b_5010791790203761005.png',
  'https://webstatic.mihoyo.com/upload/op-public/2021/11/12/758954ddcffc39cb0d487114174c3949_4694224143298760540.png',
  'https://webstatic.mihoyo.com/upload/op-public/2021/11/12/35427b2e03fd190310aac1ad24f12dde_2546310471563307463.png',
  'https://webstatic.mihoyo.com/upload/op-public/2021/11/12/57b3436033f128a73eb0a408e680ebfa_5674466218505358185.png',
  'https://webstatic.mihoyo.com/upload/op-public/2021/11/12/e87390d4e528ff7b539861cccc4e7e05_1744499204553962039.png',
  'https://webstatic.mihoyo.com/upload/op-public/2021/10/03/7de06678a2b2a08361f1720c4207633f_7363418870897180657.png',
  'https://webstatic.mihoyo.com/upload/op-public/2021/11/12/1756f3a190535e1ebc3a9134ed3cc918_2015760630281845443.png',
  'https://webstatic.mihoyo.com/upload/op-public/2023/02/27/5ed9692182bfe3697b5d062c8aa724f5_2339632450759206061.png',
  'https://webstatic.mihoyo.com/upload/op-public/2021/11/12/44c08e9f018523ee9429f821c658c2d7_5556620968002944689.png',
  'data:image/png;base64,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'
])

const p4PaginationsSel = ref<string[]>([
  'https://webstatic.mihoyo.com/upload/op-public/2021/11/12/be890111a5a4e904219b5514672ca29a_5391610122551803033.png',
  'https://webstatic.mihoyo.com/upload/op-public/2021/11/12/3dc43d6fc7f2f0cc0b1d84f8d3a8ca6b_5010791790203761005.png',
  'https://webstatic.mihoyo.com/upload/op-public/2021/11/12/758954ddcffc39cb0d487114174c3949_4694224143298760540.png',
  'https://webstatic.mihoyo.com/upload/op-public/2021/11/12/35427b2e03fd190310aac1ad24f12dde_2546310471563307463.png',
  'https://webstatic.mihoyo.com/upload/op-public/2021/11/12/57b3436033f128a73eb0a408e680ebfa_5674466218505358185.png',
  'https://webstatic.mihoyo.com/upload/op-public/2021/11/12/e87390d4e528ff7b539861cccc4e7e05_1744499204553962039.png',
  'https://webstatic.mihoyo.com/upload/op-public/2021/10/03/7de06678a2b2a08361f1720c4207633f_7363418870897180657.png',
  'https://webstatic.mihoyo.com/upload/op-public/2021/11/12/1756f3a190535e1ebc3a9134ed3cc918_2015760630281845443.png',
  'https://webstatic.mihoyo.com/upload/op-public/2023/02/27/5ed9692182bfe3697b5d062c8aa724f5_2339632450759206061.png',
  'https://webstatic.mihoyo.com/upload/op-public/2021/11/12/44c08e9f018523ee9429f821c658c2d7_5556620968002944689.png',
  'data:image/png;base64,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'
])

const pagination = ref<any>({
  el: '.swiper-pagination4',
  //clickable: true,
  type: 'custom',
  renderCustom: function (swiper: any, current: number, total: number) {
    var paginationHtml = ''
    let start = Math.max(0, current - 2) // Start from current - 2 or 0 if current - 2 is negative
    let end = Math.min(total, start + 3) // End at start + 3 or total, whichever is smaller

    for (var i = start; i < end; i++) {
      // 判断是不是激活焦点，是的话添加active类，不是就只添加基本样式类
      //   if (i === current - 1) {
      //     // console.log("total:", current, total);
      //     // paginationClick(i)
      //     pag4inationActive(i - 1)
      //   }
      //   paginationHtml += `<span class="swiper-pagination-bullet">${i}</span>`
      // // Adjust index to start from 1 instead of 0
      var pageIndex = i + 1
      // Check if the current index is the active one
      var isActive = i === current - 1

      // Determine the class based on isActive
      var bulletClass = isActive ? 'swiper-pagination-bullet-active' : ''

      // Append the HTML for the bullet with the appropriate class
      paginationHtml += `<span class="swiper-pagination-bullet ${bulletClass}" onclick="paginationClick(${i})">${pageIndex}</span>`
    }
    return paginationHtml
  }
})

var swiperCopy: any = ref()
const onSwiper = (swiper: any) => {
  swiperCopy = swiper
}

// const temp = p4Paginations.value
const paginationClick = (index: number) => {
  // console.log(index);
  swiperCopy.slideTo(index, 100, false)
  pag4inationActive(index)
}

const pag4inationActive = (index: number) => {
  for (let i = 0; i < p4Paginations.value.length; i++) {
    p4Paginations.value[i] = temp.value[i]
  }
  p4Paginations.value[index] = p4PaginationsSel.value[index]
}
</script>

<style scoped>
.home {
  position: relative;
  position: relative;

  width: 100%;
  background-color: #f8f9fb;
  height: 100%;
  font-family: 'Microsoft YaHei', 微软雅黑, 'MicrosoftJhengHei', PingFang, MingLiu, sans-serif;
}
.home-about {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
.about-history {
  position: relative;
  width: 1000px;
  height: 800px;
  bottom: 150px;
  left: 100px;
}

.about-history-title {
  position: relative;
  left: 16%;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  font-weight: bold;
  color: #242933;
}
.about-history-title b {
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

.swiper {
  left: 15%;
  top: 0rem;
  width: 800px;
  height: 700px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  background: transparent !important;
  z-index: 1;
}

.swiper-slide .bg {
  width: 40%;
  height: 40%;
  top: 0%;
  left: 30%;
  position: relative;
}

.swiper-slide .bg .audiostylec {
  position: relative;
  top: 330px;
  /* top: 0px; */
  left: 333px;
  width: 164px;
  height: 51px;
}

/**下图字 */
.about-history .event-item__info-label {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  height: 2rem;
  font-size: 1.18rem;
  font-weight: bold;
  overflow: hidden;
}
/* 左右按钮 */
.swiper-button-prev {
  position: absolute;
  left: 12rem;
  top: 24.5rem;
  width: 3rem;
  height: 3rem;
  outline: none;
  z-index: 1;
  border: 1px solid #868686;
  cursor: pointer;
}
.swiper-button-next {
  position: absolute;
  left: 66rem;
  top: 24.5rem;
  width: 3rem;
  height: 3rem;
  z-index: 1;
  border: 1px solid #868686;
  cursor: pointer;
}
.swiper-button-prev:hover,
.swiper-button-next:hover {
  background-color: #3778e5;
  /* background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAASCAYAAABit09LAAAAAXNSR0IArs4c6QAAAJNJREFUKFOF0jEOwjAMheHfKudAohJnoYemAjGVE3COTnQzCnUrxXHSLFk+K/aLhYOjql0i0nKqegbuwFKFhh5AD7xC6NAbuBUwRCJzBmsoG6aFdniE/tBy+gBXYG1cZPaxeTgBQwhTpXs6xPvUhp/ABShwFM+Gs35rgRe49YU5rm2P6zleiq3Y8Ah8m/to0Z3S/QPLCV9Gvg2wEQAAAABJRU5ErkJggg==); */
  border-color: rgba(0, 0, 0, 0);
}
.swiper-button-prev.disabled,
.swiper-button-next.disabled {
  opacity: 0.3;
}
.swiper-button-prev.disabled:hover,
.swiper-button-next.disabled:hover {
  border-color: #868686;
  background-color: rgba(0, 0, 0, 0);
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAASCAYAAABit09LAAAAAXNSR0IArs4c6QAAAKVJREFUKFOF0jEOAiEQBdA/aOAWJmtiwyno9ALcVqOx0oKac1hpaWYDm4UdgIbmDZn5DGFwvPc7JtRz1tqDUuoK4NeECd0BHAE8RbhGRPTWWp83UEIhhE8BW6gYpocWOEIz5JxijBHAKTfOPdWxFRDAyxhzESFXVpmJeJk64QeASXpZimfGdb+twDe494UFHi1F7lleipxhGvAG4NvdRy5wzu35/gN9Q1JfwOUE0gAAAABJRU5ErkJggg==);
}

/**-----------------------------------------重复 */

/*swiper设置 */
.swiper-container {
  width: 800px;
  height: 200px;

  margin: 20px auto;
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
  top: 1.9rem;
  left: 9.2rem;
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
  width: 1.5px;
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
.btn-12 {
  position: relative;
  right: 15px;
  bottom: 10px;
  border: none;
  box-shadow: none;
  /* width: 10px; */
  height: 40px;
  line-height: 42px;
  -webkit-perspective: 230px;
  perspective: 230px;
  cursor: pointer;
}
.btn-12 span {
  background: #3778e5;
  background: linear-gradient(0deg, rgba#3778e5 0%, rgb(0, 172, 238, 1) 100%);
  display: block;
  position: absolute;

  width: 140px;
  height: 40px;

  border-radius: 0px;
  margin: 0;
  text-align: center;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.btn-12 span:nth-child(1) {
  color: #f8f9fb;
  -webkit-transform: rotateX(90deg);
  -moz-transform: rotateX(90deg);
  transform: rotateX(90deg);
  -webkit-transform-origin: 50% 50% -20px;
  -moz-transform-origin: 50% 50% -20px;
  transform-origin: 50% 50% -20px;
}
.btn-12 span:nth-child(2) {
  background-color: #fff;
  -webkit-transform: rotateX(0deg);
  -moz-transform: rotateX(0deg);
  transform: rotateX(0deg);
  -webkit-transform-origin: 50% 50% -20px;
  -moz-transform-origin: 50% 50% -20px;
  transform-origin: 50% 50% -20px;
}
.btn-12:hover span:nth-child(1) {
  /* box-shadow:
    inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1),
    4px 4px 5px 0px rgba(0, 0, 0, 0.1); */
  -webkit-transform: rotateX(0deg);
  -moz-transform: rotateX(0deg);
  transform: rotateX(0deg);
}
.btn-12:hover span:nth-child(2) {
  /* box-shadow:
    inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1),
    4px 4px 5px 0px rgba(0, 0, 0, 0.1); */
  color: transparent;
  -webkit-transform: rotateX(-90deg);
  -moz-transform: rotateX(-90deg);
  transform: rotateX(-90deg);
}
</style>
