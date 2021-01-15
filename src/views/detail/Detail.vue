<template>
  <div id="detail">
      <DetailNavBar :title="title"></DetailNavBar>
    <Scroll class="content">
      <DetailSwiper :banners="banners"></DetailSwiper>
      <DetailBaseInfo :goods="goods"></DetailBaseInfo>
      <DetailShopInfo :shop="shop"></DetailShopInfo>
      <DetailGoodsInfo :detailInfo="detailInfo"></DetailGoodsInfo>
      <DetailParamInfo :paramInfo="paramInfo"></DetailParamInfo>
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

import Scroll from 'components/common/Scroll/Scroll'

import { getDetailData, Goods, Shop, GoodsParam } from "network/detail";

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
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    Scroll,
  },
  created() {
    this.iid = this.$route.params.iid;
    this.getDetailData(this.iid);
  },
  methods: {
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
    },
  },
};
</script>


<style scoped>
#detail {
  /* 让底部的导航栏消失 */
  position: relative;
  z-index: 12;
  background-color: #fff;
}
.content {
  height: calc(100vh -44px);
}
</style>