<template>
<div class="foot">
   <div class="ileft">
    <img style="width: 200px;height: 70px;" src="../assets/1.jpg" alt="">
   </div>
   <div class="iright">
     <div class="tit">
      <!-- 插入链接 -->
      <a href="https://user.mihoyo.com/#/privacyAgreement"> 
      <span>隐私政策</span>
    </a>
      <span> | </span>
      <span>自律公约</span><span> | </span><span>廉政举报</span><span> | </span><span>联系我们</span><span> | </span><span>关于我们</span>
     </div>
     <div class="tit_">
      沪公网安备31010402001113号 |  增值电信业务经营许可证：沪B2-20190555              
     </div>
     <div class="tit_">
      沪ICP备19018275号-4  |   沪网文〔2022〕1334-052号 
     </div>
     <div class="tit_">
      互联网违法不良信息举报邮箱: tousu@service.mihoyo.com  互联网违法不良信息举报电话: 021-60371750 （工作时间：每天10点 - 20点）                      
     </div>
     <div class="tit_">
      亲爱的市民朋友，上海警方反诈劝阻电话“962110”系专门针对避免您财产被骗受损而设，请您一旦收到来电，立即接听            
     </div>
     <div class="tit_">
      未成年成长关爱热线：021-60371740 （服务时间：8:00-23:00）     
     </div>
     <div class="tit_">
      ©miHoYo | 上海米哈游影铁科技有限公司  客服电话：400-666-6312       
     </div>
     <div class="tit_">
      <img style="width: 800px;height: 76px;" src="../assets/2.jpg" alt="">      
     </div>
   </div>
</div>
</template>
<style lang="scss" scoped>
.foot{
  background-color:#000;
  width: 100%;
  height: 343px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .iright{
    .tit{
      color:#fff;
      margin-bottom:20px;
    }
    .tit_{
      color:#AAA;
      margin-bottom: 10px;
    }
  }
}
// 链接样式设置
a{
  color:#fff;
  text-decoration-line: none;
}
a:hover{
  text-decoration-line:underline;
}
</style>