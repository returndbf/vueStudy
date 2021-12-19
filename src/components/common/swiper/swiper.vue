<template>
  <div class="block">
    <el-carousel height="150px">
      <!--后端存了五张，但是只让放四张，用slice截取4个，bannerImg是父组件传过来的-->
      <el-carousel-item v-for="item in bannerImg" :key="item.id">
        <a :href="item.url">
          <img :src="port+item.img" :title="item.title" alt="banner" @load="imgLoad">
        </a>

      </el-carousel-item>
    </el-carousel>
  </div>

</template>

<script>
export default {
  name: "swiper",
  props: ["bannerImg", "port"],//父组件传过来的值
  data() {
    return {
      isLoad: false
    }
  },
  methods: {
    imgLoad() {
      //如果isLoad非true，执行父组件发送请求以及设置为true，如果为true，则直接短路，在中间不会短路，所以没问题
      !this.isLoad && this.$emit("swiperImgLoad") && (this.isLoad=true)
    }
  }

}
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

img {
  height: 150px;
  width: 100%;
}
</style>