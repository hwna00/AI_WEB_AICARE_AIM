<template>
  <div class="container">
    <div class="login">
      <div class="login__title">
        <span>로그인</span>
      </div>
      <form class="login__form">
        <input v-model="auth.email" type="text" placeholder="email" required />
        <input
          v-model="auth.password"
          type="password"
          placeholder="password"
          required
        />
        <div class="button">
          <button @click.prevent="login">로그인</button>
        </div>
      </form>
    </div>
    <div class="footer">
      <span
        >아직 회원이 아니신가요?
        <em @click="$router.push('/signup')">회원가입</em></span
      >
      <span> <em @click="$router.push('/try-it-first')">체험하러가기</em></span>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'auth',
  data() {
    return {
      auth: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    login() {
      this.$fire.auth
        .signInWithEmailAndPassword(this.auth.email, this.auth.password)
        .then((userCredential) => {
          // var user = userCredential.user
          this.$router.push('/')
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  padding: 30vh 16px 47px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .login {
    width: 100%;

    .login__title {
      width: 100%;
      font-size: 28px;
      font-weight: bold;
      color: $gray;
      margin-bottom: 40px !important;
    }

    .login__form {
      width: 100%;
      display: flex;
      flex-direction: column;

      input {
        box-sizing: border-box !important;
        background-color: $yellow-light;
        color: $gray;
        border: none;
        margin: 8px 0;
        padding: 16px 8px;
        font-size: 16px;
      }

      .button {
        display: flex;
        justify-content: flex-end;

        button {
          font-family: 'Gowun Dodum', sans-serif;
          box-sizing: border-box !important;
          margin-top: 36px;
          padding: 10px 25px;
          font-size: $sub-heading;
          font-weight: bold;
          border: none;
          border-radius: 5px;
          color: #ffffff;
          background-color: $yellow;
        }
      }
    }
  }

  .footer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    em {
      color: $yellow-darken;
    }

    span:last-child {
      margin-top: 8px;
    }
  }
}
</style>
