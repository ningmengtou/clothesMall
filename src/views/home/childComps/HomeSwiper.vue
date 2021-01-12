<template>
  <Swiper>
    <SwiperItem v-for="(item, index) in banner" :key="index">
      <a :href="item.link">
        <img :src="item.image" :alt="item.title" />
      </a>
    </SwiperItem>
  </Swiper>
</template>


<script>
import { Swiper, SwiperItem } from "components/common/Swiper";
export default {
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
};
</script>