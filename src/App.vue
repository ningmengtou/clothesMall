<template>
  <div id="app">
    <MainTabBar></MainTabBar>
    <!-- 使用 keep-alive 保持组件状态 -->
    <keep-alive exclude="Detail">
        <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import MainTabBar from "components/content/MainTabBar/MainTabBar";
export default {
  components: {
    MainTabBar,
  },
};
</script>

<style>
@import "assets/css/base.css";
</style>
