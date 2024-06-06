<!-- 吴亦桐同学采用html文件写的，故引入html页面 -->
<!-- <template>
  <iframe :src="src" frameborder="0" style="width: 100%; height: 100vh"></iframe> -->
  <!-- 否则无法触发鼠标滚动事件 -->
  <!-- <div id="catch_mouth"></div>
  
</template> -->

<!-- <script>
export default {
  data() {
    return {
      src: '/产品信息1/wenjian.html'
    }
  }
}
</script> -->
<!-- <style>
#catch_mouth{
  position: relative;
  top: -100vh;
  width: 100%;
  height:70vh;/*不能全覆盖，按钮空出 */
}
</style> -->


<!-- <script setup>
import product_info from '../components/产品信息1/ProductInfo.vue'
</script> -->

<!-- <template>
  <main>
    <product_info />
  </main>
</template> -->


<template>

  <div>
    <iframe :src="src" frameborder="0" style="width: 100%; height: 100vh"></iframe>
    <div id="catch_mouth"></div>
    <div id="app">
      <div class="icons-container">
        <div v-for="icon in icons" :key="icon.id" class="icon" :style="{ backgroundImage: 'url(' + icon.iconUrl + ')' }" @click="showDetail(icon)"></div>
      </div>

      <div id="detail" v-if="selectedIcon">
        <div class="image-container">
          <img :src="selectedIcon.backgroundImage" class="background-image" alt="背景图片">
          <img :src="selectedIcon.foregroundImage" class="foreground-image" alt="产品图片">
        </div>
        <div class="title-image-container">
          <img :src="selectedIcon.titleImage" class="title-image" alt="标题图片">
          <p class="title-text">{{ selectedIcon.titleText }}</p>
        </div>
        <div class="detail-content">
          <div class="description">
            <p v-html="selectedIcon.description"></p>
            <div class="links">
              <a :href="selectedIcon.links.game" target="_blank">游戏官网</a>
              <a :href="selectedIcon.links.weibo" target="_blank">微博</a>
              <a href="#" @mouseover="showQrCode(selectedIcon.qrCode)" @mouseout="hideQrCode">微信公众号</a>
              <a :href="selectedIcon.links.bilibili" target="_blank">Bilibili</a>
            </div>
            <img v-if="showingQrCode" :src="qrCodeImage" class="qr-code" alt="二维码">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        {
          id: 1,
          iconUrl: 'https://webstatic.mihoyo.com/upload/op-public/2021/10/11/320a35c423a3d8ca043d7ee14a8c7925_602536019813937911.png',
          titleImage: 'https://webstatic.mihoyo.com/upload/op-public/2021/10/03/ff83e8d2ff3bbd4d3458fcce73eb55d9_8896280881150939108.png',
          backgroundImage: 'https://webstatic.mihoyo.com/upload/op-public/2021/10/03/0c7ff1681d2a2ebf7d7f80f8b56e8da3_5691545681815171367.png',
          foregroundImage: 'https://fastcdn.mihoyo.com/content-v2/plat/100577/82848bd2282a1cf7c3b3b68f36f1dbf9_196881664372621863.png',
          description: '<p style="white-space: pre-wrap; text-align: right;">米哈游崩坏系列经典Q版射击游戏。</p><p style="white-space: pre-wrap; text-align: right;">末日都市之旅，指尖爽快战斗，开启与少女们的末世物语。</p>',
          titleText: 'Houkai Gakuen 2',
          links: {
            game: 'https://www.benghuai.com/',
            weibo: 'https://weibo.com/u/1980539365',
            bilibili: 'https://space.bilibili.com/133934?from=search&seid=7948633669391971947'
          },
          qrCode: 'https:\u002F\u002Fwebstatic.mihoyo.com\u002Fupload\u002Fstatic-resource\u002F2021\u002F08\u002F09\u002F2997c3646577c605aa2a3a59afb8b695_5102855849738412851.jpg'
        },
        {
          id: 2,
          iconUrl: 'https://webstatic.mihoyo.com/upload/op-public/2021/10/03/4080f2eb748823d8c38507c3d7b69b36_936817768851375073.png',
          titleImage: 'https://webstatic.mihoyo.com/upload/op-public/2021/10/03/9b6377159a2ea2c033c406a99bb8e200_1893454564161809799.png',
          backgroundImage: 'https://webstatic.mihoyo.com/upload/op-public/2021/10/03/ed7e29cc149996a8788b14ef3c5f63e3_2471557931028337740.png',
          foregroundImage: 'https://webstatic.mihoyo.com/upload/op-public/2021/10/03/663fe95dff54044d7cd5d3a355f61bf7_6089937633900261947.png',
          description: '<p style="white-space: pre-wrap; text-align: right;">米哈游崩坏系列3D全视角卡通渲染、次世代动作游戏。</p><p style="white-space: pre-wrap; text-align: right;">在被崩坏侵蚀的世界中，勇敢的少女组成的女武神部队，为守护世界而展开了战斗。</p><p style="white-space: pre-wrap; min-height: 1.5em;"></p>',
          titleText: 'Honkai Impact 3rd',
          links: {
            game: 'https:\u002F\u002Fbh3.mihoyo.com\u002F',
            weibo: 'https:\u002F\u002Fweibo.com\u002Fbenghuai3',
            bilibili: 'https:\u002F\u002Fspace.bilibili.com\u002F27534330?from=search&seid=5295102234387797014'
          },
          qrCode: 'https:\u002F\u002Fwebstatic.mihoyo.com\u002Fupload\u002Fstatic-resource\u002F2021\u002F08\u002F09\u002F36c4008a87c245f5c057d7f91c4ee53c_5609068881434679938.png'
        },
        {
          id: 3,
          iconUrl: 'https://webstatic.mihoyo.com/upload/op-public/2021/10/03/a103c80cb895bfdfb7496f4233b63158_8329011972047580487.png',
          titleImage: 'https://webstatic.mihoyo.com/upload/op-public/2021/10/03/47bc404e6e1f5c84c98a23793de77dcd_3931369823459487780.png',
          backgroundImage: 'https://webstatic.mihoyo.com/upload/op-public/2021/10/03/bf4a984982aa8f8ca961d5298afc0c9f_3817884679908679166.png',
          foregroundImage: 'https://webstatic.mihoyo.com/upload/op-public/2021/10/03/8d1f82811b02f86a5c74c329c413f7c4_7122814728754206230.png',
          description: '<p style="white-space: pre-wrap; text-align: right;">米哈游律政恋爱推理游戏。</p><p style="white-space: pre-wrap; text-align: right;">你将扮演新人律师，在与他携手解决离奇委托的过程中，被卷入不为人知的阴谋。</p><p style="white-space: pre-wrap; text-align: right;">这是一场恋爱×推理的冒险，你将做出怎样的抉择？</p>',
          titleText: 'Tears of Themis',
          links: {
            game: 'https:\u002F\u002Fwd.mihoyo.com\u002Ffab\u002Fbdsem',
            weibo: 'https:\u002F\u002Fweibo.com\u002Fu\u002F7072153506',
            bilibili: 'https:\u002F\u002Fspace.bilibili.com\u002F436175352?from=search&seid=2195952268787938307&spm_id_from=333.337.0.0'
          },
          qrCode: 'https:\u002F\u002Fwebstatic.mihoyo.com\u002Fupload\u002Fstatic-resource\u002F2021\u002F08\u002F09\u002F7f4ae3b0b8a8228474c482eb96f85713_7335718778613705158.png'
        },
        {
          id: 4,
          iconUrl: 'https:\u002F\u002Fwebstatic.mihoyo.com\u002Fupload\u002Fop-public\u002F2021\u002F10\u002F09\u002Fdef1f2abcfc2af0bbe2e5900a60a5ee1_5699547505742166353.png',
          titleImage: 'https:\u002F\u002Fwebstatic.mihoyo.com\u002Fupload\u002Fop-public\u002F2021\u002F10\u002F03\u002Fe9f77840280f95d106fe10d366347506_3990256051696986081.png',
          backgroundImage: 'https:\u002F\u002Fwebstatic.mihoyo.com\u002Fupload\u002Fop-public\u002F2021\u002F10\u002F03\u002F811190df78ddfe9c0bd88825dd652da7_8644322533796562202.png',
          foregroundImage: 'https:\u002F\u002Fwebstatic.mihoyo.com\u002Fupload\u002Fop-public\u002F2021\u002F10\u002F03\u002F58574b8c47e058787cc24049413b7cea_7872872512863208275.png',
          description:   '\u003Cp style="white-space: pre-wrap; text-align: right;"\u003E米哈游全新开放世界角色冒险游戏。\u003C\u002Fp\u003E\u003Cp style="white-space: pre-wrap; text-align: right;"\u003E你将在游戏中探索一个被称作「提瓦特」的幻想世界。\u003C\u002Fp\u003E',
          titleText: 'Genshin Impact',
          links: {
            game: 'https:\u002F\u002Fys.mihoyo.com\u002Fmain\u002F',
            weibo: 'https:\u002F\u002Fweibo.com\u002Fu\u002F6593199887',
            bilibili: 'https:\u002F\u002Fspace.bilibili.com\u002F401742377?from=search&seid=4576134198751221824'
          },
          qrCode: 'https:\u002F\u002Fwebstatic.mihoyo.com\u002Fupload\u002Fstatic-resource\u002F2021\u002F08\u002F05\u002F397c774ea38a6180eb46a9359effbabc_7047935735519102029.png'
        },
        {
          id: 5,
          iconUrl: 'https:\u002F\u002Fwebstatic.mihoyo.com\u002Fupload\u002Fop-public\u002F2021\u002F10\u002F09\u002F870472d6104dbbe7ea18b27c13763ccb_5300916022261002498.png',
          titleImage: 'https:\u002F\u002Fwebstatic.mihoyo.com\u002Fupload\u002Fop-public\u002F2021\u002F10\u002F09\u002F54da4869475fbaea33507df96c9f346f_8560873109620344935.png',
          backgroundImage: 'https:\u002F\u002Fwebstatic.mihoyo.com\u002Fupload\u002Fop-public\u002F2021\u002F10\u002F09\u002F16d60aa477213608dc11b06321f005ea_8839305475824861605.png',
          foregroundImage: 'https:\u002F\u002Fwebstatic.mihoyo.com\u002Fupload\u002Fop-public\u002F2021\u002F10\u002F09\u002F6c0e9aaa5b9471e32316d11284edb710_2698450106633206665.png',
          description:   '\u003Cp style="white-space: pre-wrap; text-align: right; line-height: 1.9;"\u003E米哈游全新银河冒险策略游戏。\u003C\u002Fp\u003E\u003Cp style="white-space: pre-wrap; text-align: right; line-height: 1.9;"\u003E你将由此探索新的文明，结识新的伙伴，\u003C\u002Fp\u003E\u003Cp style="white-space: pre-wrap; text-align: right; line-height: 1.9;"\u003E在无数光怪陆离的「世界」与「世界」之间展开新的冒险。\u003C\u002Fp\u003E\u003Cp style="white-space: pre-wrap; text-align: right; line-height: 1.9;"\u003E所有你想知道的，都将在群星中找到答案。\u003C\u002Fp\u003E',
          titleText: 'Honkai: Star Rail',
          links: {
            game: 'https:\u002F\u002Fsr.mihoyo.com\u002F',
            weibo: 'https:\u002F\u002Fweibo.com\u002Fu\u002F7643376782',
            bilibili: 'https:\u002F\u002Fspace.bilibili.com\u002F1340190821'
          },
          qrCode: 'https:\u002F\u002Fwebstatic.mihoyo.com\u002Fupload\u002Fstatic-resource\u002F2021\u002F10\u002F09\u002F29ef9666d637b65e188addee2d46c1b5_3427221492004810391.jpg'
        },
        {
          id: 6,
          iconUrl: 'https:\u002F\u002Fwebstatic.mihoyo.com\u002Fupload\u002Fop-public\u002F2022\u002F05\u002F27\u002F3896559583929f643fbe39ec1d6ca1c9_1026345827445617861.png',
          titleImage: 'https:\u002F\u002Fwebstatic.mihoyo.com\u002Fupload\u002Fop-public\u002F2023\u002F01\u002F12\u002F5e465a5f498c41774a328d1a38e3a484_619561523732626502.png',
          backgroundImage: 'https:\u002F\u002Fwebstatic.mihoyo.com\u002Fupload\u002Fop-public\u002F2022\u002F07\u002F12\u002Fd7d93400acc4d012c36c6dc9714b7ec1_4262837943903430365.png',
          foregroundImage: 'https:\u002F\u002Fwebstatic.mihoyo.com\u002Fupload\u002Fop-public\u002F2022\u002F07\u002F12\u002Fdd6757d0dd9627865f88221bb807178d_701447427251294272.png',
          description:   '\u003Cp style="white-space: pre-wrap; text-align: right;"\u003E米哈游自研的全新动作游戏。\u003C\u002Fp\u003E\u003Cp style="white-space: pre-wrap; text-align: right;"\u003E在这个空洞灾祸频仍的世界里，崛起了一座另类的城市——「新艾利都」。\u003C\u002Fp\u003E\u003Cp style="white-space: pre-wrap; text-align: right;"\u003E而你将成为串联起空洞与都市的关键少数派，名为「绳匠」的特殊职业人士。\u003C\u002Fp\u003E\u003Cp style="white-space: pre-wrap; text-align: right;"\u003E这里正等待着见证你的故事。\u003C\u002Fp\u003E',
          titleText: 'Zenless Zone Zero',
          links: {
            game: 'https:\u002F\u002Fjuequling.mihoyo.com\u002F',
            weibo: 'https:\u002F\u002Fweibo.com\u002Fu\u002F7632078520',
            bilibili: 'https:\u002F\u002Fspace.bilibili.com\u002F1636034895?spm_id_from=333.337.0.0'
          },
          qrCode: 'https:\u002F\u002Fwebstatic.mihoyo.com\u002Fupload\u002Fstatic-resource\u002F2022\u002F07\u002F12\u002F70db72d8a5f116e50e01e80b5c3edbae_778250817817036086.jpg'
        },
        {
          id: 7,
          iconUrl: 'https:\u002F\u002Fwebstatic.mihoyo.com\u002Fupload\u002Fop-public\u002F2021\u002F10\u002F09\u002Fc218c585aac4aad0a30ab9a6e0e0794c_3908343860724847173.png',
          titleImage: 'https:\u002F\u002Fwebstatic.mihoyo.com\u002Fupload\u002Fop-public\u002F2021\u002F10\u002F03\u002Fbe07bad24d1b938be2b44b0b97b14c10_7983250959525070198.png',
          backgroundImage: 'https:\u002F\u002Fwebstatic.mihoyo.com\u002Fupload\u002Fop-public\u002F2021\u002F10\u002F03\u002Fbd6c5bffb67da91de86dc34ff0a98472_7873346693440217547.png',
          foregroundImage: 'https:\u002F\u002Fwebstatic.mihoyo.com\u002Fupload\u002Fop-public\u002F2021\u002F10\u002F03\u002F4a30498a7e37d6897c27723e377998df_4453430102298956645.png',
          description:   '\u003Cp style="white-space: pre-wrap; text-align: right;"\u003E米哈游旗下游戏玩家社区。\u003Cbr\u003E集合了官方资讯、福利趣闻、实用工具及同人作品。\u003Cbr\u003E让有爱的小伙伴们相聚在这里，一起聊游戏、找攻略、领奖励。\u003C\u002Fp\u003E',
          titleText: 'MIYOUSHE',
          links: {
            game: 'https:\u002F\u002Fbbs.mihoyo.com\u002F',
            weibo: 'https:\u002F\u002Fweibo.com\u002Fu\u002F7189835620',
            bilibili: 'https:\u002F\u002Fspace.bilibili.com\u002F510189715?from=search&seid=16095934172179221010'
          },
          qrCode: 'https:\u002F\u002Fwebstatic.mihoyo.com\u002Fupload\u002Fstatic-resource\u002F2021\u002F08\u002F09\u002Fb850dc9cda4ce5d79bcff34224dfdb11_4680315806624169619.jpg'
        },
        {
          id: 8,
          iconUrl: 'https:\u002F\u002Fwebstatic.mihoyo.com\u002Fupload\u002Fop-public\u002F2021\u002F10\u002F12\u002F7bca19669fd95c1a961a26dc009c342e_7821980510293425191.png',
          titleImage: 'https:\u002F\u002Fwebstatic.mihoyo.com\u002Fupload\u002Fop-public\u002F2021\u002F10\u002F03\u002Fe9214d33ca2e19406f1fd511fdf5b9e8_3053264761189050333.png',
          backgroundImage: 'https:\u002F\u002Fwebstatic.mihoyo.com\u002Fupload\u002Fop-public\u002F2021\u002F10\u002F03\u002F5719437f0bca73af397e68a7282cbc93_456652085037690370.png',
          foregroundImage: 'https:\u002F\u002Fwebstatic.mihoyo.com\u002Fupload\u002Fop-public\u002F2021\u002F10\u002F03\u002Fc86c8d09f16a90f56ee44a3a19ac92b2_6081395262607720905.png',
          description:   '\u003Cp style="white-space: pre-wrap; text-align: right;"\u003E米哈游旗下动态桌面软件。\u003Cbr\u003E一键点击唤醒鹿鸣，\u003Cbr\u003E感受专属陪伴和沉浸式体验。\u003C\u002Fp\u003E',
          titleText: 'NOva Desktop',
          links: {
            game: 'https:\u002F\u002Fn0va.mihoyo.com\u002F',
            weibo: 'https:\u002F\u002Fweibo.com\u002Fu\u002F7476362936',
            bilibili: 'https:\u002F\u002Fspace.bilibili.com\u002F488836173?from=search&seid=507835342989199665'
          },
          qrCode: 'https:\u002F\u002Fwebstatic.mihoyo.com\u002Fupload\u002Fstatic-resource\u002F2021\u002F08\u002F09\u002Fe6ff3d1c95fe9d7f67fc7a082459da8c_3447397678047864186.png'
        }
      ],
      selectedIcon: null,
      showingQrCode: false,
      qrCodeImage: '',
      autoSwitchTimer: null
    };
  },
  mounted() {
    this.startAutoSwitch();
  },
  methods: {
    showDetail(icon) {
      this.selectedIcon = icon;
      document.getElementById('detail').style.display = 'flex';
      this.stopAutoSwitch();
    },
    showQrCode(qrCode) {
      this.qrCodeImage = qrCode;
      this.showingQrCode = true;
    },
    hideQrCode() {
      this.showingQrCode = false;
    },
    startAutoSwitch() {
      this.autoSwitchTimer = setInterval(() => {
        const currentIndex = this.icons.findIndex(icon => icon === this.selectedIcon);
        const nextIndex = (currentIndex + 1) % this.icons.length;
        this.showDetail(this.icons[nextIndex]);
      }, 2000);
    },
    stopAutoSwitch() {
      if (this.autoSwitchTimer) {
        clearInterval(this.autoSwitchTimer);
        this.autoSwitchTimer = null;
      }
    }
  },
  beforeUnmount() {
    this.stopAutoSwitch();
  }
};
</script>

