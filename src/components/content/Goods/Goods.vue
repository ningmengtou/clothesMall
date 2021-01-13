<template>
  <div class="goods">
    <div class="goodsItem" v-for="item in goods">
      <img :src="item.show.img" alt="">
      <div class="title">{{item.title}}</div>
      <div class="detail">
        <span class="price">￥{{item.price}}</span>
        <span class="collect">{{item.cfav}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    goods:{
      type:Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.goodsItem {
  width: 47%;
  margin-bottom: 10px;
}
.goodsItem img {
  width: 100%;
  border-radius: 10px;
  min-height: 290px;
}
.goodsItem .title {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 13px;
  margin: 5px 0;
  padding: 0 5px;
}
.goodsItem .detail {
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  height: 22px;
  line-height: 22px;
  padding: 0 5px;
}
.goodsItem .detail .price {
  color: var(--color-tint);
}
.goodsItem .detail .collect {
  position: relative;
}
.goodsItem .detail .collect::before {
  content:'';
  position: absolute;
  width: 22px;
  height: 22px;
  top: 0;
  left: -25px;
  background-color: pink;
  background: url("~assets/images/detail/detail_bottom.png") no-repeat 0 0;
  background-size: 22px;
}
</style>