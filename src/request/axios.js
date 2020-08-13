// 引入 axios网络请求框架
import axios from 'axios'
// 获取token的函数 （一般存放在sessionStorage或localStorage）
function getTokenByLocal(){
    let token = sessionStorage.getItem('token') || '';
    return token
}

// 创建一个axios实例
const sverive = axios.create({
    baseURL:"", // api的baseURL
    timeout:5000, // 设置请求超时的时间
})

//设置request请求拦截器**
sverive.interceptors.request.use(
    config => {
        if (getTokenByLocal()) {
            config.headers['token'] = getTokenByLocal(); //让每个请求携带自定义的token
        }
        config.headers['Accept'] = 'application/json'
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
        config.headers['Access-Control-Allow-Origin'] = '*'
        return config
    },
    error => {
        Promise.reject(error)
    }
)

//response响应拦截器**
sverive.interceptors.response.use(
    response => {
        let res = response.data
        // 未登录去登录
        if (res.code == 403) {
            console.log('未登录要登录')
        }
        return Promise.resolve(response.data)
    },
    // 报错信息
    error => {
        // 这个位置可以返回出去 单独处理 也可以全局处理
        return Promise.reject(error)
    }
)

export default sverive




