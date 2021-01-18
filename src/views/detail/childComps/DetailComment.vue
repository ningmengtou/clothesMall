<template>
  <div class="comment" v-if="Object.keys(comment).length > 0">
    <div class="title">
      <span>用户评价</span>
      <span>更多</span>
    </div>
    <div class="userInfo">
      <img :src="comment.user.avatar" alt="" />
      <span>{{ comment.user.uname }}</span>
    </div>
    <div class="content">{{ comment.content }}</div>
    <div class="commentDateil">
      <span>{{ comment.created | timer }}</span>
      <span>{{ comment.style }}</span>
    </div>
    <div class="imageShow" v-if="comment.images">
      <img :src="item" alt="" v-for="item in comment.images" />
    </div>
  </div>
</template>

<script>
import { dateFormat } from "common/util";

export default {
  props: {
    comment: {
      type: Object,
      defaull() {
        return {};
      },
    },
  },
  filters: {
    // 过滤器需要 return
    timer(value) {
      const time = new Date(value * 1000);
      return dateFormat(time, "yyyy-MM-dd hh:mm:ss");
    },
  },
};
</script>

<style scoped>
.comment {
  padding: 15px;
  border-bottom: 3px solid rgb(236, 232, 232);
  margin-bottom: 15px;
}
.title {
  display: flex;
  padding: 0 10px;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  border-bottom: 2px solid #ccc;
}
.userInfo {
  display: flex;
  align-items: center;
  height: 50px;
  margin-top: 10px;
}
.userInfo img {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin-right: 15px;
}
.content {
  font-size: 18px;
  margin: 10px 0;
}
.commentDateil {
  margin: 10px 0;
}
.commentDateil span:nth-child(1) {
  margin-right: 15px;
}
.imageShow {
  height: 100px;
}
.imageShow img {
  width: 100px;
  height: 100px;
}
</style>