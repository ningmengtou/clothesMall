<template>
  <div>
    <div class="container" v-if="cartList.length > 0">
      <div
        class="goodsItem"
        v-for="item in cartList"
        :key="item.iid"
        :class="{ bg: item.checked }"
      >
        <div class="checkbox">
          <img
            src="~assets/images/cart/tick.svg"
            alt=""
            class="tick"
            :class="{ show: item.checked }"
            @click="tickClick(item.iid)"
          />
        </div>
        <div class="image">
          <img :src="item.goodImage" alt="" @load="imageLoad" />
        </div>
        <div class="goodsInfo">
          <div class="title">{{ item.title }}</div>
          <div class="desc">{{ item.desc }}</div>
          <div class="detail">
            <div class="price">￥{{ item.price }}</div>
            <div class="number">X{{ item.number }}</div>
          </div>
          <div class="clear" @click="clearProduct(item.iid)">删除</div>
        </div>
      </div>
    </div>
    <div v-else>
      <img src="~assets/images/cart/kong.jpg" alt="" class="kong" />
      <div class="toLook" @click="toHome">去看看</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      showTick: false,
    };
  },
  computed: {
    ...mapState(["cartList"]),
  },
  methods: {
    ...mapMutations(["clearGoods"]),
    imageLoad() {
      this.$emit("imageLoad");
    },
    tickClick(iid) {
      // 点击事件让 vuex 中的对象修改 checked 值
      this.$store.commit("changeChecked", iid);
    },
    toHome() {
      this.$router.replace("/home");
    },
    clearProduct(iid) {
      this.clearGoods(iid);
    },
  },
};
</script>

<style scoped>
.goodsItem {
  display: flex;
  width: 100%;
  padding: 10px;
  border-bottom: 2px solid rgb(231, 222, 222);
}
.bg {
  background-color: rgb(248, 242, 242);
}
.checkbox {
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.tick {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: solid 2px #eee;
}
.show {
  background-color: pink;
  border: 0;
}
.image {
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.image img {
  width: 100%;
  border-radius: 10px;
  max-height: 118px;
}
.goodsInfo {
  width: 70%;
  padding: 0 15px;
}
.title,
.desc {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 15px 0;
}
.title {
  font-size: 18px;
  font-weight: 550;
}
.detail {
  display: flex;
  justify-content: space-between;
  font-size: 18px;
}
.price {
  color: orange;
}
.clear {
  float: right;
  width: 60px;
  height: 30px;
  background-color: red;
  line-height: 30px;
  text-align: center;
  color: #fff;
  border-radius: 10px;
  margin-top: 5px;
}
.kong {
  width: 100%;
}
.toLook {
  width: 200px;
  height: 60px;
  line-height: 60px;
  margin: 20px auto;
  text-align: center;
  font-size: 24px;
  background-color: rgb(75, 173, 238);
  color: #fff;
  border-radius: 25px;
}
</style>