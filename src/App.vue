<script>
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
 export default{
  data(){
    return{
      routeIndex:1,
    }
  },
//  组件挂载完后调用添加滚动事件监听器  
 mounted(){
  window.addEventListener('wheel', this.handleScroll);
 },
//  组件全部卸载后移除滚动事件监听器  
unmounted(){
window.removeEventListener('wheel',this.handleScroll)
},
methods:{
  handleScroll(e){
    // 向下滚动
    if(e.deltaY>0){
      // 清除之前可能设置的任何定时器。防止快速滚动时多次触发路由更改。
      clearTimeout(this.timer)
      // 设置定时器时间延迟，防止短时内连续的路由更改。
      this.timer=setTimeout(()=>{
        // 若到最末页，结束
        if(this.routeIndex===4) {
        return;
      }
      else{
      // 否则切换路由到下一页
      this.routeIndex++;
     
      this.$router.push('/aside'+this.routeIndex);
      }
      },500)
    }
     // 向上滚动
    if(e.deltaY<0){
      // 清除之前可能设置的任何定时器。防止快速滚动时多次触发路由更改。
      clearTimeout(this.timer)
      // 设置定时器时间延迟，防止短时内连续的路由更改。
      this.timer=setTimeout(()=>{
        // 若到最末页，结束
        if(this.routeIndex===1) {
        return;
        }else{
      // 否则切换路由到上一页
      this.routeIndex--;
      this.$router.push('/aside'+this.routeIndex);
        }
      },500)
    }
  }
},
watch:{
  // 监听器：保证当前routeIndex就是当前渲染路由的index（从而保证通过导航栏点击跳转后routeIndex值不会出错）
 $route(to){
 this.routeIndex=to.meta.index;
}

}
}
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <div class="wrapper">
      <!-- 导航栏使用路由进行导航 -->
      <!-- to指定链接 -->
      <!-- 呈现一个带正确href属性的<a>标签 -->
      <nav>
        <ul>
          <RouterLink to="/aside1">首页</RouterLink>
          <RouterLink to="/aside2">产品信息</RouterLink>
          <RouterLink to="/aside3">了解我们</RouterLink>
          <RouterLink to="/aside4">加入我们</RouterLink>
        </ul>
      </nav>
    </div>
    <!-- 路由出口，组件渲染到这里 -->
    <RouterView />
  </header>
</template>

<style scoped>
nav {
  position: sticky; /*粘性定位，实现导航条随内容一起滚动并在碰到浏览器视口顶端后于顶部固定*/
  top: 0px;
}
nav ul {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

/* header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
