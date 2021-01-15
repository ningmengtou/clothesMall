<template>
  <Swiper  class="detail-swiper">
    <SwiperItem v-for="item in banners" :key="item">
      <img :src="item" alt="">
    </SwiperItem>
  </Swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/Swiper/index";

export default {
  components:{
    Swiper,
    SwiperItem
  },
  props:{
    banners:{
      type:Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.detail-swiper {
  height: 300px;
  overflow: hidden;
}
</style>