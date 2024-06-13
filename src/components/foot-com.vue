<template>
  <div id="app" class="container">
      <div class="right">
          <img src="../assets/logo.png" alt="miHoYo Logo" class="logo" />
      </div>
      <div class="left">
          <div class="links-section">
              <a href="https://user.mihoyo.com/#/privacyAgreement" target="_blank">隐私政策</a> |
              <a href="https://webstatic.mihoyo.com/upload/static-resource/2021/11/06/2bc5f2f06b88aea5380c4babe396cf16_1085792848868029218.pdf"
                  target="_blank">自律公约</a>
              |
              <a href="https://www.mihoyo.com/company/jubao" target="_blank">廉政举报</a> |
              <a href="https://www.mihoyo.com/company/contact" target="_blank">联系我们</a> |
              <a href="https://jobs.mihoyo.com" target="_blank">加入我们</a>
          </div>
          <div class="content-section">
              <p>健康游戏忠告：抵制不良游戏，拒绝盗版游戏。注意自我保护，避免受骗上当。适度游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活。</p>
              <p><a href="https://beian.mps.gov.cn/#/query/webSearch" target="_blank">沪公网安备31010402001113号</a> |
                  增值电信业务经营许可证：沪B2-20190555</p>
              <p><a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">ICP备19018275号-4</a> |
                  沪网文(2022) 1334-052号</p>
              <p>互联网违法不良信息举报邮箱：tousu@service.mihoyo.com | 互联网违法不良信息举报电话：021-60371750 (工作时间：每天10点 - 20点)</p>
              <p>亲爱的市民朋友，上海市互联网违法和不良信息举报中心 "962110" 号码为针对其侵犯您财产损害的设备，请您一旦收到来电，立即接听。</p>
              <p>未成年人举报热线：021-60371740 (服务时间：8:00-23:00)</p>
              <p>©miHoYo | 上海米哈游影铁科技有限公司 | 客服电话：400-666-6312</p>
          </div>
          <div class="images-section">
              <a href="https://xinyong.yunaq.com/certificate?domain=www.mihoyo.com&from=label&code=90020"
                  target="_blank"> <img src="../assets/shiming_1575020038_4113.png" alt="认证图1" /></a>
              <a href="https://www.shjbzx.cn/" target="_blank"> <img src="../assets/jubao_1575020039_5071.png"
                      alt="认证图2" /> </a>
              <a target="_blank" href="https://www.12377.cn/"><img src="../assets/youhai_1589857356_1416.png"
                      alt="认证图3" /></a>
              <a target="_blank"
                  href="http://sq.ccm.gov.cn/ccnt/sczr/service/business/emark/toDetail/8955A9DDE1FF8B6CE053010A14ACA87F">
                  <img src="../assets/culture_1575020039_5478.png" alt="认证图4" /></a>
              <a href="#"><img src="../assets/e110_1575020039_7486.png" alt="认证图5" /></a>
              <a href="https://wap.scjgj.sh.gov.cn/businessCheck/verifKey.do?showType=extShow&serial=9031000020190314100540000004452331-SAIC_SHOW_310000-20200120150237277642&signData=MEYCIQCjn9IhIKfUHjPlx9W6xrYPZ4GA73Blopwp0iEzSX0OHQIhAOZm3tnlWLrgVXMtvgp5OibauIgiAa+2d+MQ7qzMIm6t"
                  target="_blank">
                  <img src="../assets/zhizhao_1575020039_4362.png" alt="认证图6" /></a>
          </div>
      </div>
  </div>
</template>
<script setup>
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}

.container {
  background-color: #000;
  color: #999;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}

.header {
  display: flex;
  align-items: center;
}

.logo-section {
  flex: 1;
}

.logo {
  width: 200px;
}

.left {
  padding: 20px;
  margin-right: 50px;
}

.right {
  margin: auto 0;
}

.links-section {
  flex: 3;
  text-align: left;
  font-size: 14px;
  margin-top: 30px;
}

.links-section a {
  color: #fff;
  margin: 0 10px;
  text-decoration: none;
}



.links-section a:hover {
  text-decoration: underline;
}

.content-section {
  margin-top: 20px;
  font-size: 14px;
}

.content-section a {
  color: #999;
  text-decoration: none;
}

.content-section a:hover {
  text-decoration: underline;
}

.images-section {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}

.images-section img {
  width: 116px;
  margin-bottom: 30px;
}
</style>