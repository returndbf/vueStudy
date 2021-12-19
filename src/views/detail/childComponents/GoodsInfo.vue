<template>
<div class="goodsInfo" v-if="goods">
  <div class="goods-title">
   {{goods.description}}
  </div>
  <div class="goods-price">
    ￥{{goods.price}}
  </div>
  <div class="other-info">
    <div class="other">销量：55</div>
    <div class="other">收藏：{{goods.collection}}</div>
    <div class="other">七天无理由</div>
  </div>
</div>
</template>

<script>
export default {
  name: "GoodsInfo",
  props:["goods"]
}
</script>

<style scoped>
.goodsInfo{
  width: 100%;

}
.goods-title{
  max-width: 100%;
  word-break: break-all;
  font-size: 25px;
  margin: 5px;
}
.goods-price{
  position: relative;
  top: 5px;
  color: hotpink;
  font-size: 30px;
}
.other-info{
  position: relative;
  top:10px;
  display: flex;
  justify-content: space-between;
  width: 95%;
  margin: 0 auto;
}
.other{

}
</style>