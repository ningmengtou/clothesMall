<template>
  <div class="profileInfo">
    <div class="item">
      <div class="top">
        <span class="number">0.00</span>
        <span>元</span>
      </div>
      <div class="bottom">我的余额</div>
    </div>
    <div class="item">
      <div class="top">
        <span class="number">0</span>
        <span>个</span>
      </div>
      <div class="bottom">我的优惠</div>
    </div>
    <div class="item">
      <div class="top">
        <span class="number">0</span>
        <span>元</span>
      </div>
      <div class="bottom">我的积分</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.profileInfo {
  display: flex;
  border-bottom: 15px solid #eee;
}
.item {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
}
.profileInfo .item:nth-child(1),
.profileInfo .item:nth-child(2) {
  border-right: 1px solid #eee;
}

.number {
  color: orange;
  font-size: 22px;
}
</style>