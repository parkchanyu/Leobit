<script setup>
import userinfo from '@/components/main_userinfo.vue'
import footerCom from '@/components/footerView.vue'
import { ref } from 'vue'
const selected = ref(true)
const togglebutton = ref(false)
function Toggleselect () {
  selected.value = !selected.value
}
function toggleOnOff () {
  togglebutton.value = !togglebutton.value
}
</script>

<template>
  <header>
      <nav>
        <router-link to="/">
          <ul id="logo-box" class="header_item"><img src="@/assets/style/img/icon/Leobit_2.png" class="img"><div class="font" id="logo-font">LeoBit</div></ul>
        </router-link>
        <ul class="nav_menu" :class="{ select_menu: selected }">
          <li class="link header_item"><a class="font" href="#" >Spot</a></li>
          <li class="link header_item"><a class="font" href="#">Future</a></li>
          <li class="link header_item"><a class="font" href="#">L/S Ratio</a></li>
          <li class="link header_item"><a class="font" href="#">Market</a></li>
          <li class="link font"><a class="font" href="/noticboard">Notic</a></li>
          <a href="/login"><img src="@/assets/style/img/icon/user.png" class="img" id="logo-user" @click="toggleOnOff"></a>
          <li class="link" id="toggle_login"><a href="/login" class="font">LogIn</a></li>
        </ul>
        <div for="a" id="toggle_login" class="nav_icon" @click="Toggleselect"><img src="@/assets/style/img/icon/menu_FILL0_wght400_GRAD0_opsz48.png"></div>
      </nav></header>
  <div class="userinfo" style="display:none"><userinfo :togglebutton="togglebutton"></userinfo></div>
  <router-view/>
    <footer>
      <footerCom></footerCom>
  </footer>
</template>

<style lang="scss">
@import '@/assets/style/main.scss';
@import '@/assets/style/header&footer.scss';
</style>
