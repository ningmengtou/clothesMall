<template>
  <div id="app">
   <MainTabBar></MainTabBar>
   <router-view></router-view>
  </div>
</template>

<script>

import MainTabBar from 'components/content/MainTabBar/MainTabBar'
export default {
  components:{
    MainTabBar
  }
}
</script>

<style>
@import 'assets/css/base.css';
</style>
