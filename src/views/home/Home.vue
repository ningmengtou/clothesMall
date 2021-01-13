<template>
  <div id="home">
    <!-- 导航栏 -->
    <NavBar><div slot="center">购物街</div></NavBar>
    <Scroll class="content">
      <!-- 轮播图 -->
      <HomeSwiper :banner="banner"></HomeSwiper>
      <!-- 推荐区 -->
      <HomeRecommend :recommend="recommend"></HomeRecommend>
      <!-- 流行区 -->
      <HomeFeatureView></HomeFeatureView>
      <!-- 切换栏 -->
      <TabControl :controls="controls" @tabClick="tabClick"></TabControl>
      <!-- 商品区 -->
      <Goods :goods="showGoods"></Goods>
    </Scroll>
  </div>
</template>

<script>
// 引入公共组件
import NavBar from "components/common/NavBar/NavBar";
import TabControl from "components/content/TabControl/TabControl";
import Goods from "components/content/Goods/Goods";
import Scroll from "components/common/Scroll/Scroll";

// 引入子级组件
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommend from "./childComps/HomeRecommend";
import HomeFeatureView from "./childComps/HomeFeatureView";
// 引入网络请求方法
import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  data() {
    return {
      banner: [],
      recommend: [],
      controls: ["流行", "新款", "精选"],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
    };
  },
  components: {
    NavBar,
    TabControl,
    Goods,
    Scroll,
    HomeSwiper,
    HomeRecommend,
    HomeFeatureView,
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    async getHomeMultidata() {
      const result = await getHomeMultidata();
      this.banner = result.data.banner.list;
      this.recommend = result.data.recommend.list;
    },
    async getHomeGoods(type) {
      // 每次使用这个请求方法就请求 page+1 的数据
      const page = this.goods[type].page + 1;
      const result = await getHomeGoods(type, page);
      // 把请求回来的数据添加到data中 并且改变page的值
      this.goods[type].list = [...this.goods[type].list, ...result.data.list];
      this.goods[type].page = page;
    },
    tabClick(index) {
      // 根据子组件传递过来的index 来改变 currentType 的值
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
};
</script>

<style scoped>
#home {
  padding-top: 44px;

  height: 100vh;
}
.content {
  /* 要给可以滚动的元素设定高度 */
  height: calc(100vh - 93px);
  overflow: hidden;
}
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
</style>