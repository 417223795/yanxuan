<template>
  <!--我们在这里的设置的app会最终渲染在页面上，页面上显示的是这里设置的app，而不是index.html里面的app-->
  <div class="app">
    <router-view></router-view>
    <footer-guide v-show="$route.meta.showFooter"></footer-guide>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide'
export default {
  components: {
    FooterGuide
  }
}
</script>

<style>
  /*我们可以在这里设置宽高，使其最外层的容器有了高度，这样里面组件就可以直接继承父元素的宽高*/
.app{
  width: 100%;
  height: 100%;
}
</style>
