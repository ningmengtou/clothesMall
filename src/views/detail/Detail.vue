<template>
  <div id="detail">
    <DetailNavBar
      :title="title"
      class="detail-nav"
      @titleClick="titleClick"
      ref="detailNav"
    ></DetailNavBar>
    <Scroll class="content" ref="scroll" :probe-type="3" @onScroll="onScroll">
      <DetailSwiper :banners="banners"></DetailSwiper>
      <DetailBaseInfo :goods="goods"></DetailBaseInfo>
      <DetailShopInfo :shop="shop"></DetailShopInfo>
      <DetailGoodsInfo
        :detailInfo="detailInfo"
        @imagesLoad="infoImagesLoad"
      ></DetailGoodsInfo>
      <DetailParamInfo
        :paramInfo="paramInfo"
        ref="detailParamInfo"
      ></DetailParamInfo>
      <DetailComment :comment="comment" ref="detailComment"></DetailComment>
      <goods :goods="recommends" ref="goods"></goods>
    </Scroll>
    <DetailBottomBar @addCart="addCart"></DetailBottomBar>
    <!-- 点击置顶 -->
    <!-- 想给组件监听原生事件需要添加 native 修饰符 -->
    <BackTop @click.native="backClick" v-show="isBackTopShow"></BackTop>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailComment from "./childComps/DetailComment";
import DetailBottomBar from "./childComps/DetailBottomBar";

import Scroll from "components/common/Scroll/Scroll";
import goods from "components/content/Goods/Goods";

import { debounce } from "common/util";

import {
  getDetailData,
  Goods,
  Shop,
  GoodsParam,
  getRecommendData,
} from "network/detail";

// 引入混入
import { itemListenerMixin, backTopMixin } from "common/mixin";

export default {
  name: "Detail",
  data() {
    return {
      title: ["商品", "参数", "评论", "推荐"],
      iid: "",
      banners: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      recommends: [],
      comment: {},
      titleTop: [],
      currentIndex: 0,
    };
  },
  mixins: [itemListenerMixin, backTopMixin],
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailComment,
    DetailBottomBar,
    Scroll,
    goods,
  },
  created() {
    this.iid = this.$route.params.iid;
    this.getDetailData(this.iid);
    this.getRecommendData();
  },
  mounted() {},
  methods: {
    // 获取详情页数据
    async getDetailData(iid) {
      const res = await getDetailData(iid);
      // console.log(res);
      // 获取轮播图信息
      this.banners = res.result.itemInfo.topImages;
      // 获取商品信息
      this.goods = new Goods(
        res.result.itemInfo,
        res.result.columns,
        res.result.shopInfo.services
      );
      // 获取商家信息
      this.shop = new Shop(res.result.shopInfo);
      // 获取商品详情数据
      this.detailInfo = res.result.detailInfo;
      // 获取商品参数信息
      this.paramInfo = new GoodsParam(
        res.result.itemParams.info,
        res.result.itemParams.rule
      );
      // 获取评论信息
      this.comment = res.result.rate.list ? res.result.rate.list[0] : {};
    },
    infoImagesLoad() {
      // 图片记载完就重新计算一下高度
      this.$refs.scroll.refresh();
      // 把对于组件的 offsetTop 值添加到 this.titleTop 数组中
      this.titleTop.push(0);
      this.titleTop.push(this.$refs.detailParamInfo.$el.offsetTop);
      this.titleTop.push(this.$refs.detailComment.$el.offsetTop);
      this.titleTop.push(this.$refs.goods.$el.offsetTop);
      // 给数组多加一个值方便监听滚动时的条件判断
      this.titleTop.push(this.$refs.goods.$el.offsetTop + 100);
    },
    // 获取推荐页数据
    async getRecommendData() {
      const res = await getRecommendData();
      this.recommends = res.data.list;
    },
    // title点击事件
    titleClick(index) {
      // title点击 让页面滚动到指定的位置
      this.$refs.scroll.scrollTo(0, -this.titleTop[index], 200);
    },
    // 监听content滚动
    onScroll(position) {
      // 根据滚动的距离来决定 BackTop 组件的显示隐藏
      this.isBackTopShow = -position.y > 1050;
      // 获取滚动距离
      let topY = -position.y;
      for (let i = 0; i < this.titleTop.length - 1; i++) {
        // this.currentIndex !== i  防止频繁操作
        if (
          this.currentIndex !== i &&
          topY >= this.titleTop[i] &&
          topY < this.titleTop[i + 1]
        ) {
          this.currentIndex = i;
          // 根据获取的 this.currentIndex 来改变导航栏的样式
          this.$refs.detailNav.currentIndex = this.currentIndex;
        }
      }
    },
    // 添加到购物车事件
    addCart() {
      // 整理购物车中的数据
      let product = {
        title: this.goods.title,
        desc: this.detailInfo.desc,
        price: this.goods.realPrice,
        goodImage: this.banners[0],
        iid: this.iid,
      };
      // 把添加到购物车的商品信息追加到 vuex 中
      // 使用 .then 接受添加购物车后的信息
      this.$store.dispatch("addCart", product).then((res) => {
        // 通过自定义插件 直接调用 toast
        this.$toast.show(res);
      });
    },
  },
  // 详情页没有缓存  所以是 destroyed 钩子函数
  destroyed() {
    this.$bus.$off("itemImageLoad", this.itemImageLoad);
  },
};
</script>


<style scoped>
#detail {
  /* 让底部的导航栏消失 */
  position: relative;
  z-index: 12;
  background-color: #fff;
  height: 100vh;
}
#detail .content {
  height: calc(100% - 109px);
  overflow: hidden;
}
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
</style>