import { debounce } from "common/util";

// 导出混入的 itemListenerMixin 方法
export const itemListenerMixin = {
  data() {
    return {
      itemImageLoad: null
    }
  },
  mounted() {
    this.itemImageLoad = debounce(this.$refs.scroll.refresh, 200);
    // 利用事件总线来监听 itemImageLoad  需要在mounted钩子函数中才能拿到值
    this.$bus.$on("itemImageLoad", () => {
      // 图片加载完成后执行一次 refresh
      this.itemImageLoad();
    });
  },
}