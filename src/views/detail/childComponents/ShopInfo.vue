<template>
  <div class="shop-info" v-if="shopInfo">
    <div class="shop-main">
      <img src="@/assets/img/tabbar/成功.png" class="shop-logo">
      <div class="shop-name">{{shopInfo.name}}</div>
    </div>
    <div class="shop-detail">
    <div class="shop-sell">
      <div>{{shopInfo.sell}}</div>
      总销量
    </div>
    <div class="shop-goods">
      <div>{{shopInfo.goods}}</div>
      全部宝贝
    </div>
      <div class="devison">
        |
      </div>
      <div class="shop-score">
        <div class="shop-description">描述相符：{{shopInfo.score[0]}}{{shopInfo.score[0]|checkScore}}</div>
        <div class="shop-price">价格合理：{{shopInfo.score[1]}}{{shopInfo.score[1]|checkScore}}</div>
        <div class="shop-quality">质量满意：{{shopInfo.score[2]}}{{shopInfo.score[2]|checkScore}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopInfo",
  props: ["shopInfo"],
  filters:{
    checkScore(score){
      if(score>=4.9) return "高"
      if(score<4.9 && score>=4.5) return "中"
      if(score<4.5) return "低"
    }
  }
}
</script>

<style scoped>
.shop-logo {
  width: 40px;
  height: 100%;
  vertical-align: middle;
}

.shop-info {
  border-top: 8px solid #475669;
  margin-top: 50px;
  padding-top: 20px;
}

.shop-name {
  display: inline;
  font-size: 20px;
}
.shop-detail{
  display: flex;
  margin-top: 10px;
  justify-content: space-around;
}
.shop-sell{


  height: auto;
  text-align: center;

}
.shop-goods{
  text-align: center;
}
.devison{
  margin: 10px;
}
.shop-score{
  display: flex;
  flex-flow: column
}
</style>