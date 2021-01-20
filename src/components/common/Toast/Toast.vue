<template>
  <div class="toast" v-show="isShow">
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      isShow: false,
    };
  },
  methods: {
    // 封装显示方法
    show(message = "默认文字", delay = 1500) {
      this.message = message;
      this.isShow = true;

      setTimeout(() => {
        this.message = "";
        this.isShow = false;
      }, delay);
    },
  },
};
</script>

<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: transLate(-50%, -50%);
  text-align: center;
  padding: 8px 10px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 20px;
  color: #fff;
  z-index: 15;
}
</style>