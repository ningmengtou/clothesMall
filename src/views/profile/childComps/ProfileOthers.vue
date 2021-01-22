<template>
  <div class="content">
    <div class="item">
      <div class="image">
        <img src="~assets/images/profile/message.svg" alt="" />
      </div>
      <div class="message">我的消息</div>
    </div>
    <div class="item">
      <div class="image">
        <img src="~assets/images/profile/pointer.svg" alt="" />
      </div>
      <div class="message">积分商城</div>
    </div>
    <div class="item">
      <div class="image">
        <img src="~assets/images/profile/vip.svg" alt="" />
      </div>
      <div class="message">会员卡</div>
    </div>
    <div class="item">
      <div class="image">
        <img src="~assets/images/profile/cart.svg" alt="" />
      </div>
      <div class="message">我的购物车</div>
    </div>
    <div class="item">
      <div class="image">
        <img src="~assets/images/profile/shopping.svg" alt="" />
      </div>
      <div class="message">下载购物APP</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.item {
  display: flex;
  align-items: center;
  height: 40px;
  border-bottom: solid 1px #eee;
  margin-bottom: 5px;
}
.item .image {
  flex: 1;
  text-align: center;
}
.item .image img {
  width: 80%;
}
.item .message {
  flex: 9;
  margin-left: 10px;
  font-size: 18px;
}
</style>