<template>
  <div class="myDiv">
    <navigation-bar-vue v-bind:navigationData="navigationData"></navigation-bar-vue>
    <div class="logo-view">
      <img src="../icon/logo_icon_show.png" />
      <p>茶生活交流交易社区</p>
    </div>
    <div class="register-div">
      <div class="div-input">
        <p>手机</p>
        <input  placeholder="请填写手机号码" maxlength="11" type='number' v-model="loginInfo.phone" />
      </div>
      <div class="div-input">
        <p>验证码</p>
        <div>
          <input placeholder="请填写验证码" maxlength="4" type='number' v-model="loginInfo.code"  />
          <button @click="getCode">获取验证码</button>
        </div>
      </div>
    </div>
    <button class="login-button" @click="login">登录 | 注册</button>
  </div>
</template>

<script>
import navigationBarVue from "@/components/navigationBar.vue";
import url from '@/request/apiUrl'
import {postRequest,getRequest} from '../api/index'



export default {
  components: { navigationBarVue },
  props: {},
  data() {
    return {
      navigationData: {
        title: "登录",
        back: true
      },
      loginInfo:{
        phone:'',
        code:''
      }
    };
  },
  watch: {},
  computed: {},
  methods: {

    getCode:function () {
      // 网络请求
      getRequest(url.auctionUrl).then( res => console.log(res))
    },
    login:function () {
      if (!this.loginInfo.phone) {
      this.$message({
          showClose: true,
          message: '请填写手机号',
          type: 'error'
        });
        return;
      }

       if (!this.loginInfo.code) {
        this.$message({
          showClose: true,
          message: '请填写验证码',
          type: 'error'
        });
        return;
      }

    console.log(this.loginInfo)

    }
  },
  created() {

  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.myDiv {
}

.logo-view {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  justify-content: center;
}

.logo-view img {
  margin-top: 70px;
  width: 108px;
  height: 50px;
}

.logo-view p {
  margin-top: 13px;
  margin-bottom: 25px;
  font-size: 12px;
  font-weight: 400;
  color: #8c8c8c;
  text-align: center;
}

.register-div {
  margin-left: 15px;
  width: calc(100% - 30px);
}

.div-input {
  
  margin-top: 28px;
  width: 100%;
  border-bottom: 1px solid #efefef;
}

.register-div p {
  padding-left: 10px;
  font-size: 12px;
  color: #333;
  border: none;
}

.register-div input {
  height: calc(13px + 16px + 13px);
  margin-left: 10rpx;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 16px;
  color: #333;
}

.register-div button {
  margin-top: 6px;
  position: absolute;
  right: 25px;
  width: 103px;
  height: 30px;
  border-radius: 6px;
  border: 1px solid #00c8b6;
  color: #00c8b6;
  background-color: transparent;
  line-height: 30px;
  font-size: 13px;
}

.login-button {
  margin: 50px 25px 0 25px;
  width: calc(100% - 50px);
  height: 40px;
  border-radius: 6px;
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  background-color: #00c8b6;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>