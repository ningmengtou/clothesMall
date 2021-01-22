<template>
  <div class="login">
    <div class="image">
      <img src="~assets/images/profile/avatar.svg" alt="" />
    </div>
    <div class="loginDetail">
      <div>登录/注册</div>
      <div>
        <img src="~assets/images/profile/phone.svg" alt="" />
        <span>暂无绑定手机号</span>
      </div>
    </div>
    <div class="other">></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.login {
  display: flex;
  background-color: var(--color-tint);
  color: #fff;
  padding: 10px 0;
}
.image {
  flex: 2;
  text-align: center;
}
.image img {
  width: 70%;
}
.loginDetail {
  flex: 7;
}
.loginDetail img {
  width: 30px;
}
.loginDetail div:nth-child(1) {
  padding-left: 8px;
  margin-bottom: 10px;
}
.loginDetail div:nth-child(2) {
  display: flex;
}
.loginDetail div:nth-child(2) span {
  line-height: 30px;
}
.other {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
}
</style>