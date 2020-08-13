//引入封装好的axios
import sverive from './axios'

// 此方法耦合度很低 很多请求业务都适用
export function requestOfPost(url,data){
    return sverive.post(url,data)
}

export function requestOfGet(url) {
    return sverive.get(url)
}


