<template>
  <Swiper>
    <SwiperItem v-for="(item, index) in banner" :key="index">
      <a :href="item.link">
        <img :src="item.image" :alt="item.title" @load="bannerImage" />
      </a>
    </SwiperItem>
  </Swiper>
</template>


<script>
import { Swiper, SwiperItem } from "components/common/Swiper";

export default {
  data() {
    return {
      isLoad: true,
    };
  },
  components: {
    Swiper,
    SwiperItem,
  },
  // 接受父组件的参数
  props: {
    banner: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    bannerImage() {
      // 根据 this.isLoad 只发送一次事件
      if (this.isLoad) {
        this.$emit("bannerImageLoad");
        this.isLoad = false;
      }
    },
  },
};
</script>