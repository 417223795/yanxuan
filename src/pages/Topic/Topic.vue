<template>
  <div class="wrap">
    <header>
      <i class="iconfont icon-shouye1 header-icon"></i>
      网易严选
      <i class="iconfont icon-gouwuche header-icon"></i>
      <i class="iconfont icon-sousuo header-icon"></i>
    </header>

    <div class="content-wrap-main">
      <div class="content-wrap">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in banners" :key="index">
              <img :src="item.picUrl">
            </div>
          </div>
        </div>

        <div class="header-goods-wrap">
          <div class="header-goods-container">
            <div class="header-goods" v-for="(item,index) in columns" :key="index">
              <img :src="item.picUrl">
              <div>{{item.title}}</div>
            </div>
          </div>
        </div>
        <cut-off></cut-off>

        <topic-list v-for="index in 2" :key="index"></topic-list>
        <cut-off></cut-off>
        <div class="swiper-contend-wrap">
          <div class="header">十点一刻</div>
          <div class="swiper-contend">
            <ul>
              <li v-for="(item, index) in tenfifteens" :key="index">
                <div class="swiper-contend-title">— 今日话题 —</div>
                <div class="swiper-contend-main">{{item.title}}</div>
                <div class="swiper-contend-content">{{item.desc}}</div>
                <div class="swiper-contend-annotation">{{item.participantNum}}人参与话题</div>
              </li>
            </ul>
          </div>
        </div>
        <cut-off></cut-off>
        <topic-list></topic-list>
        <cut-off></cut-off>
        <div class="topic-video-wrap">
          <div class="topic-video-title">严选LOOK</div>
          <video class="topic-video"
                 controls
                 poster="http://yanxuan.nosdn.127.net/yx-topic-1531997741819r9mv9q0g.jpg"
          >
            <source src="https://yanxuan.nosdn.127.net/1bb7149aa982ca48d141499e18239170.mp4"
                    type="video/mp4"
            >
          </video>
          <div class="topic-video-avatar">
            <img src="http://yanxuan.nosdn.127.net/be23f31e86d9db771072eb33f60fb067.png">选妹
          </div>
          <div class="topic-video-annotation">唤自然系列</div>
        </div>
        <div class="click-more" @click="isShow = true">
          <span class="line-left"></span>
          <span class="click-more-text">更多精彩</span>
          <span class="line-right"></span>
        </div>
        <!--我们这里可以动态的添加相应的样式-->
        <div class="topic-bottom-list-wrap" :style="isShow?'display: block':'display: none'">
          <div class="topic-bottom-list" v-for="(item, index) in findMores" :key="index">
            <img :src="item.itemPicUrl">
            <div class="topic-bottom-list-text">{{item.subTitle}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import CutOff from '../../components/CutOff/CutOff'
import TopicList from '../../components/TopicList/TopicList'
import BScroll from 'better-scroll'

import {mapState} from 'vuex'
export default {
  data () {
    return {
      isShow: false
    }
  },
  mounted () {
    this.$store.dispatch('getRecommend')
    /* eslint-disable no-new */
    new Swiper('.swiper-container', {
      loop: true,
      autoplay: true
    })
    /* eslint-disable no-new */
    new BScroll('.swiper-contend', {
      scrollX: true,
      click: true
    })
    /* eslint-disable no-new */
    new BScroll('.header-goods-wrap', {
      scrollX: true,
      click: true
    })
    /* eslint-disable no-new */
    new BScroll('.content-wrap-main', {
      scrollX: true,
      click: true,
      bounce: {
        top: false,
        bottom: false,
        left: false,
        right: false
      },
      stopPropagation: true
    })
    this.$store.dispatch('getBanner')
    this.$store.dispatch('getColumn')
    this.$store.dispatch('getTenfifteen')
    this.$store.dispatch('getFindMore')
  },
  computed: {
    ...mapState(['banners', 'columns', 'tenfifteens', 'findMores'])
  },
  components: {
    CutOff,
    TopicList
  }
}
</script>

<style lang="less" scoped>
  @import "../../common/less/less";
  .wrap{
    width: 100%;
    height: 100%;
    header{
      position: fixed;
      top: 0;
      z-index: 20;
      .bottom-border-1px();
      background-color: #fafafa;
      height: 87.98/@rem;
      width: 100%;
      padding: 0 .21333rem 0 .32rem;
      box-sizing: border-box;
      font-size: 0.6rem;
      font-family: 楷体;
      text-align: center;
      line-height: 87.98/@rem;
      .header-icon{
        font-size: 0.7rem;
      }
      i:first-child{
        text-align: left;
        float: left;
      }
      i:not(:first-child){
        float: right;
      }
      .icon-gouwuche{
        margin-left: 0.5rem;
      }
    }
    .content-wrap-main{
      width: 100%;
      height: 100%;
      .content-wrap{
        margin: 87.98/@rem 0 1.306rem;
        width: 10rem;
        overflow: hidden;
        .swiper-container{
          width: 670/@rem;
          height: 388/@rem;
          padding: .32rem 0;
          .swiper-wrapper{
            .swiper-slide{
              img{
                width: 100%;
                height: 100%;
              }
            }
          }
        }
        .header-goods-wrap{
          padding : 0 24/@rem;
          box-sizing: border-box;
          height: 288/@rem;
          width: 10rem;
          overflow: hidden;
          .header-goods-container{
            float: left;
            white-space: nowrap;
            padding : 0 24/@rem;
            .header-goods{
              /*flex: 1;*/
              width: 164/@rem;
              height: 288/@rem;
              box-sizing: border-box;
              display: inline-block;
              margin-right: 24/@rem;
              img{
                width: 164/@rem;
                height: 164/@rem;
                margin: 24/@rem 0;
              }
              div{
                width: 184/@rem;
                height: 24/@rem;
                text-align: center;
                line-height: 24/@rem;
                color: #333;
                font-size: .32rem;
              }
            }
          }
        }
        .swiper-contend-wrap{
          .header{
            height: 120/@rem;
            width: 100%;
            text-align: center;
            line-height: 120/@rem;
            font-size: .42667rem;
          }
          .swiper-contend{
            width: 100%;
            overflow: hidden;
            ul{
              float: left;
              white-space: nowrap;
              margin-left: 24/@rem;
              li{
                width: 580/@rem;
                height: 411/@rem;
                background-image: url("./images/3.png");
                background-size: 100%;
                display: inline-block;
                margin: 0 24/@rem 24/@rem 0;
                >div{
                  margin-top: 48/@rem;
                  text-align: center;
                }
                .swiper-contend-title{
                  font-size: .32rem;
                  line-height: 1.5;
                  color: #7f7f7f;
                }
                .swiper-contend-main{
                  font-size: .42667rem;
                  margin: 24/@rem 0;
                }
                .swiper-contend-content{
                  font-size: .4rem;
                  margin: 24/@rem 0;
                }
                .swiper-contend-annotation{
                  font-size: .32rem;
                  line-height: 1.5;
                  color: #7f7f7f;
                }
              }
            }
          }
        }
        .topic-video-wrap{
          width: 10rem;
          box-sizing: border-box;
          .topic-video-title{
            background-color: #fff;
            text-align: center;
            font-size: .42667rem;
            height: 1.6rem;
            line-height: 1.6rem;
          }
          .topic-video{
            height: 422/@rem;
            background-color: pink;
            width: 10rem;
          }
          .topic-video-avatar{
            font-size: 0.32rem;
            width: 10rem;
            height: 60/@rem;
            box-sizing: border-box;
            padding: 0 0 0 24/@rem;
            line-height: 100/@rem;
            img{
              width: 46/@rem;
              height: 46/@rem;
              border-radius: 50%;
              vertical-align: middle;
            }
          }
          .topic-video-annotation{
            font-size: .37333rem;
            line-height: 60/@rem;
            color: #7f7f7f;
            width: 10rem;
            height: 60/@rem;
            padding: 16/@rem 0 60/@rem 24/@rem;
          }
        }
        .click-more{
          width: 10rem;
          box-sizing: border-box;
          padding: 0 24/@rem;
          height: 140/@rem;
          color: #333;
          background-color: #eee;
          display: flex;
          justify-content: center;
          align-items: center;
          .line-left{
            height: 1/@rem;
            width: 35%;
            border-bottom: 0.5px solid #7e8c8d;
          }
          .click-more-text{
            font-size: .37333rem;
            margin: 0 24/@rem;
          }
          .line-right{
            width: 35%;
            height: 1/@rem;
            border-bottom: 0.5px solid #7e8c8d;
          }
        }
        .topic-bottom-list-wrap{
          width: 10rem;
          background-color: #eee;
          box-sizing: border-box;
          padding: 0 36/@rem;
          .topic-bottom-list{
            width: 690/@rem;
            height: 498/@rem;
            background-color: white;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            padding-top: 36/@rem;
            margin-bottom: 36/@rem;
            img{
              width: 642/@rem;
              height: 360/@rem;
            }
            .topic-bottom-list-text{
              width: 642/@rem;
              height: 90/@rem;
              font-size: .37333rem;
              line-height: 90/@rem;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
        }
      }
    }
  }
</style>
