<template>
  <div class="myDiv">
      <button class="go-login" @click="goLigin">去登录</button>
      
  </div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{
    goLigin:function () {
      this.$router.push({path:'/login'}) 
    },
  },
  created(){},
  mounted(){}
}
</script>
<style lang="scss" scoped>
.myDiv{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.go-login{
  width: 100px;
  height: 40px;
  border-radius: 6px;
  background-color: #00c8b6;
  color: #fff;
}
</style>