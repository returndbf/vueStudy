import axios from "axios";
export function request(config){
    const instance = axios.create({
        baseURL:"https://dabenfeng.top",
        timeout:5000
    })
    //请求拦截，config是传入的配置
    instance.interceptors.request.use(config=>{
        return config
    },error => {console.log(error)})
    //响应拦截
    instance.interceptors.response.use(res=>{
        return res.data
    },error => console.log(error))

    return instance(config)
}