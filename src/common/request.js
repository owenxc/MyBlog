import axios from 'axios'
// import store from '@/store'
// import router from '@/router/router'
import { Message } from 'element-ui'

const service = axios.create({
    baseURL:'/manage',
    withCredentials:true,//跨域时允许发送cookies
})

//请求拦截
service.interceptors.request.use(
    config => {
      if(config.url.indexOf('?')>-1){
          config.url = config.url + '&language=zh_CN'
      }else{
          config.url = config.url + '?language=zh_CN'
      }
      /**
       * 此处可以拼接自定义请求头，如果有业务需求 getHeaders返回一个对象例如{Authorization:'auth'+ token}
       * Object.assign(config.headers,getHeaders())
       * */
      return config
    },error=>{
        return Promise.reject()
    }
)

//响应拦截和异常处理
service.interceptors.response.use(
    response => {
        const res = response.data;
        //正常
        if(res.data.code >= 200 && res.data.code < 300){
            return res
        }
        Message({
            message: res.data.msg,
            type:'error',
            duration:3 * 1000
        })
        return Promise.reject(res)
    },
    error => {
        return Promise.reject(error)
    }
)

export default service
