<template>
  <div id="detail">
    <DetailNavBar :title="title" class="detail-nav"></DetailNavBar>
    <Scroll class="content" ref="scroll">
      <DetailSwiper :banners="banners"></DetailSwiper>
      <DetailBaseInfo :goods="goods"></DetailBaseInfo>
      <DetailShopInfo :shop="shop"></DetailShopInfo>
      <DetailGoodsInfo
        :detailInfo="detailInfo"
        @imagesLoad="infoImagesLoad"
      ></DetailGoodsInfo>
      <DetailParamInfo :paramInfo="paramInfo"></DetailParamInfo>
      <DetailComment :comment="comment"></DetailComment>
      <goods :goods="recommends"></goods>
    </Scroll>
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

import Scroll from "components/common/Scroll/Scroll";
import goods from "components/content/Goods/Goods";

import {
  getDetailData,
  Goods,
  Shop,
  GoodsParam,
  getRecommendData,
} from "network/detail";

// 引入混入
import { itemListenerMixin } from "common/mixin";

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
 
    };
  },
  mixins:[itemListenerMixin],
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailComment,
    Scroll,
    goods,
  },
  created() {
    this.iid = this.$route.params.iid;
    this.getDetailData(this.iid);
    this.getRecommendData();
  },
  mounted() {

  },
  methods: {
    // 获取详情页数据
    async getDetailData(iid) {
      const res = await getDetailData(iid);
      console.log(res);
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
      this.comment = res.result.rate.list[0];
    },
    infoImagesLoad() {
      // 图片记载完就重新计算一下高度
      this.$refs.scroll.refresh();
    },
    // 获取推荐页数据
    async getRecommendData() {
      const res = await getRecommendData();
      this.recommends = res.data.list;
    },
  },
  // 详情页没有缓存  所以是 destroyed 钩子函数
  destroyed() {
    this.$bus.$off('itemImageLoad',this.itemImageLoad)
  }
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
  height: calc(100% - 44px);
  overflow: hidden;
}
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
</style>