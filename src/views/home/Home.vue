<template>
  <div id="home">
    <!-- 导航栏 -->
    <NavBar><div slot="center">购物街</div></NavBar>
    <TabControl
      :controls="controls"
      @tabClick="tabClick"
      ref="tabControl1"
      v-show="TabControlFixed"
      class="tab-control"
    ></TabControl>
    <Scroll
      class="content"
      ref="scroll"
      @onScroll="onScroll"
      :probe-type="3"
      :pull-up-load="true"
      @pullingUp="pullingUp"
    >
      <!-- 轮播图 -->
      <HomeSwiper
        :banner="banner"
        @bannerImageLoad="bannerImageLoad"
      ></HomeSwiper>
      <!-- 推荐区 -->
      <HomeRecommend :recommend="recommend"></HomeRecommend>
      <!-- 流行区 -->
      <HomeFeatureView></HomeFeatureView>
      <!-- 切换栏 -->
      <TabControl
        :controls="controls"
        @tabClick="tabClick"
        ref="tabControl2"
      ></TabControl>
      <!-- 商品区 -->
      <Goods :goods="showGoods"></Goods>
    </Scroll>
    <!-- 点击置顶 -->
    <!-- 想给组件监听原生事件需要添加 native 修饰符 -->
    <BackTop @click.native="backClick" v-show="isBackTopShow"></BackTop>
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

// 引入混入
import { itemListenerMixin, backTopMixin } from "common/mixin";

export default {
  name: "Home",
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
      TabControlTop: 0,
      TabControlFixed: false,
      scrollTop: 0,
    };
  },
  // mixins 定义混入的代码
  mixins: [itemListenerMixin, backTopMixin],
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
  mounted() {},
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
      // 把请求回来的数据添加到data中(数据应该是累加而不是更改) 并且改变page的值
      this.goods[type].list = [...this.goods[type].list, ...result.data.list];
      this.goods[type].page = page;
      // 刷新下拉加载
      this.$refs.scroll.finishPullUp();
    },
    // tab栏点击事件
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
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    onScroll(position) {
      // 根据滚动的距离来决定 BackTop 组件的显示隐藏
      this.isBackTopShow = -position.y > 1050;
      // 根据滚动的距离来决定 TabControl 组件的显示隐藏
      this.TabControlFixed = -position.y >= this.TabControlTop;
    },
    // 上拉加载更多
    pullingUp() {
      // 上拉刷新请求新的数据
      this.getHomeGoods(this.currentType);
    },
    // 监听轮播图图片是否加载完成
    bannerImageLoad() {
      // 通过 $el 可以获取到组件内部元素的 offsetTop 值
      this.TabControlTop = this.$refs.tabControl2.$el.offsetTop;
    },
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.scrollTop, 0);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    this.scrollTop = this.$refs.scroll.scroll.y;
    // 不访问home页面时取消 $bus 中的 itemImageLoad 事件
    this.$bus.$off("itemImageLoad", this.itemImageLoad);
  },
};
</script>

<style scoped>
#home {
  /* padding-top: 44px; */
  position: relative;
  height: calc(100vh - 50px);
}
.content {
  /* 要给可以滚动的元素设定高度 */
  /* height: calc(100vh - 93px); */
  /* overflow: hidden; */

  /* 这里必须使用定位 不让吸顶样式不能做 */
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 1px;
  left: 0;
  right: 0;
}
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
.tab-control {
  position: relative;
  z-index: 10;
}
</style>