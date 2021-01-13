<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>


<style scoped>
.nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  line-height: 44px;
  height: 44px;
  text-align: center;
  z-index: 10;
}
.center {
  flex: 1;
}
.left,
.right {
  width: 80px;
}
</style>