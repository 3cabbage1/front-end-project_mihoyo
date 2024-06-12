<template>
  <div class="bdgrid"> <!-- Add the bdgrid class here -->
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
          qrCode: 'https://webstatic.mihoyo.com/upload/static-resource/2021/08/09/2997c3646577c605aa2a3a59afb8b695_5102855849738412851.jpg'
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
            game: 'https://bh3.mihoyo.com/',
            weibo: 'https://weibo.com/benghuai3',
            bilibili: 'https://space.bilibili.com/27534330?from=search&seid=5295102234387797014'
          },
          qrCode: 'https://webstatic.mihoyo.com/upload/static-resource/2021/08/09/36c4008a87c245f5c057d7f91c4ee53c_5609068881434679938.png'
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
            game: 'https://wd.mihoyo.com/fab/bdsem',
            weibo: 'https://weibo.com/u/7072153506',
            bilibili: 'https://space.bilibili.com/436175352?from=search&seid=2195952268787938307&spm_id_from=333.337.0.0'
          },
          qrCode: 'https://webstatic.mihoyo.com/upload/static-resource/2021/08/09/7f4ae3b0b8a8228474c482eb96f85713_7335718778613705158.png'
        },
        {
          id: 4,
          iconUrl: 'https://webstatic.mihoyo.com/upload/op-public/2021/10/09/def1f2abcfc2af0bbe2e5900a60a5ee1_5699547505742166353.png',
          titleImage: 'https://webstatic.mihoyo.com/upload/op-public/2021/10/03/e9f77840280f95d106fe10d366347506_3990256051696986081.png',
          backgroundImage: 'https://webstatic.mihoyo.com/upload/op-public/2021/10/03/811190df78ddfe9c0bd88825dd652da7_8644322533796562202.png',
          foregroundImage: 'https://webstatic.mihoyo.com/upload/op-public/2021/10/03/58574b8c47e058787cc24049413b7cea_7872872512863208275.png',
          description:   '<p style="white-space: pre-wrap; text-align: right;">米哈游全新开放世界角色冒险游戏。</p><p style="white-space: pre-wrap; text-align: right;">你将在游戏中探索一个被称作「提瓦特」的幻想世界。</p>',
          titleText: 'Genshin Impact',
          links: {
            game: 'https://ys.mihoyo.com/main/',
            weibo: 'https://weibo.com/u/6593199887',
            bilibili: 'https://space.bilibili.com/401742377?from=search&seid=4576134198751221824'
          },
          qrCode: 'https://webstatic.mihoyo.com/upload/static-resource/2021/08/05/397c774ea38a6180eb46a9359effbabc_7047935735519102029.png'
        },
        {
          id: 5,
          iconUrl: 'https://webstatic.mihoyo.com/upload/op-public/2021/10/09/870472d6104dbbe7ea18b27c13763ccb_5300916022261002498.png',
          titleImage: 'https://webstatic.mihoyo.com/upload/op-public/2021/10/09/54da4869475fbaea33507df96c9f346f_8560873109620344935.png',
          backgroundImage: 'https://webstatic.mihoyo.com/upload/op-public/2021/10/09/16d60aa477213608dc11b06321f005ea_8839305475824861605.png',
          foregroundImage: 'https://webstatic.mihoyo.com/upload/op-public/2021/10/09/6c0e9aaa5b9471e32316d11284edb710_2698450106633206665.png',
          description:   '<p style="white-space: pre-wrap; text-align: right; line-height: 1.9;">米哈游全新银河冒险策略游戏。</p><p style="white-space: pre-wrap; text-align: right; line-height: 1.9;">你将由此探索新的文明，结识新的伙伴，</p><p style="white-space: pre-wrap; text-align: right; line-height: 1.9;">在无数光怪陆离的「世界」与「世界」之间展开新的冒险。</p><p style="white-space: pre-wrap; text-align: right; line-height: 1.9;">所有你想知道的，都将在群星中找到答案。</p>',
          titleText: 'Honkai: Star Rail',
          links: {
            game: 'https://sr.mihoyo.com/',
            weibo: 'https://weibo.com/u/7643376782',
            bilibili: 'https://space.bilibili.com/1340190821'
          },
          qrCode: 'https://webstatic.mihoyo.com/upload/static-resource/2021/10/09/29ef9666d637b65e188addee2d46c1b5_3427221492004810391.jpg'
        },
        {
          id: 6,
          iconUrl: 'https://webstatic.mihoyo.com/upload/op-public/2022/05/27/3896559583929f643fbe39ec1d6ca1c9_1026345827445617861.png',
          titleImage: 'https://webstatic.mihoyo.com/upload/op-public/2023/01/12/5e465a5f498c41774a328d1a38e3a484_619561523732626502.png',
          backgroundImage: 'https://webstatic.mihoyo.com/upload/op-public/2022/07/12/d7d93400acc4d012c36c6dc9714b7ec1_4262837943903430365.png',
          foregroundImage: 'https://webstatic.mihoyo.com/upload/op-public/2022/07/12/dd6757d0dd9627865f88221bb807178d_701447427251294272.png',
          description:   '<p style="white-space: pre-wrap; text-align: right;">米哈游自研的全新动作游戏。</p><p style="white-space: pre-wrap; text-align: right;">在这个空洞灾祸频仍的世界里，崛起了一座另类的城市——「新艾利都」。</p><p style="white-space: pre-wrap; text-align: right;">而你将成为串联起空洞与都市的关键少数派，名为「绳匠」的特殊职业人士。</p><p style="white-space: pre-wrap; text-align: right;">这里正等待着见证你的故事。</p>',
          titleText: 'Zenless Zone Zero',
          links: {
            game: 'https://juequling.mihoyo.com/',
            weibo: 'https://weibo.com/u/7632078520',
            bilibili: 'https://space.bilibili.com/1636034895?spm_id_from=333.337.0.0'
          },
          qrCode: 'https://webstatic.mihoyo.com/upload/static-resource/2022/07/12/70db72d8a5f116e50e01e80b5c3edbae_778250817817036086.jpg'
        },
        {
          id: 7,
          iconUrl: 'https://webstatic.mihoyo.com/upload/op-public/2021/10/09/c218c585aac4aad0a30ab9a6e0e0794c_3908343860724847173.png',
          titleImage: 'https://webstatic.mihoyo.com/upload/op-public/2021/10/03/be07bad24d1b938be2b44b0b97b14c10_7983250959525070198.png',
          backgroundImage: 'https://webstatic.mihoyo.com/upload/op-public/2021/10/03/bd6c5bffb67da91de86dc34ff0a98472_7873346693440217547.png',
          foregroundImage: 'https://webstatic.mihoyo.com/upload/op-public/2021/10/03/4a30498a7e37d6897c27723e377998df_4453430102298956645.png',
          description:   '<p style="white-space: pre-wrap; text-align: right;">米哈游旗下游戏玩家社区。<br>集合了官方资讯、福利趣闻、实用工具及同人作品。<br>让有爱的小伙伴们相聚在这里，一起聊游戏、找攻略、领奖励。</p>',
          titleText: 'MIYOUSHE',
          links: {
            game: 'https://bbs.mihoyo.com/',
            weibo: 'https://weibo.com/u/7189835620',
            bilibili: 'https://space.bilibili.com/510189715?from=search&seid=16095934172179221010'
          },
          qrCode: 'https://webstatic.mihoyo.com/upload/static-resource/2021/08/09/b850dc9cda4ce5d79bcff34224dfdb11_4680315806624169619.jpg'
        },
        {
          id: 8,
          iconUrl: 'https://webstatic.mihoyo.com/upload/op-public/2021/10/12/7bca19669fd95c1a961a26dc009c342e_7821980510293425191.png',
          titleImage: 'https://webstatic.mihoyo.com/upload/op-public/2021/10/03/e9214d33ca2e19406f1fd511fdf5b9e8_3053264761189050333.png',
          backgroundImage: 'https://webstatic.mihoyo.com/upload/op-public/2021/10/03/5719437f0bca73af397e68a7282cbc93_456652085037690370.png',
          foregroundImage: 'https://webstatic.mihoyo.com/upload/op-public/2021/10/03/c86c8d09f16a90f56ee44a3a19ac92b2_6081395262607720905.png',
          description:   '<p style="white-space: pre-wrap; text-align: right;">米哈游旗下动态桌面软件。<br>一键点击唤醒鹿鸣，<br>感受专属陪伴和沉浸式体验。</p>',
          titleText: 'NOva Desktop',
          links: {
            game: 'https://n0va.mihoyo.com/',
            weibo: 'https://weibo.com/u/7476362936',
            bilibili: 'https://space.bilibili.com/488836173?from=search&seid=507835342989199665'
          },
          qrCode: 'https://webstatic.mihoyo.com/upload/static-resource/2021/08/09/e6ff3d1c95fe9d7f67fc7a082459da8c_3447397678047864186.png'
        }
      ],
      selectedIcon: null,
      showingQrCode: false,
      qrCodeImage: '',
      autoSwitchTimer: null
    };
  },
  methods: {
    showDetail(icon) {
      this.selectedIcon = icon;
      this.$nextTick(() => {
        const foregroundImage = document.querySelector('.foreground-image');
        const titleImage = document.querySelector('.title-image');

        if (foregroundImage) {
          foregroundImage.classList.remove('slide-in');
          // 强制重绘，使得每次添加类时都能触发动画
          void foregroundImage.offsetWidth;
          foregroundImage.classList.add('slide-in');
        }

        if (titleImage) {
          titleImage.classList.remove('slide-in-right');
          // 强制重绘，使得每次添加类时都能触发动画
          void titleImage.offsetWidth;
          titleImage.classList.add('slide-in-right');
        }

        document.getElementById('detail').style.display = 'flex';
      });
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
      }, 3000); // Change interval to 3000ms (3 seconds)
    },
    stopAutoSwitch() {
      if (this.autoSwitchTimer) {
        clearInterval(this.autoSwitchTimer);
        this.autoSwitchTimer = null;
      }
    }
  },
  mounted() {
    this.showDetail(this.icons[0]); // Show the detail of the first icon by default
    this.startAutoSwitch();
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
  top: 50px; /* 根据你的页眉高度调整这个值 */
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
  width: 1100px;
  height: 220px;
}

