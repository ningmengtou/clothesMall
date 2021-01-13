<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BS from "better-scroll";
export default {
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    // 在mounted函数中才能拿到元素 使用ref拿元素不会出现冲突
    this.scroll = new BS(this.$refs.wrapper, {
      // 让滚动容器内可以被点击
      click: true,
    });
  },
};
</script>