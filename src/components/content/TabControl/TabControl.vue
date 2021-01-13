<template>
  <div class="tab-control">
    <div
      class="controlItem"
      v-for="(item, index) in controls"
      :key="index"
      @click="itemClick(index)"
    >
      <span :class="{ active: currentIndex === index }">{{ item }}</span>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    controls: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      // 自定义事件 把index传递到父组件
      this.$emit("tabClick", index);
    },
  },
};
</script>


<style scoped>
.tab-control {
  display: flex;
  position: sticky;
  top: 44px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: #fff;
}
.controlItem {
  flex: 1;
  font-size: 16px;
}
.controlItem span {
  padding: 5px;
}
.active {
  border-bottom: 2px solid var(--color-high-text);
  color: var(--color-high-text);
}
</style>