<style scoped>
#catch_mouth {
  position: relative;
  top: -100vh;
  width: 100%;
  height: 70vh;
}

.icons-container {
  position: absolute;
  bottom: 75px;
  left: 380px;
  padding-left: 20px;
  display: flex;
  flex-wrap: wrap;
}

.icon {
  cursor: pointer;
  width: 65px;
  height: 65px;
  background-position: center;
  background-size: 62px 62px;
  background-repeat: no-repeat;
  background-color: white;
  display: inline-block;
  margin: 3px;
  border-radius: 5px;
  border: 2px solid transparent;
  overflow: hidden;
  background-clip: content-box;
}

.icon:hover {
  border: 2px solid blue;
}

#detail {
  position: fixed;
  top: 50px;
  bottom: 170px;
  left: 0;
  background-color: white;
  color: black;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.image-container {
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  width: 100%;
  height: auto;
}

.background-image {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
  width: 1100px; /* 背景图片参数调整 */ 
  height: 180px;
}

.foreground-image {
  position: relative;
  z-index: 2;
  width: 1100px;/* 人物图片参数调整 */ 
  height: 580px;
  max-width: 100%;
}

.title-image-container {
  position: absolute;
  top: 50px; /* 根据需要从顶部位置调整 */ 
  right: 0;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: auto;
}

