<template>
  <div>
    <NavBar>
      <div slot="center">我的档案</div>
    </NavBar>
    <ProfileLogin></ProfileLogin>
    <ProfileInfo></ProfileInfo>
    <ProfileOthers></ProfileOthers>
  </div>
</template>

<script>
import NavBar from "components/common/NavBar/NavBar";

import ProfileLogin from "./childComps/ProfileLogin";
import ProfileInfo from "./childComps/ProfileInfo";
import ProfileOthers from "./childComps/ProfileOthers";

export default {
  components: {
    NavBar,
    ProfileLogin,
    ProfileInfo,
    ProfileOthers,
  },
};
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
</style>