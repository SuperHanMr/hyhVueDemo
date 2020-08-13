<template>
  <div class="myDiv">
    <navigation-bar-vue v-bind:navigationData="navigationData"></navigation-bar-vue>
    <div class="page-content">
      <router-view></router-view>
    </div>
    <nav-footer-vue v-on:onClickTab="onClickTab"></nav-footer-vue>
  </div>
</template>

<script>
import navigationBarVue from "../components/navigationBar.vue";
import navFooterVue from "../components/navFooter.vue";

export default {
  components: { navigationBarVue, navFooterVue },
  props: {},
  data() {
    return {
      // 顶部标题数据
      navigationData: { title: "首页" }
    };
  },
  watch: {},
  computed: {},
  methods: {
    onClickTab: function(res) {
      this.navigationData = res;
    }
  },

  created() {
    console.log("创建了AppHome页");
  },
  mounted() {}
};
</script>
<style
 lang="scss" scoped>
.myDiv {
  width: 100%;
  height: 100%;
}

.page-content {
  height: calc(100% - 40px);
}
</style>