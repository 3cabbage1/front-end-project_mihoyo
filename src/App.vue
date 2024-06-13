<script>
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
export default {
  data() {
    return {
      routeIndex: 1,//路由序号
      nav_show: true,//导航栏显示标记
      slide_direction: 0,//组件滑动方向标记（1：向上；-1：向下；0：不动）
      navigatorList: [
        {
          name: '首页',
          path: '/aside1'
        },
        {
          name: '产品信息',
          path: '/aside2'
        },
        {
          name: '了解我们',
          path: '/aside3'
        },
        {
          name: '产品信息',
          path: '/aside4'
        }
      ],
      navIndex: 0,//导航栏序号
    }
  },
  //  组件挂载完后调用添加滚动事件监听器  
  mounted() {
    window.addEventListener('wheel', this.handleScroll);
  },
  //  组件全部卸载后移除滚动事件监听器  
  unmounted() {
    window.removeEventListener('wheel', this.handleScroll)
  },
  methods: {
    handleScroll(e) {
      // 向下滚动
      if (e.deltaY > 0) {
        // 清除之前可能设置的任何定时器。防止快速滚动时多次触发路由更改。
        clearTimeout(this.timer)
        //鼠标向下滚动，组件应该向上移动
        if (this.routeIndex != 4)
          this.slide_direction = 1;
        // 设置定时器时间延迟，防止短时内连续的路由更改。
        this.timer = setTimeout(() => {
          // 若到最末页，结束
          if (this.routeIndex === 4) {
            return;
          }
          else {
            // 否则切换路由到下一页
            this.routeIndex++;

            this.$router.push('/aside' + this.routeIndex);
          }
        }, 300)
      }
      // 向上滚动
      if (e.deltaY < 0) {
        // 清除之前可能设置的任何定时器。防止快速滚动时多次触发路由更改。
        clearTimeout(this.timer)
        if (this.routeIndex != 1)
          this.slide_direction = -1;//鼠标向上滚动，组件应该向下移动
        // 设置定时器时间延迟，防止短时内连续的路由更改。
        this.timer = setTimeout(() => {
          // 若到最末页，结束
          if (this.routeIndex === 1) {
            return;
          } else {
            // 否则切换路由到上一页
            this.routeIndex--;
            this.$router.push('/aside' + this.routeIndex);
          }
        }, 300)
      }
    },
    // handkeNav(index){
    //   this.navIndex = index;
    // }
  },
  watch: {
    // 监听路由
    $route(to, from) {
      console.log(this.slide_direction, to, from);
    this.navIndex=this.navigatorList.findIndex((item)=>item.path==to.href) 
      this.routeIndex = to.meta.index;//保证当前routeIndex就是当前渲染路由的index（从而保证通过导航栏点击跳转后routeIndex值不会出错）
      to.meta.direction = this.slide_direction;//更新组件滑动方向值
      //  console.log("to.meta.direction",to.meta.direction)
      // 首页导航栏不显示
      if (this.routeIndex === 1)
        this.nav_show = false;
      else
        this.nav_show = true;

      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if (to.meta.index > from.meta.index) {
        //设置动画名称
        this.transitionName = 'slide-left';
      } else {
        this.transitionName = 'slide-right';
      }
    },

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
      <nav v-if="nav_show" class="navBox">
        <img class="logo" src="/产品信息1/logo.png" alt="logo" />
        <div class="nav_tab">
          <RouterLink :to="item.path" style="text-decoration: none;" v-for="(item, index) in navigatorList">
            <div id="aside" :class="navIndex== index ? 'active' : ''" @click="handkeNav(index)">{{ item.name}}</div>
          </RouterLink>
          <!-- <RouterLink to="/aside1" style="text-decoration: none;"><div id="aside1">首页</div></RouterLink>
          <RouterLink to="/aside2" style="text-decoration: none;"><div id="aside2">产品信息</div></RouterLink>
          <RouterLink to="/aside3" style="text-decoration: none;"><div id="aside3">了解我们</div></RouterLink>
          <RouterLink to="/aside4" style="text-decoration: none;"><div id="aside4">加入我们</div></RouterLink> -->
        </div>
      </nav>
    </div>
    <!-- <transition :name="transitionName"> -->
    <!-- 路由出口，组件渲染到这里 -->
    <RouterView />
    <!-- </transition> -->
  </header>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.navBox {
  height: 75px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 55px;
  box-sizing: border-box;
  position: fixed;
  top: 1;
  z-index: 999999;
  background-color: white;
}

.logo {
  height: 35px;
}

.nav_tab {
  height: 100%;
  display: flex;
}

#aside {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  color: black;
}

.active {
  font-weight: 700 !important;
  color: #3778e5 !important;
}

nav {
  position: sticky;
  /*粘性定位，实现导航条随内容一起滚动并在碰到浏览器视口顶端后于顶部固定*/
  top: 0px;
}

/* .slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
 will-change: transform;
 transition: all 500ms;
 position: absolute;
}
.slide-right-enter {

 transform: translateY(-30%);
}
.slide-right-leave-active {

 transform: translateY(30%);
}
.slide-left-enter {

 transform: translateY(30%);
}
.slide-left-leave-active {

 transform: translateY(-30%);
} */
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
