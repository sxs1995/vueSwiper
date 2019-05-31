<!--
 * @Author: shenxsh
 * @Date: 2019-05-31 10:21:03
 * @LastEditTime: 2019-05-31 11:44:06
 * @LastEditors: Do not edit
 * @Description: 常用的swiper移动端效果
 -->
<template>
  <div class="home">
    <h3>1.中间显示完整,两边少量显示</h3>
    <swiper :options="option1">
      <swiper-slide class="benefitBox" v-for="(item, index) in 8" :key="index">
        <div class="box">item{{index}}</div>
      </swiper-slide>
    </swiper>
    <h3>2.左侧显示完整,右侧少量显示</h3>
    <swiper :options="option2">
      <swiper-slide class="benefitBox" v-for="(item, index) in 8" :key="index">
        <div class="box">item{{index}}</div>
      </swiper-slide>
    </swiper>
    <h3>3.中间突出显示,两边缩放</h3>
    <div class="option3">
      <swiper :options="option3">
        <swiper-slide class="benefitBox" v-for="(item, index) in 8" :key="index">
          <div class="box">item{{index}}</div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    let _this = this;
    return {
      option1: {
        slidesPerView: 1.18, //显示slide的数量
        centeredSlides: true, //居中显示
        loop: true, //循环
        initialSlide: 1, //初始索引
        spaceBetween: 15, //间距
        on: {
          click: function() {
            // 获取点击的索引.
            const realIndex = this.realIndex;
            // 此处可自定义点击事件,注意此处this指向swiper,定义_this
          }
        }
      },
      option2: {
        slidesPerView: 2.15,
        spaceBetween: 15
        // slidesOffsetBefore: -1 //左偏移
      },
      option3: {
        slidesPerView: 1.49,
        centeredSlides: true,
        loop: true,
        touchRatio: 1, //触摸距离与slide滑动距离的比率。
        spaceBetween: 0
      }
    };
  }
};
</script>
<style lang="less" scoped>
.home {
  width: 100%;
  padding-bottom: 40px;
  .box {
    background: red;
    height: 200px;
    color: #fff;
    line-height: 200px;
    text-align: center;
    font-size: 24px;
  }
}
.option3 {
  .box {
    height: 300px;
  }
  .swiper-slide:not(.swiper-slide-active) {
    transition: 400ms;
    transform: scale(0.85);
  }
}
</style>
