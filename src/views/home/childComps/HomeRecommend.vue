<template>
  <div class="recommend">
    <div class="recommendItem" v-for="(item, index) in recommend" :key="index">
      <a :href="item.link">
        <img :src="item.image" :alt="item.title" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.recommend {
  display: flex;
  padding: 10px 0 20px;
  border-bottom: 8px solid #eee;
}
.recommendItem {
  flex: 1;
  text-align: center;
  font-size: 13px;
}
.recommendItem img {
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
</style>