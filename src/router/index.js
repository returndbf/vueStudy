/*
 * @Author: your name
 * @Date: 2021-11-25 21:12:35
 * @LastEditTime: 2021-11-25 21:33:57
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \tabbar\src\index.js
 */
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const home = () => import("../views/home/home.vue")
const category = () => import("../views/category/category.vue")
const cart = () => import("../views/cart/cart.vue")
const profile = () => import("../views/profile/profile.vue")

const routes =[{
    path:"",
    redirect:"/home"
},
{
    path:"/home",
    component:home
},
{
    path:"/category",
    component:category
},
{
    path:"/cart",
    component:cart
},
{
    path:"/profile",
    component:profile
},
]
export default new VueRouter({
    routes,
    mode:"history"
})