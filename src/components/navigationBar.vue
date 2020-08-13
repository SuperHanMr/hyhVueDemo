<template>
  <div class="nav-div">
    <div v-if="navigationData.back" class="white-left-back-div">
      <img  src="../icon/backwhite_icon_topleft.png" class="white-left-back" v-on:click="onBackPage" />
    </div>
    {{navigationData.title}}
    </div>
</template>

<script>
export default {
  components:{},
  // props里面的数据优先级 > data里面的数据 也就说 props里面定义了 就不需要在data里面定义了
  props:{
    navigationData:{
      type:Object,
      default:function (){
        return {
          title:'',// 标题名
          back:false,//是否带返回按钮
        }
      }
    }
  },
  data(){
    return {
      
    }
  },


  watch:{
  
  },
  computed:{
    
  },
  methods:{
    onBackPage:function () {
      this.$router.go(-1)
    }
  },
  created(){
     console.log('创建底部tab实例')
  },

  beforeDestroy(){
    console.log('准备销毁')
  },

  destroyed() {
    console.log('组件已销毁')
  },
  
  mounted(){}
}
</script>
<style lang="scss" scoped>
.nav-div{
  height: 40px;
  width: 100%;
  background-color: #00c8b6;
  color: #ffffff;
  font-size: 18px;
  text-align: center;
  line-height: 40px;
}

.white-left-back-div{
  height: 40px;
  width: 46px;
  position: absolute;
}

.white-left-back{
  margin-top: 10px;
  width: 20px;
  height: 20px;
}

</style>