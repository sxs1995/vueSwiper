/*
 * @Author: shenxsh
 * @Date: 2019-05-31 10:21:03
 * @LastEditTime: 2019-05-31 10:52:45
 * @LastEditors: Do not edit
 * @Description: 描述
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
