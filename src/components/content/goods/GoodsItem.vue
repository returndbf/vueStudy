<template>
  <div class="itemImg">
    <img :src="port+goodsItem.img" alt="" class="img" @load="imgLoad" @click="itemClick"/>
    <div>
      <p>{{ goodsItem.title }}</p>
      <span class="price">￥{{ goodsItem.price }}</span>
      <span class="collection">收藏：{{ goodsItem.collection }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsItem",
  props: ["goodsItem", "port"],
  methods:{
    imgLoad(){
      this.$bus.$emit("itemImgLoad")
    },
    itemClick(){
      this.$router.push("/detail/"+this.goodsItem.id)
    }
  }
}
</script>

<style scoped>
.itemImg {
  width: 50%;
  text-align: center;
}

.img {
  width: 100%;


}
</style>