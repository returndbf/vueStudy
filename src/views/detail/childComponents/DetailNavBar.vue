<template>
  <div>
    <nav-bar>
      <template v-slot:left >
        <div class="back" @click="backToHome">
        <el-button  icon="el-icon-arrow-left" size="mini"></el-button>
        </div>
      </template>
      <template v-slot:center>
        <div class="title">
          <div v-for="(item,index) in titles"
               :key="index"
               class="title-item"
               :class="{active:index===currentIndex}"
               @click="changeIndex(index)"

          >
            {{ item }}
          </div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";

export default {
  name: "DetailNavBar",
  components: {NavBar},
  data() {
    return {
      titles: ["标题", "参数", "评论", "推荐"],
      currentIndex:0
    }
  },
  methods:{
    changeIndex(index){
      this.currentIndex = index
      this.$emit("tabClick",index)
    },
    backToHome(){
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.title {
  display: flex;
  font-size: 13px;
}
.title-item{
  flex: 1;
}
.active{
  color: var(--color-high-text)
}

</style>