<template>
  <div class="myDiv">
    <navigation-bar-vue v-bind:navigationData="navigationData"></navigation-bar-vue>
    发布页
  </div>
</template>

<script>
import navigationBarVue from "../components/navigationBar.vue";
export default {
  components: { navigationBarVue },
  props: {},
  data() {
    return {
      navigationData:{
        title:'发布',
        back:true
      }
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.myDiv {
}
</style>