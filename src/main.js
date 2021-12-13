/*
 * @Author: your name
 * @Date: 2021-11-28 19:49:12
 * @LastEditTime: 2021-12-01 22:11:48
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \axiosstudy\src\main.js
 */
//import axios from 'axios'
import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from "@/store/Store";
Vue.prototype.$bus=new Vue()

Vue.config.productionTip = false;
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

