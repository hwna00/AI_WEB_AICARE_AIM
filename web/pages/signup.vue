<template>
  <div class="container">
    <div class="sign-up">
      <div class="sign-up__title">
        <span>회원가입</span>
      </div>
      <form class="sign-up__form">
        <input v-model="auth.name" type="text" placeholder="이름" required />
        <input v-model="auth.email" type="text" placeholder="이메일" required />
        <input
          v-model="auth.password"
          type="password"
          placeholder="비밀번호"
          required
        />
        <input
          v-model="auth.passwordCheck"
          type="password"
          placeholder="비밀번호 확인"
          required
        />
        <input
          v-model="auth.dischargeDate"
          type="text"
          placeholder="전역일을 입력해주세요"
          onfocus="(this.type='date')"
          required
        />
        <label for="input-profile">
          프로필 사진 업로드
          <span>
            <i v-if="isSuccess" class="far fa-check-circle success"></i>
            <i
              v-else-if="isSuccess == false"
              class="far fa-times-circle fail"
            ></i>
          </span>
        </label>
        <input id="input-profile" type="file" @change="checkUpload" />
        <div class="button">
          <button @click.prevent="signUp">회원가입</button>
        </div>
      </form>
    </div>
    <div class="footer">
      <span
        >이미 회원이신가요?
        <em @click="$router.push('/login')">로그인</em></span
      >
    </div>
  </div>
</template>

<script>
export default {
  layout: 'auth',
  data() {
    return {
      isSuccess: null,
      auth: {
        name: '',
        email: '',
        password: '',
        passwordCheck: '',
        dischargeDate: '',
        profileImg: null,
      },
    }
  },
  methods: {
    checkUpload(event) {
      if (event.target.files !== null) {
        this.isSuccess = true
        this.auth.profileImg = event.target.files[0]
      }
    },
    async signUp() {
      if (this.password === this.passwordCheck) {
        await this.$fire.auth
          .createUserWithEmailAndPassword(this.auth.email, this.auth.password)
          .then((userCredential) => {
            const user = userCredential.user
            const storageRef = this.$fire.storage.ref()
            const mountainsRef = storageRef.child(
              `${user.uid}/profile/${this.auth.profileImg.name}`
            )
            mountainsRef.put(this.auth.profileImg)
            this.$fire.firestore.collection('user').doc(user.uid).set({
              discharge_date: this.auth.dischargeDate,
              name: this.auth.name,
            })
            user.updateProfile({
              displayName: this.auth.name,
              email: this.auth.email,
            })
            this.$router.push('/')
          })
          .catch((e) => {
            console.log(e)
          })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  padding: 10vh 16px 47px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .sign-up {
    width: 100%;
    max-width: 400px;

    .sign-up__title {
      width: 100%;
      font-size: 28px;
      font-weight: bold;
      color: $gray;
      margin-bottom: 40px !important;
    }

    .sign-up__form {
      width: 100%;
      display: flex;
      flex-direction: column;

      label {
        font-weight: bold;
        text-align: center;
      }

      input,
      label {
        box-sizing: border-box !important;
        width: 100%;
        background-color: $yellow-light;
        color: $gray;
        border: none;
        margin: 8px 0 !important;
        padding: 16px 8px;
        font-size: 16px;
      }

      #input-profile {
        display: none;
      }

      .button {
        display: flex;
        justify-content: flex-end;

        button {
          font-family: 'Gowun Dodum', sans-serif;
          box-sizing: border-box !important;
          margin-top: 36px;
          padding: 10px 25px;
          font-size: 18px;
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
    justify-content: center;
    align-items: center;
    margin-top: 24px;

    em {
      color: $yellow-darken;
    }
  }

  .success {
    color: $success;
  }
  .fail {
    color: $fail;
  }
}
</style>
