<template>
  <div class="goodsInfo" v-if="Object.keys(detailInfo).length>0">
    <div class="desc">{{detailInfo.desc}}</div>
    <div class="detail" v-for="item in detailInfo.detailImage" :key="item.anchor"> 
      <p>{{item.key}}</p>
      <img :src="imgItem" alt="" v-for="(imgItem,index) in item.list" :key="index">
    </div>
  </div>
</template>

<script>
export default {
  props:{
    detailInfo:{
      type:Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.desc {
  padding: 15px;
}
.detail {
  margin-bottom: 20px;
}
.detail p {
  font-size: 24px;
  padding-left: 15px;
  margin-bottom: 15px;
}
.detail img {
  width: 100%;
  vertical-align: middle;
}
</style>