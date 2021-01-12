<template>
  <div id="tab-bar">
    <!-- 利用插槽来动态改变子组件 -->
    <slot></slot>
  </div>
</template>


<script>
export default {};
</script>


<style scoped>
#tab-bar {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  background-color: #f6f6f6;
  box-shadow: 0 -2px 1px rgba(0, 0, 0, 0.1);
}
</style>