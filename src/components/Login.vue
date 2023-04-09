<template>
  <div class="login-component-wrapper">
    <main>
      <div class="login-wrapper">
        <!-- left side : imgs -->
<!--        <div class="img-container">-->
<!--          <img class="img-container__image" src="../assets/img/imgForLoginPage.png"/>-->
<!--        </div>-->

        <!-- right side : login container -->
        <div class="login-container">
          <div class="login-box">
            <div class="logo">
              <img class="logo__chanilstagram" src="../assets/img/chanilstagram_black.png"/>
            </div>
            <form class="login-form">
              <div class="login-form__input">
                <label for="inputId">
                  <input id="inputId"
                         type="text"
                         v-model="userInputData.userInputID"
                         placeholder="phone, username or email"
                         required/>
                </label>
              </div>
              <div class="login-form__input">
                <label for="inputPassword">
                  <input id="inputPassword"
                         type="password"
                         v-model="userInputData.userInputPW"
                         minlength="6"
                         placeholder="password"
                         required
                         onkeyup=""/>
                </label>
              </div>
              <button class="login-form__button"
                      type="submit"
                      @click="loginCheck">
                <div class="login-button">
                  login
                </div>
              </button>
              <div class="or-container">
                <div class="or-division"></div>
                <div class="or">or</div>
                <div class="or-division"></div>
              </div>
            </form>
            <div class="forgot-password">
              <a href="#">Forgot your your password?</a>
            </div>
          </div>

          <div class="sign-up-wrapper">
            <div class="sign-up">
              <span>Don't have an account?</span>
              <a href="#">sign up</a>
            </div>
          </div>

          <div class="download-app-wrapper">
            <span>Download App</span>
            <div class="download-app">
              <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D163CBB16-3E7A-437D-98F2-B59A1BB3EF5A%26utm_content%3Dlo%26utm_medium%3Dbadge">
                <img class="download-app__img" src="../assets/img/googleplayimg.png"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>

    <footer class="login-footer">
      <div class="login-footer-info">
        <div class="login-footer-info__container">
          <a>About</a>
        </div>
        <div class="login-footer-info__container">
          <a>Skills</a>
        </div>
        <div class="login-footer-info__container">
          <a>Project</a>
        </div>
        <div class="login-footer-info__container">
          <a @click="clickContact">Contact</a>
        </div>
      </div>
      <div class="footer-mark">
        <span>© 2022 chanilstagram from Chan Il. K</span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Login-",
  data() {
    return {
      userInputData: {
        userInputID: null,
        userInputPW: null,
      }
    }
  },
  methods: {
    loginCheck() {
      let submitData = {}
      submitData.userInputID = this.userInputData.userInputID
      submitData.userInputPW = this.userInputData.userInputPW

      this.$store.commit('loginCheck', submitData)
    },
    clickContact() {
      alert('Call this number : 010-7511-8691');
    }
  }
}
</script>

<style scoped>
@import "../assets/css/login.css";
</style>