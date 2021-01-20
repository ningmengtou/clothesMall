<template>
  <div class="bottomBar">
    <div class="allCheck">
      <img
        src="~assets/images/cart/tick.svg"
        alt=""
        :class="{ show: allCheckedShow }"
        @click="allCheckedClick"
      />
      <span>全选</span>
    </div>
    <div class="total">
      <span>合计：</span>
      <span>￥{{ totalPrice }}</span>
    </div>
    <div class="settle">
      <span>结算({{ allNumber }})</span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["cartList"]),
    // 合计总价格
    totalPrice() {
      // 先把购物车中选中的商品过滤出来计算价格
      return this.cartList
        .filter((item) => item.checked == true)
        .reduce((prev, cur) => {
          return prev + cur.number * parseFloat(cur.price);
        }, 0)
        .toFixed(2);
    },
    // 计算商品总数量
    allNumber() {
      return this.cartList
        .filter((item) => item.checked == true)
        .reduce((prev, cur) => {
          return prev + cur.number;
        }, 0);
    },
    // 全选按钮的显示
    allCheckedShow() {
      if (this.cartList.length === 0) return false
      // find 方法找到没有选中的商品 有则显示不选中
      return !this.cartList.find((item) => !item.checked);
    },
  },
  methods: {
    allCheckedClick() {
      // 先判断当前全选按钮的状态 是选中就让商品checked为false 没有选中就让商品checked为true
      if (this.allCheckedShow) {
        this.cartList.forEach((item) => (item.checked = false));
      } else {
        this.cartList.forEach((item) => (item.checked = true));
      }
    },
  },
};
</script>

<style scoped>
.bottomBar {
  height: 40px;
  display: flex;
}
.allCheck {
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
}
.allCheck img {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: solid 2px #eee;
  margin-right: 5px;
}
.show {
  background-color: pink;
  border: 0;
}
.total {
  flex: 5;
  line-height: 40px;
}
.total span:nth-child(2) {
  color: var(--color-high-text);
}
.settle {
  flex: 3;
  background-color: #ff5100;
  color: #fff;
  text-align: center;
  line-height: 40px;
  font-size: 20px;
}
</style>