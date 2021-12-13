<template>
<div class="recommends">
  <div v-for="item in recommends" :key="item.id" class="recommendItem">
    <a :href="item.url">
      <img :src="port+item.img" :title="item.title" alt="">
      <div>{{item.title}}</div>
    </a>
  </div>
</div>
</template>

<script>
export default {
  name: "Recommend",
  props:["recommends","port"]
}
</script>

<style scoped>
.recommends{
  display: flex;
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 12px;
  padding: 15px 0 30px;

  border-bottom: 8px solid #666666;
}
.recommendItem{
  flex: 1;
}
.recommendItem img{
  height: 70px;
  width: 70px;
  margin-bottom: 10px;
}
</style>