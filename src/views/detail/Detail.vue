<template>
  <div class="detail">
    <detail-nav-bar class="detail-nav">
    </detail-nav-bar>
    <scroll class="content" ref="scroll">
      <div>
        <img :src="host+goodsImg" class="topImg" @load="imgComplete">
      </div>
      <goods-info :goods="goods"></goods-info>

      <shop-info :shopInfo="shopInfo"></shop-info>
      <detail-comment :comment="detailComment"></detail-comment>
      <detail-info :detailImg="detailInfo" @detailImgLoad="detailImgLoad"></detail-info>
      <detail-recommend></detail-recommend>
    </scroll>
  </div>
</template>

<script>

import DetailNavBar from "@/views/detail/childComponents/DetailNavBar";

import {getGoodsById, goodsDetail, shopInfo } from "@/network/Detail"
import {getHomeGoods} from "@/network/home";
import GoodsInfo from "@/views/detail/childComponents/GoodsInfo";
import ShopInfo from "@/views/detail/childComponents/ShopInfo";

import Scroll from "@/components/common/scroll/Scroll";
import DetailInfo from "@/views/detail/childComponents/DetailInfo";
import DetailComment from "@/views/detail/childComponents/DetailComment";
import DetailRecommend from "@/views/detail/childComponents/DetailRecommend";

export default {
  name: "Detail",
  components: {DetailRecommend, DetailComment, DetailInfo, Scroll, ShopInfo, GoodsInfo, DetailNavBar},
  data() {
    return {
      id: null,
      goodsImg: null,
      host: this.$store.state.host,
      goods: null,
      shopInfo: null,
      detailInfo: null,
      detailComment:{username:"游客",comment:"好评",goodsInfo:"黑色，xl码",time:"2021-12-21"}
    }
  },
  mounted() {
    //将id赋值为传过来的id
    this.id = this.$route.params.id
    //
    getGoodsById(this.id).then(res => {
          const data = res.data
          this.goodsImg = data.img
          console.log(this.$store.state.host)
          //商品信息
          this.goods = new goodsDetail(data.name, data.price, data.title, data.collection, data.description)
          //店铺信息
          this.shopInfo = new shopInfo("@/assets/img/tabbar/成功.png", "shopName", 1000, 999, [4.8, 4.7, 4.9], 200)
          this.$nextTick(() => {
            this.$refs.scroll._initScroll()
            console.log(this.$refs.scroll)
          })
        },
        getHomeGoods("new",1).then(res=>{
          console.log(res);
          this.detailInfo = res.data.map(item=>{
            return item.img
          })
          console.log(this.detailInfo)
        })

    )
  },

  methods: {
    imgComplete() {

    },
    detailImgLoad(){
      this.$refs.scroll.scroll&&this.$refs.scroll.scroll.refresh()
    }
  }
}
</script>

<style scoped>
.topImg {
  width: 100%;
  height: 300px;
}

.detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}

.detail-nav {
  position: relative;
  z-index: 100;
  background-color: #fff;
}

.content {
  height: calc(100% - 44px);

}
</style>
