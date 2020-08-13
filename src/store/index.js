import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'
Vue.use(Vuex)
// store 可以存储一些全部的数据 比如说 userInfo 状态等
/*
    在标签内 无法直接访问store 对象 需要写一个计算函数 返回出去
*/ 
const store = new Vuex.Store({
    state: {
      appName: '小茶书',
      date: new Date(),
      onIndex:0,
    },

    // 状态管理 首页的状态
    appHomeStrore:{
        onIndex:0,

    },

    getters: {
        weekDate:state =>{
            moment.locale(); 
            return moment(state.date).format('LLLL'); 
            // return state.date
        }
    }
})
export default store