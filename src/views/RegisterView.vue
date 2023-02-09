<script setup>
</script>

<template>
  <div class="auth_background">
    <div class="auth_centerbox flex_box">
        <h1>LeoBit&nbsp;ID&nbsp;생성하기</h1>
        <p>LeoBit의 서비스를 이용할 수 있습니다.</p>
        <div id="name" class="flex_box">
          <input type="text" placeholder="성" class="Input_Name">
          <input type="text" placeholder="이름" class="Input_Name">
        </div>
        <div id="email" class="flex_box">
          <input type="email" class="InputInfo Input_email_passwd" placeholder="name@example.com">
          <div class="font" id="Email_caption">LeoBit의 아이디로 사용될 이메일입니다.</div>
        </div>
        <div id="PassWd" class="flex_box">
          <input type="password" placeholder="암호" class="InputInfo Input_email_passwd">
          <input type="password" placeholder="암호 확인" class="InputInfo Input_email_passwd">
        </div>
        <button class="go">Join</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/style/auth.scss'
</style>
