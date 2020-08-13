<template>
  <div class="myDiv">{{appName}}</div>
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
    appName(){
      return this.$store.state.appName
    }
  },
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style lang="scss" scoped>
.myDiv{}
</style>