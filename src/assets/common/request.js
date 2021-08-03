import axios from 'axios'
import store from '@/store'
import router from '@/router/router'
//微服务
const manage = '/manage'
const service = axios.create({
    baseURL:manage,
    withCredentials:true,//跨域时允许发送cookies
})

//请求拦截

service.interceptors