/* existing styles */

.foreground-image {
  position: relative;
  z-index: 2;
  width: 1100px;
  height: 620px;
  max-width: 100%;
  opacity: 0; /* Start hidden */
  transition: transform 1s ease-out, opacity 1s ease-out; /* Slide in and fade in animation */
}

.slide-in {
  transform: translateX(0);
  opacity: 1; /* Make visible */
}

/* Initial state off-screen to the left */
.foreground-image:not(.slide-in) {
  transform: translateX(-100%);
}

.title-image {
  width: 100%;
  opacity: 0; /* Start hidden */
  transition: transform 1s ease-out, opacity 1s ease-out; /* Slide in and fade in animation */
}

.slide-in-right {
  transform: translateX(0);
  opacity: 1; /* Make visible */
}

/* Initial state off-screen to the right */
.title-image:not(.slide-in-right) {
  transform: translateX(100%);
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
  top: 450px; /* 根据需要调整位置 */
  right:100px; /* 水平居中 */
 /* transform: translateX(-200%);  水平居中 */
  width:80px; /* 根据需要调整大小 */
  height: 80px; /* 根据需要调整大小 */
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

/* 网格背景 */
.bdgrid {
  /* 背景基础设置 */
  height: 100%;
  width: 100%;
  background-size: 100% 100%;
  position: absolute;
  /* left: -10px; */
  margin: 0;

  background:
    /* 水平条纹 */
    -webkit-linear-gradient(
      /*渐变方向:从上到下*/ top,
      /*最开始背景色*/ #8394b50b 0,/* 背景色 */
      /* 这几行用于控制网格线条粗细 */
      /*到3.5px均背景色*/ #8394b50b 3.5px,
      /*到4.3px过渡为浅蓝色线条色*/ #576e971c 4.1px, /* 线条色 */
      /*以此类推*/ #8394b50b 4.7px,
      #8394b50b 60px,
      #4f689506 60px
    ),
    /* 垂直条纹 */
    -webkit-linear-gradient(left, /*最开始背景色*/ #8394b50b 0,
      /*到3.5px均背景色*/ #8394b50b 3.5px,
      /*到4.3px过渡为浅蓝色线条色*/ #576e971c 4.1px,
      /*以此类推*/ #8394b50b 4.7px,
      #8394b50b 60px,
      #4f689506 60px);

  /* 网格大小参数 */
  -webkit-background-size: 20px 20px;
  -moz-background-size: 20px 20px;
  background-size: 20px 20px;
}
</style>
