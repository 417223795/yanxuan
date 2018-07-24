<template>
  <section class="living" v-if="shortList[mainIndex]">
    <img class="top-image" :src="shortList[mainIndex].imgUrl">
    <cut-off></cut-off>
    <living-product :item="shortList[mainIndex].subCateList" :titleItem="shortList[mainIndex]"></living-product>
  </section>
</template>

<script>
import CutOff from '../../../components/CutOff/CutOff'
import PubSub from 'pubsub-js'
import LivingProduct from '../../../components/LivingProduct/LivingProduct'
import {mapState} from 'vuex'
export default {
  data () {
    return {
      items: [],
      mainIndex: Number
    }
  },
  components: {
    CutOff,
    LivingProduct
  },
  mounted () {
    // 自己订阅自己发布，为了是传递index数值，组件之间传递数据，可以把数据挂载到vuex中的state中(这样全局都可以使用了)，
    // 也可以用消息订阅发布(这样可以实现的是某两个或多个组件之间的消息订阅发布)
    // 订阅消息
    PubSub.subscribe('setIndex', (msg, index) => {
      this.mainIndex = index
    })
    // 不同组件之间传递数据可以使用消息订阅发布
    // 发送消息
    PubSub.publish('setIndex', (this.index))
    console.log(this.shortList, this)
  },
  computed: {
    ...mapState(['newItemNewUserList', 'headCates']),
    nowIndex () {
      return this.$route.params
    },
    index () {
      return this.$route.params.index
    },
    shortList () {
      return this.headCates.slice(1, -1)
    }
  },
  // 我们必须监视这里数据，当index数值变化之后我们可以重新渲染页面，实现点击之后显示对应的页面的操作
  watch: {
    index (val) {
      this.mainIndex = val
      console.log(this.val)
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../../common/less/less";
.living{
  /*margin-top: 87.98/@rem;*/
  margin-bottom: 1.306rem;
  .top-image{
    width: 100%;
    height: 420/@rem;
  }
}
</style>
