// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import '../static/border.css'
import '../static/reset.css'
import {Message,MessageBox}  from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.prototype.$message = Message;
Vue.prototype.$alert = MessageBox;
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',

  beforeCreate() { // 这是我们遇到的第一个生命周期函数，表示实例完全被创建出来之前，会执行它
    // console.log(this.msg)
    // this.show()
    // 注意： 在 beforeCreate 生命周期函数执行的时候，data 和 methods 中的 数据都还没有没初始化
  },
  created() { // 这是遇到的第二个生命周期函数
    // console.log('创建')
    // console.log(this.msg)
    // this.show()
    //  在 created 中，data 和 methods 都已经被初始化好了！
    // 如果要调用 methods 中的方法，或者操作 data 中的数据，最早，只能在 created 中操作
  },
  beforeMount() { // 这是遇到的第3个生命周期函数，表示 模板已经在内存中编辑完成了，但是尚未把 模板渲染到 页面中
    // console.log('这是遇到的第3个生命周期函数，表示 模板已经在内存中编辑完成了，但是尚未把 模板渲染到 页面中')
    // console.log(document.getElementById('h3').innerText)
    // 在 beforeMount 执行的时候，页面中的元素，还没有被真正替换过来，只是之前写的一些模板字符串
  },
  mounted() { // 这是遇到的第4个生命周期函数，表示，内存中的模板，已经真实的挂载到了页面中，用户已经可以看到渲染好的页面了
    // console.log(document.getElementById('h3').innerText)
    // 注意： mounted 是 实例创建期间的最后一个生命周期函数，当执行完 mounted 就表示，实例已经被完全创建好了，此时，如果没有其它操作的话，这个实例，就静静的 躺在我们的内存中，一动不动
    // console.log('这是遇到的第4个生命周期函数，表示，内存中的模板，已经真实的挂载到了页面中，用户已经可以看到渲染好的页面了')
  },


  // 接下来的是运行中的两个事件
  beforeUpdate() { // 这时候，表示 我们的界面还没有被更新【数据被更新了吗？  数据肯定被更新了】
    /* console.log('界面上元素的内容：' + document.getElementById('h3').innerText)
    console.log('data 中的 msg 数据是：' + this.msg) */
    // 得出结论： 当执行 beforeUpdate 的时候，页面中的显示的数据，还是旧的，此时 data 数据是最新的，页面尚未和 最新的数据保持同步
  },
  updated() {
    console.log('界面上元素的内容：')
    // updated 事件执行的时候，页面和 data 数据已经保持同步了，都是最新的
  }

})
