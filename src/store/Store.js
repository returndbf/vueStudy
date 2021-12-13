import Vue from "vue";
import vuex from "vuex";
Vue.use(vuex)

 const state={
    isGoodsComplete:false,
     isBannerComplete:false,
     isRecommendsComplete:false

}
const mutations={
    changeGoodsToComplete(state){
        state.isGoodsComplete=true
    },
    changeBannersToComplete(state){
        state.isBannerComplete=true
    },
    changeRecommendsToComplete(state){
        state.isRecommendsComplete=true
    }
}

export default new vuex.Store({
        state,
        mutations
})