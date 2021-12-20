<template>
<div>
  <div class="username">
    {{comment.username}}
  </div>
  <div class="comment-info">
    {{comment.comment}}
  </div>
  <div>
  <span class="time">
    {{comment.time}}
  </span>
  <span class="goods-info">
    {{comment.goodsInfo}}
  </span>
  </div>
</div>
</template>

<script>
export default {
  name: "DetailComment",
  props:["comment"]
}
</script>

<style scoped>

</style>