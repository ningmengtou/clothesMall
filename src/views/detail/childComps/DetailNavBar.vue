<template>
  <div>
    <NavBar>
      <div slot="left" class="BackImage" @click="toBack">
        <img src="~assets/images/common/back.svg" alt="" />
      </div>
      <div slot="center" class="titles">
        <div
          class="titleItem"
          v-for="(item, index) in title"
          @click="titleItemClick(index)"
          :class="{ active: index === currentIndex }"
        >
          {{ item }}
        </div>
      </div>
    </NavBar>
  </div>
</template>


<script>
import NavBar from "components/common/NavBar/NavBar";
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    title: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    toBack() {
      this.$router.back();
    },
    titleItemClick(index) {
      this.currentIndex = index;
    },
  },
};
</script>


<style scoped>
.titles {
  display: flex;
}
.titleItem {
  flex: 1;
}
.BackImage {
  margin-top: 5px;
}
.active {
  color: var(--color-high-text);
}
</style>