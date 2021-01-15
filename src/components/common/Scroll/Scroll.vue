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
  props: {
    // 监听滚动的属性由父组件传递
    probeType: {
      type: Number,
      default: 0,
    },
    // 监听时候开启上拉刷新
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    // 在mounted函数中才能拿到元素 使用ref拿元素不会出现冲突
    this.scroll = new BS(this.$refs.wrapper, {
      // 让滚动容器内元素可以被点击
      click: true,
      // probeType 属性由父组件传递过来
      probeType: this.probeType,
      // 开启下拉加载 属性由父组件传递过来
      pullUpLoad: this.pullUpLoad,
    });
    this.scroll.on("scroll", (position) => {
      // 发送自定义事件到父组件
      this.$emit("onScroll", position);
    });
    this.scroll.on("pullingUp", () => {
      // 发送自定义事件到父组件 开启上拉刷新
      this.$emit("pullingUp");
    });
  },
  methods: {
    // 封装内部的scrollTo方法
    scrollTo(x, y, time = 1500) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      // 调用 finishPullUp 方法告诉BS上一次上拉加载完成
      this.scroll && this.scroll.finishPullUp();
    },
    refresh() {
      // 刷新 scroll 重新计算可滚动的高度
      this.scroll && this.scroll.refresh();
    },
  },
};
</script>