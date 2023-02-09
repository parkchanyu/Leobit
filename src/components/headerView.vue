<script setup>
import { ref } from 'vue'
const selected = ref(false)
function Toggleselect () {
  selected.value = !selected.value
  console.log(selected.value)
}
</script>
<template>
  <nav>
        <router-link to="/">
          <ul id="logo-box" class="header_item"><img src="@/assets/style/img/icon/Leobit_2.png" class="img"><div class="font" id="logo-font">LeoBit</div></ul>
        </router-link>
        <ul class="nav_menu" :class="{ select_menu: selected.value === ture }">
          <li class="link header_item"><a class="font" href="#">Spot</a></li>
          <li class="link header_item"><a class="font" href="#">Future</a></li>
          <li class="link header_item"><a class="font" href="#">L/S Ratio</a></li>
          <li class="link header_item"><a class="font" href="#">Market</a></li>
          <li class="link font"><a class="font" href="/noticboard">Notic</a></li>
          <img src="@/assets/style/img/icon/user.png" class="img" id="logo-user" @click="userinfo">
          <li class="link" id="toggle_login"><a href="#" class="font">LogIn</a></li>
        </ul>
        <label for="a" id="toggle_login" class="nav_icon" @click="Toggleselect"><img src="@/assets/style/img/icon/menu_FILL0_wght400_GRAD0_opsz48.png"></label>
      </nav>
</template>

<style scoped lang="scss">
@import '@/assets/style/header&footer.scss'
</style>
