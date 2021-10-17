<template>
  <div class="app">
    <div class="header">
      <div class="header__title">AI CARE</div>
      <div class="login">
        <nuxt-link to="/login"><i class="fas fa-sign-in-alt"></i></nuxt-link>
      </div>
    </div>
    <transition>
      <Nuxt />
    </transition>
  </div>
</template>

<style scoped lang="scss">
.app {
  height: 100vh;
  box-sizing: border-box !important;

  .header {
    padding: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 0px 0px 5px 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    color: $gray;

    &__title {
      font-weight: 700;
      font-size: $heading;
      font-family: 'Caveat', cursive;
    }

    .login {
      font-size: $heading;
    }
  }
}
</style>
