<template>
  <div id="home">
    <!-- 导航栏 -->
    <NavBar><div slot="center">购物街</div></NavBar>
    <!-- 轮播图 -->
    <HomeSwiper :banner="banner"></HomeSwiper>
    <!-- 推荐区 -->
    <HomeRecommend :recommend="recommend"></HomeRecommend>
  </div>
</template>

<script>
// 引入组件
import NavBar from "components/common/NavBar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommend from "./childComps/HomeRecommend";
// 引入网络请求方法
import { getHomeMultidata } from "network/home";

export default {
  data() {
    return {
      banner: [],
      recommend: [],
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
  },
  created() {
    getHomeMultidata().then((res) => {
      this.banner = res.data.banner.list;
      this.recommend = res.data.recommend.list;
    });
  },
};
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
</style>