.title-image {
  width: 100%;
}

.title-text {
  margin: 0;
  text-align: right;
  width: 100%;
  color: #0085B7;
}

.description {
  padding: 10px;
  box-sizing: border-box;
  text-align: right;
  margin-top: auto;
}

.links {
  margin-top: 10px;
  font-family: 'SimHei';
  display: flex;
  justify-content: space-between;
  position: relative; /* 使二维码相对于链接定位 */
}

.links a {
  color: black;
  text-decoration: none;
  margin: 0 10px;
}

.links a:hover {
  color: blue;
}

.qr-code {
  position: absolute;
  top: 430px; /* 根据需要调整位置 */
  right: 90px; /* 水平居中 */
  transform: translateX(-50%); /* 水平居中 */
  width: 95px; /* 根据需要调整大小 */
  height: 95px; /* 根据需要调整大小 */
}

.links a {
  color: black;
  text-decoration: none;
  margin: 0 10px;
}

.links a:hover {
  color: blue;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}

.slide-left-enter-active {
  transition: transform 0.5s;
}
.slide-left-enter {
  transform: translateX(-100%);
}

.slide-right-enter-active {
  transition: transform 0.5s;
}
.slide-right-enter {
  transform: translateX(100%);
}

.delayed-slide-right {
  transition: transform 1s 0.5s; /* 延迟0.5秒 */
}
.delayed-slide-right-05 {
  transition: transform 1s 1s; /* 延迟1秒 */
}
</style>