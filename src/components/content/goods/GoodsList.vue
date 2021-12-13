<template>
<div class="goods">
  <goods-item v-for="item in goodsList" :goodsItem="item" :key="item.id" :port="port"></goods-item>


</div>
</template>

<script>
import GoodsItem from "@/components/content/goods/GoodsItem";
export default {
  name: "GoodsList",
  components: {GoodsItem},
  props:["goodsList","port"]
}
</script>

<style scoped>
.goods{
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>