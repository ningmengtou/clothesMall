<template>
  <Scroll class="content" ref="Scroll">
    <div class="rightContent">
      <div class="item" v-for="(item, index) in subcategoryList" :key="index">
        <img :src="item.image" alt="" @load="imageLoad" />
        <div>{{ item.title }}</div>
      </div>
    </div>
  </Scroll>
</template>

<script>
import Scroll from "components/common/Scroll/Scroll";
export default {
  props: {
    subcategoryList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Scroll,
  },
  data() {
    return {
      imageNumber: 0,
    };
  },
  methods: {
    imageLoad() {
      if (++this.imageNumber == this.subcategoryList.length) {
        this.$refs.Scroll.refresh();
      }
    },
  },
};
</script>

<style scoped>
.rightContent {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding-top: 20px;
}
.item {
  text-align: center;
  width: 50%;
  margin-bottom: 20px;
}
.item img {
  width: 90%;
  border-radius: 50%;
  margin-bottom: 10px;
}
.content {
  width: 100%;
  height: calc(100vh - 93px);
  overflow: hidden;
}
</style>