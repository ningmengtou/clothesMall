<template>
  <Scroll class="content">
    <div class="leftContent">
      <div
        class="leftItem"
        v-for="(item, index) in titleList"
        :key="item.maitKey"
        @click="itemClick(index,item.maitKey)"
        :class="{ current: index == currentIndex }"
      >
        {{ item.title }}
      </div>
    </div>
  </Scroll>
</template>

<script>
import Scroll from "components/common/Scroll/Scroll";
export default {
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    titleList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    itemClick(index,maitKey) {
      this.currentIndex = index;
      // 发送自定义事件把 maitKey 发送出去
      this.$emit('getMaitKey',maitKey)
    },
  },
  components: {
    Scroll,
  },
};
</script>

<style scoped>
.leftContent {
  width: 100%;
  text-align: center;
  background-color: rgb(243, 241, 241);
}
.leftItem {
  height: 38px;
  line-height: 38px;
  font-size: 16px;
}
.leftContent .current {
  color: var(--color-high-text);
  background-color: #fff;
  font-weight: 550;
  border-left: 5px solid var(--color-high-text);
  font-size: 18px;
}
.content {
  height: calc(100vh - 93px);
  overflow: hidden;
}
</style>