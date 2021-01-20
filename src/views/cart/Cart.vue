<template>
  <div id="cart">
    <NavBar class="navBar">
      <div slot="center">购物车({{ getProductNumber }})</div>
    </NavBar>
    <Scroll class="content" ref="scroll">
      <CartContainer @imageLoad="imageLoad"></CartContainer>
    </Scroll>
    <CartBottomBar></CartBottomBar>
  </div>
</template>

<script>
import NavBar from "components/common/NavBar/NavBar";
import Scroll from "components/common/Scroll/Scroll";
// 从vuex中引入方法
import { mapGetters } from "vuex";

import CartContainer from "./childComps/CartContainer";
import CartBottomBar from "./childComps/CartBottomBar";

export default {
  name: "Cart",
  components: {
    NavBar,
    CartContainer,
    CartBottomBar,
    Scroll,
  },
  computed: {
    // 在 computed 中把方法结构出来
    ...mapGetters(["getProductNumber"]),
  },
  methods:{
    imageLoad() {
      // 图片加载完重新计算高度
      this.$refs.scroll.refresh()
    }
  },
  activated() {
      this.$refs.scroll.refresh()
  }
  
};
</script>

<style scoped>
#cart {
  height: 100vh;
}
.navBar {
  background-color: var(--color-tint);
  color: #fff;
  font-size: 20px;
  font-weight: 550;
}
.content {
  height: calc(100% - 44px - 49px - 41px);
  overflow: hidden;
}
</style>