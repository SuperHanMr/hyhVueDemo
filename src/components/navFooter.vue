<template>
  <div class="nav-footer-div">
    <img src="../icon/downshadow_icon_show.png" class="bottom-shadow-image"/>
      <div v-for="(item, index) in footerItems" :key="item.title" v-on:click="onClickTab(index)">
        <p v-bind:class="{'on-tab':index == onIndex}" v-if="index!=2">{{item.title}}</p>
        <img v-if="index==2" class="release-icon" src="../icon/menu_release_icon_show.png"/>
      </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      onIndex:this.$store.state.onIndex,
      footerItems: [
        {
          path: "home",
          title: "首页"
        },
        {
          path: "auction",
          title: "拍卖"
        },
        {
          path: "/releaseContent",
          title: "发布"
        },
        {
          path: "message",
          title: "消息"
        },
        {
          path: "my",
          title: "我"
        },
      ]
    };
  },
  watch: {
    
  },
  computed: {},
  methods: {
    onClickTab:function (index) {

      if (index == 2) {
        console.log('点击发布')
        this.$router.push({path:'/releaseContent'}) 
        return
      }
      // 存储 底部选中的tab状态
      this.$store.state.onIndex = index
      this.onIndex = index
      // 点击其他的 切换页面
      let tabItem = this.footerItems[this.$store.state.onIndex]
      this.$router.push({path:tabItem.path}) 
      // // 回传一个事件给appHome
      this.$emit('onClickTab',tabItem)

    },
  },
  created() {

  },
  mounted() {}
};
</script>
<style lang="scss" scoped>

.nav-footer-div {
  position: fixed;
  display: flex;
  bottom: 0;
  z-index: 100;
  width: 100%;
  height: 50px;
}

.nav-footer-div div{
  text-align: center;
  flex: 1;
  color: #a1a1a1;
  font-size: 16px;
  font-weight: bold;
  line-height: 50px;
}

.release-icon{
  margin-top: 7.5px;
  width: 47.5px;
  height: 35px;
}

.bottom-shadow-image{
  display: block;
  width: 100%;
  height: 37px;
  position: absolute;
  bottom: 50px;
}

.on-tab{
  color: #333;
}


</style>