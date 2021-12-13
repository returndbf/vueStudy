<!--
 * @Author: your name
 * @Date: 2021-11-24 21:53:21
 * @LastEditTime: 2021-11-25 21:52:35
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \tabbar\src\components\TabbarItem.vue
-->
<template>
  <div class="tabbar-item" @click="itemClick()">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  props: {
    path: String,
    activeColor:{
      type:String,
      default:"red"
    }
  },
  data() {
    return {
      // isActive:false
    };
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle(){
      return this.isActive?{color:this.activeColor}:{}
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
    },
  },
};
</script>

<style scoped>
.tabbar-item {
  flex: 1;
  text-align: center;
  height: 49px;
}
.tabbar-item img {
  height: 25px;
  width: 25px;
}
.active {
  color: red;
}
</style>