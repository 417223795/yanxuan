<template>
    <footer class="footer">
      <div class="item"
           :class="{on:isRoute('/main/recommend') || isRoute('/main/living') || isRoute(`/main/living${mainIndex}`)}"
           @click="goto('/main/recommend')">
        <div class="iconfont icon-shouye1"></div>
        <span class="text-main">首页</span>
      </div>
      <div class="item" :class="{on:isRoute('/topic')}" @click="goto('/topic')">
        <div class="iconfont icon-cub"></div>
        <span>识物</span>
      </div>
      <div class="item" :class="{on:isRoute('/item')}" @click="goto('/item')">
        <div class="iconfont icon-drawer2chouti"></div>
        <span>分类</span>
      </div>
      <div class="item" :class="{on:isRoute('/cart')}" @click="goto('/cart')">
        <div class="iconfont icon-gouwuche"></div>
        <span>购物车</span>
      </div>
      <div class="item" :class="{on:isRoute('/login')}" @click="goto('/login')">
        <div class="iconfont icon-geren"></div>
        <span>个人</span>
      </div>
    </footer>
</template>

<script>
export default {
  computed: {
    // 这里是获取params里面的index参数，这样就可以获取数据，判断下面的footer是否显示
    mainIndex () {
      return this.$route.params.index
    }
  },
  methods: {
    // replace跳转路由。不会保存历史记录，即上面点击之后会执行这里的操作进行跳转
    goto (path) {
      this.$router.replace(path)
    },
    // vue中所有的组件都有$route属性，我们可以直接操作里面的属性赋值地址
    isRoute (path) {
      return this.$route.path === path
    }
  }
}
</script>

<style lang="less" scoped>
  @import "../../common/less/less";
  .footer{
    background-color: white;
    position: fixed;
    width: 100%;
    font-size: 0.32rem;
    height: 1.306rem;
    bottom: 0;
    display: flex;
    color: #666;
    vertical-align:middle;
    .top-border-1px();
    .item{
      flex: 1;
      text-align: center;
      display: flex;
      flex-direction: column;
      padding: 1px;
      justify-content:center;
      &.on{
        color: #b4282d;
      }
      .iconfont{
        width: 0.5333rem;
        height: 0.5333rem;
        margin: 0 auto;
        background-repeat: no-repeat;
        background-size: .53333rem 6.53333rem;
        font-size: 0.6rem;
      }
      span{
        margin-top: 12/@rem;
      }
    }
  }
</style>
