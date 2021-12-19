<!--
 * @Author: your name
 * @Date: 2021-11-25 21:17:51
 * @LastEditTime: 2021-11-25 21:17:52
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \tabbar\src\views\home\home.vue
-->
<template>
  <div id="home">
    <!--    顶部-->
    <nav-bar class="home-nav">
      <template v-slot:center>购物街</template>
    </nav-bar>
    <tab-control :titles="titles"
                 ref="tabControl1"
                 @tabClick="tabClick"
                 class="tabControl"
                 v-show="isTabFixed"
    ></tab-control>
    <scroll class="wrapper"
            ref="scroll"
            @showScroll="showScroll"
            @pullUpLoad="pullUpLoad">
      <div class="content">
        <!--    轮播图-->
        <swiper :bannerImg="banners" :port="url" @swiperImgLoad="swiperImgLoad"></swiper>
        <!--    推荐信息-->
        <recommend :recommends="recommends" :port="url"></recommend>
        <!--    -->
        <future-view></future-view>
        <!--    -->
        <tab-control :titles="titles"
                     ref="tabControl2"
                     @tabClick="tabClick"

        ></tab-control>
        <goods-list :goodsList="showGoodsList" :port="url"></goods-list>
      </div>
    </scroll>
    <back-top @click.native="backClick" v-show="backTopIsShow"></back-top>
  </div>

</template>

<script>
import navBar from "@/components/common/navbar/NavBar";
import swiper from "@/components/common/swiper/swiper";
import Scroll from "@/components/common/scroll/Scroll";

import Recommend from "@/components/content/recommend/Recommend";
import TabControl from "@/components/content/tabControl/TabControl";
import GoodsList from "@/components/content/goods/GoodsList";
import BackTop from "@/components/content/backTop/BackTop";

import {getHomeBanner, getHomeRecommends, getHomeGoods} from "@/network/home";

import FutureView from "@/views/home/childComponents/FutureView";

import {debounce} from "@/common/utils/Utils";
//import BScroll from "better-scroll";

export default {
  data() {
    return {
      banners: null,
      recommends: null,
      titles: ['流行', '精选', '新款'],
      url: this.$store.state.host,//后端的主机端口
      goods: {
        'pop': {page: 1, list: []},
        'new': {page: 1, list: []},
        'sell': {page: 1, list: []}
      },
      currentType: "pop",
      scroll: null,
      backTopIsShow: false,
      tabOffSet: 0,
      isTabFixed: false,
      scrollY:0,
      isNetWorkComplete:false
    }
  },
  components: {
    Scroll,
    BackTop,
    // Scroll,
    GoodsList,
    TabControl,
    FutureView,
    Recommend,
    navBar,
    swiper
  },
  created() {
    //轮播图数据
    this.saveHomeBanner()
    //推荐信息数据
    this.saveHomeRecommends()
    //商品信息
    this.saveHomeGoods("pop")
    this.saveHomeGoods("sell")
    this.saveHomeGoods("new")
  },
  mounted() {
    //监听图片加载，刷新scroll高度
    //this.debounce(this.$refs.scroll.refresh,200)()
    const refresh = debounce(this.$refs.scroll.refresh, 50)
    this.$bus.$on("itemImgLoad", () => {
      refresh()
    })
  },
  computed: {
    showGoodsList() {
      return this.goods[this.currentType].list
    }
  },
  methods: {
    initScroll() {
      //判断vuex中state全部为true
      if (this.$store.state.isGoodsComplete && this.$store.state.isBannerComplete && this.$store.state.isRecommendsComplete) {
        //短路运算，如果没有实例，就会实例化，如果实例化，就直接短路
        !this.$refs.scroll.scroll && this.$refs.scroll._initScroll()
      }
    },
    //请求轮播图信息
    saveHomeBanner() {
      //请求并保存
      getHomeBanner().then(res => {
        this.banners = res.data
        !this.$store.state.isBannerComplete && this.$store.commit("changeBannersToComplete")
        this.initScroll()
      })
    },
    //请求推荐信息
    saveHomeRecommends() {
      //请求推荐信息数据
      getHomeRecommends().then(res => {
        this.recommends = res.data
        !this.$store.state.isRecommendsComplete && this.$store.commit("changeRecommendsToComplete")
        this.initScroll()
      })
    },
    //请求商品信息
    saveHomeGoods(type) {
      const page = this.goods[type].page;
      getHomeGoods(type, page).then(res => {
        if (res.data) {
          this.goods[type].list.push(...res.data)
        }
        !this.$store.state.isGoodsComplete && this.$store.commit("changeGoodsToComplete")
        this.initScroll()
        this.isNetWorkComplete=true
        this.goods[type].page++
        this.$refs.scroll.finishPullUp()
        this.$nextTick(() => {
          this.$refs.scroll.scroll.refresh // DOM 结构发生变化后，重新初始化BScroll
        })
        this.$refs.scroll.finishPullUp()
        //dom渲染完毕之后添加scroll
        // this.$nextTick(() => {
        //   this.$store.commit("changeIsComplete")
        //   })
        //   this.scroll.on("scroll",position=>{
        //     //console.log(position);
        //     //position>-300?this.backTopIsShow=true:this.backTopIsShow
        //     this.backTopIsShow = (-position.y)>500
        //   })
        // })
      })

    },
    //切换分类
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "sell";
          break;
        case 2:
          this.currentType = "new";
          break
      }
      this.$refs.tabControl1.currentIndex=index
      this.$refs.tabControl2.currentIndex=index
    },
    //返回顶部
    backClick() {
      console.log(this.$refs.scroll);
      this.$refs.scroll.scroll.scrollTo(0, 0, 500)
    },
    //子组件自定义事件，判断滚动位置
    showScroll(position) {
      //判断显示返回顶部按钮
      this.backTopIsShow = (-position.y) > 500
      //判断吸顶效果
      this.isTabFixed = (-position.y)>this.tabOffSet

    },
    pullUpLoad() {
      this.saveHomeGoods(this.currentType)
    },
    swiperImgLoad() {
      //console.log(this.$refs.tabControl.$el.offsetTop)
      this.tabOffSet = this.$refs.tabControl2.$el.offsetTop
    }
  },
  activated() {
    this.$refs.scroll.scroll&&this.$refs.scroll.scroll.scrollTo(0,this.scrollY,0)
    this.$refs.scroll.scroll&&this.$refs.scroll.scroll.refresh()
    console.log(this.scrollY);
  },
  deactivated() {
    this.scrollY=this.$refs.scroll.getScrollY()
    console.log(this.scrollY);
  }
}
</script>

<style scoped>
#home {
  /*padding-top: 44px;*/
  height: 100vh;
  position: relative;
}

.home-nav {
  background-color: var(--color-tint);
  color: #f6f6f6;
  /*position: fixed;*/
  /*left: 0;*/
  /*right: 0;*/
  /*top: 0;*/
  z-index: 100;
}

/*.tab-control {*/
/*  position: sticky;*/
/*  top: 44px;*/

/*}*/


.wrapper {

  height: calc(100% - 93px);
  position: absolute;
  overflow: hidden;
  top: 44px;
  /*margin-top: 44px;*/
}
.tabControl{
  position: relative;
  z-index: 100;
}
</style>