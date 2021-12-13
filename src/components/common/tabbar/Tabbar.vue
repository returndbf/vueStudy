<!--
 * @Author: your name
 * @Date: 2021-11-24 21:40:07
 * @LastEditTime: 2021-11-24 22:12:36
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \tabbar\src\components\tabbar\Tabbar.vue
-->
<template>
  <div id="tab-bar">
    <slot> </slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#tab-bar {
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0px -5px 1px rgba(100, 100, 100, 0.1);
  /*justify-content:space-around;*/
}
</style>
