import {request} from "@/network/request";

export function getGoodsById(id){
    return request({
        url:"/selectById",
        params:{
            id
        }
    })
}

export class goodsDetail{
    name;
    price;
    title;
    collection;
    description;
    constructor(name,price,title,collection,description) {
        this.name = name;
        this.price = price;
        this.title = title;
        this.collection = collection;
        this.description = description;
    }
}

export class shopInfo{
    shopLogo;
    name;
    fans;
    sell;
    score;
    goods;
    constructor(shopLogo,name,fans,sell,score,goods) {
        this.shopLogo = shopLogo;
        this.name = name;
        this.fans = fans;
        this.sell = sell;
        this.score = score;
        this.goods = goods;
    }
}