<template>
  <div class="tab-bar-item" @click="tabBarItemClick">
    <!-- 利用具名插槽动态改变子组件的文字图片 -->
    <!-- 在插槽外部包裹一层 div 来改变是否选中样式 -->
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      // isActive: false,
      // active: this.activeColor,
    };
  },
  // 接受app.vue传递过来的参数路径
  props: {
    path: {
      type: String,
    },
    activeColor: {
      type: String,
      default: "red",
    },
  },
  methods: {
    tabBarItemClick() {
      // 点击跳转到对应路径
      this.$router.push(this.path);
    },
  },
  computed: {
    // 把 isActive 写成计算属性 让当前页面的path和传递过来的path进行对比 取返回值
    isActive() {
      return this.$route.path == this.path;
    },
    activeStyle() {
      // 通过动态绑定style改变字体颜色
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-top: 3px;
  margin-bottom: 2px;
}

</style>