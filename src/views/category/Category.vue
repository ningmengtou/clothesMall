<template>
  <div>
    <NavBar>
      <div slot="center">商品分类</div>
    </NavBar>
    <div class="all">
      <CategoryLeft
        :titleList="titleList"
        class="categoryLeft"
        @getMaitKey="getMaitKey"
      ></CategoryLeft>
      <CategoryRight
        :subcategoryList="subcategoryList"
        class="categoryRight"
        ref="right"
      ></CategoryRight>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/NavBar/NavBar";

import CategoryLeft from "./childComps/CategoryLeft";
import CategoryRight from "./childComps/CategoryRight";

import { getCategoryTitle, getSubcategory } from "network/category";
export default {
  data() {
    return {
      titleList: [],
      subcategoryList: [],
    };
  },
  components: {
    NavBar,
    CategoryLeft,
    CategoryRight,
  },
  created() {
    this.getCategoryTitle();
  },
  methods: {
    // 获取标题信息数据
    async getCategoryTitle() {
      const res = await getCategoryTitle();
      this.titleList = res.data.category.list;
      const res1 = this.getSubcategory(this.titleList[0].maitKey);
    },
    // 获取子类别数据
    async getSubcategory(maitKey) {
      const res = await getSubcategory(maitKey);
      this.subcategoryList = res.data.list;
    },
    // 点击切换左侧title事件
    getMaitKey(maitKey) {
      // 通过最新的 maitKey 来获取子类别的数据
      this.getSubcategory(maitKey);
    },
  },
};
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
.all {
  display: flex;
}
.categoryLeft {
  width: 30%;
}
.categoryRight {
  width: 70%;
}
</style>