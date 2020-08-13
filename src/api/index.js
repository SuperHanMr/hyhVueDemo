// 引入commom.js的方法
import {requestOfPost,requestOfGet} from '../request/common'


export function postRequest(url,data) {
    console.log('请求地址:'+url,data)
    return new Promise((resolve,reject) =>{
        // 成功处理
        requestOfPost(url,data).then(res => resolve(res))
            // 失败处理
        .then(error => reject(error))
    })
}

export function getRequest(url) {
    console.log('请求地址:'+url)
    return new Promise((resolve,reject) =>{
        // 成功处理
        requestOfGet(url).then(res => resolve(res))
            // 失败处理
        .then(error => reject(error))
    })
}

