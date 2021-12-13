<!--
 * @Author: your name
 * @Date: 2021-11-25 21:59:12
 * @LastEditTime: 2021-12-01 22:10:15
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \tabbar\src\components\MainTabbar.vue
-->
<template>
  <tabbar>
      <tabbar-item path="/home" activeColor="blue">
        <img slot="item-icon" src="@/assets/img/tabbar/商务靶子.png" />
        <img slot="item-icon-active" src="@/assets/img/tabbar/成功.png">
        <div slot="item-text">首页</div>
      </tabbar-item>
      <tabbar-item path="/category" activeColor="blue">
         <img slot="item-icon" src="@/assets/img/tabbar/商务靶子.png" />
        <img slot="item-icon-active" src="@/assets/img/tabbar/成功.png">
        <div slot="item-text">分类</div>
      </tabbar-item>
      <tabbar-item path="/cart" activeColor="blue">
         <img slot="item-icon" src="@/assets/img/tabbar/商务靶子.png" />
        <img slot="item-icon-active" src="@/assets/img/tabbar/成功.png">
        <div slot="item-text">购物车</div></tabbar-item >
      <tabbar-item path="/profile" activeColor="blue">
          <img slot="item-icon" src="@/assets/img/tabbar/商务靶子.png" />
        <img slot="item-icon-active" src="@/assets/img/tabbar/成功.png">
        <div slot="item-text">个人</div></tabbar-item>
    </tabbar>
</template>

<script>
import Tabbar from "@/components/common/tabbar/Tabbar.vue";
import TabbarItem from "@/components/common/tabbar/TabbarItem.vue";
export default {
components:{
    Tabbar,
    TabbarItem,
}
}
</script>

<style>

</style>