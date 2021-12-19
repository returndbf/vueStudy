<template>
<div>
  <div v-for="item in detailImg" :key="item">
      <img :src="host+item" @load="detailImgLoad" class="detailImg">
    </div>
</div>
</template>

<script>
export default {
  name: "DetailInfo",
  props:["detailImg"],
  data(){
    return{
      host: this.$store.state.host
    }
  },
  methods:{
    detailImgLoad(){
      this.$emit("detailImgLoad")
    }
  }
}
</script>

<style scoped>
.detailImg{
 width: 100%;
  height: auto;
}
</style>