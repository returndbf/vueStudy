import {request} from "@/network/request";

export function getHomeBanner(){
    return request({
        url:"/getBannerImg"
    })
}
export function  getHomeRecommends(){
    return request({
        url:"/getAllRecommend"
    })
}

export function  getHomeGoods(type,page){
    return request({
        url:"/getGoodsByType",
        params:{
            // eslint-disable-next-line no-undef
            type,page
        }
    })
}