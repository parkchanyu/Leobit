<template>
  <div class="background">
    <a href="/login" class="font">로그인</a>
    <a href="/register" class="font">회원가입</a>
    <a class="font">계정</a>
</div>
</template>

<style scoped>
.background{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
}
.font {
    color: rgb(10, 141, 255);
}
a:hover {
    font-weight: bold;
    transition: .2s;
}
</style>
