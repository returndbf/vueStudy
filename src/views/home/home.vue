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
    <scroll class="wrapper"
            ref="scroll"
            @showScroll="showScroll"
            @pullUpLoad="pullUpLoad">
      <div class="content">
        <!--    轮播图-->
        <swiper :bannerImg="banners" :port="url"></swiper>
        <!--    推荐信息-->
        <recommend :recommends="recommends" :port="url"></recommend>
        <!--    -->
        <future-view></future-view>
        <!--    -->
        <tab-control :titles="titles"
                     ref="tabControl"
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
      url: "http://dabenfeng.top",//后端的主机端口
      goods: {
        'pop': {page: 1, list: []},
        'new': {page: 1, list: []},
        'sell': {page: 1, list: []}
      },
      currentType: "pop",
      scroll: null,
      backTopIsShow:false
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
    const refresh = debounce(this.$refs.scroll.refresh,50)
   this.$bus.$on("itemImgLoad",()=>{
     refresh()
    })
    console.log(this.$refs.tabControl.$el.offsetTop)
  },
  computed: {
    showGoodsList() {
      return this.goods[this.currentType].list
    }

  },
  methods: {

    saveHomeBanner() {
      //请求并保存
      getHomeBanner().then(res =>{
        this.banners = res.data
        this.$store.commit("changeBannersToComplete")
      } )
    },
    saveHomeRecommends() {
      //请求推荐信息数据
      getHomeRecommends().then(res => {
        this.recommends = res.data
        this.$store.commit("changeRecommendsToComplete")
      })
    },
    //请求商品信息
    saveHomeGoods(type) {
      const page = this.goods[type].page;
      getHomeGoods(type, page).then(res => {
        if(res.data) {
          this.goods[type].list.push(...res.data)
        }
        this.$store.commit("changeGoodsToComplete")
        console.log(this.$store.state.isComplete);
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
    },
    //返回顶部
    backClick() {
      console.log(this.$refs.scroll);
      this.$refs.scroll.scroll.scrollTo(0,0,500)
    },
    //子组件自定义事件，判断显示返回顶部按钮
    showScroll(position){
      this.backTopIsShow = (-position.y)>500
    },
    pullUpLoad(){
      this.saveHomeGoods(this.currentType)
    }
  }
}
</script>

<style scoped>
#home {
  /*padding-top: 44px;*/
  height: 100vh;
}

.home-nav {
  background-color: var(--color-tint);
  color: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 100;
}

.tab-control {
  position: sticky;
  top: 44px;

}

.wrapper {
  height: calc(100% - 93px);

  margin-top: 44px;
}
</style>