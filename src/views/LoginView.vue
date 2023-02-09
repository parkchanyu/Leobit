<script setup>
import { ref } from 'vue'
const UserID = ref('')
const UserPW = ref('')
const checkID = ref(false)
const IDfocus = ref(false)
const PWfocus = ref(false)
function IDcheck () {
  checkID.value = ref(true)
  console.log(checkID.value)
}
function IDfocuscheck () {
  IDfocus.value = !IDfocus.value
  console.log('IDfoucs 함수실행')
}
function PWfocuscheck () {
  PWfocus.value = !PWfocus.value
  console.log('PWfoucs 함수실행')
  console.log(PWfocus.value)
}
</script>

<template>
  <div class="auth_background">
    <div class="auth_centerbox flex_box">
        <h2>LeoBit에 로그인하세요</h2>
        <div class="ID_PW flex_box">
          <div class="InputInfo_background ID" :class="{ input_focus: IDfocus}">
              <input type="text" class="InputInfo" placeholder="LeoBit&nbsp;ID" required v-model="UserID" @focus="IDfocuscheck">
              <img src="@/assets/style/img/icon/check_circle_FILL0_wght400_GRAD0_opsz48.png" alt="" v-show="UserID" @click="IDcheck" class="ID">
          </div>
          <div class="InputInfo_background PW" v-show="checkID" :class="{ input_foucs: PWfocus}">
              <input type="password" class="InputInfo PW" placeholder="LeoBit&nbsp;PW" v-model="UserPW" @focus="PWfocuscheck">
              <img src="@/assets/style/img/icon/login_FILL0_wght400_GRAD0_opsz48.png" alt="" v-show="UserPW">
          </div>
        </div>
        <div class="remember_me"><input type="checkbox">아이디&nbsp;저장</div>
        <span>LeoBit&nbsp;ID가&nbsp;없으십니까?&nbsp;<a class="go_register" href="/register">지금&nbsp;만드세요.</a></span>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/style/auth.scss'
</style>
