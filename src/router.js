/*
 * @Author: shenxsh
 * @Date: 2019-05-31 10:21:03
 * @LastEditTime: 2019-05-31 14:50:43
 * @LastEditors: Do not edit
 * @Description: 描述
 */
import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  base: "/vueSwiper/dist/",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
