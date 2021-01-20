<template>
  <div class="bottomBar">
    <div class="left">
      <div class="leftItem">
        <div class="bgImage"></div>
        <span>客服</span>
      </div>
      <div class="leftItem">
        <div class="bgImage"></div>
        <span>店铺</span>
      </div>
      <div class="leftItem">
        <div class="bgImage"></div>
        <span>收藏</span>
      </div>
    </div>
    <div class="right">
      <div class="rightItem" @click="toCart">加入购物车</div>
      <div class="rightItem" @click="toCartView">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toCart() {
      this.$emit("addCart");
    },
    toCartView() {
      // 跳转到购物车页面
      this.$router.replace('/cart')
    }
  },
};
</script>

<style scoped>
.bottomBar {
  display: flex;
  height: 65px;
}
.left {
  width: 50%;
  display: flex;
  justify-content: center;
  align-content: center;
}
.leftItem {
  width: 33.3%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.leftItem .bgImage {
  width: 33px;
  height: 33px;
  background: url("~assets/images/detail/detail_bottom.png") no-repeat;
  background-size: 33px;
  background-position: 0 -79px;
  margin-bottom: 3px;
}
.left .leftItem:nth-child(2) .bgImage {
  background-position: 0 -147px;
}
.left .leftItem:nth-child(3) .bgImage {
  background-position: 0 0;
}
.right {
  width: 50%;
  display: flex;
}
.rightItem {
  width: 50%;
  text-align: center;
  line-height: 65px;
  font-size: 18px;
  background-color: #ffb800;
  color: #fff;
}
.right .rightItem:nth-child(2) {
  background-color: var(--color-high-text);
}
</style>