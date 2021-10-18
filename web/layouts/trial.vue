<template>
  <div class="app">
    <div class="header">
      <div class="header__title">AI CARE</div>
      <div class="login">
        <nuxt-link to="/login"><i class="fas fa-sign-in-alt"></i></nuxt-link>
      </div>
    </div>
    <h1>음성일기를 작성하고 감정분석을 받아보세요!</h1>
    <transition name="fade">
      <Nuxt />
    </transition>
    <footer>
      마음에 드셨나요?
      <em @click="$router.push('/signup')">회원이 되어보세요</em>
    </footer>
  </div>
</template>

<style scoped lang="scss">
.app {
  height: 100vh;
  box-sizing: border-box !important;

  h1 {
    box-sizing: border-box;
    font-size: $heading;
    margin: 32px 0 16px;
    text-align: center;
    word-break: keep-all;
    line-height: 1.3;
  }

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

      a {
        color: $gray;
      }
      a.nuxt-link-active {
        color: $gray;
      }
    }
  }

  footer {
    text-align: center;
    margin: 16px 0;

    em {
      color: $yellow-darken;
      cursor: pointer;
    }
  }
}
</style>
