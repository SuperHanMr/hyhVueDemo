<template>
  <div class="myDiv">主页</div>
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
  computed:{
       weeDete(){
      // this.$store.state.appName
      return '首页'
    }
  },
  methods:{
 
  },
  created(){},
  mounted(){}
}
</script>
<style lang="scss" scoped>
.myDiv{}
</style>