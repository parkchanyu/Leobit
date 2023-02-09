<template>
  <div class="main">
    <div class="main_1">
      <div class="font main_font" id="main_title">Check out everything about <br/>cryptocurrencies on Leobit.</div>
      <div class="font main_font" id="main_caption">암호화폐 부터  +NFT 까지</div>
      <div class="main_logobox">
        <div class="main_item" style="background-color: rgb(11, 14, 17);"><img src="@/assets/style/img/logo/binancelogo.png"><a class="font" href="https://www.binance.com/en" target="_black">Binanace</a></div>
        <div class="main_item" style="background-color: rgb(25, 25, 25);"><img src="@/assets/style/img/logo/bitgetlogo.png"><a class="font" href="https://www.bitget.com/en-GB/" target="_black">Bitget</a></div>
        <div class="main_item" style="background-color: rgb(8, 54, 135);"><img src="@/assets/style/img/logo/upbitlogo.png"><a class="font" href="https://www.upbit.com" target="_black">Upbit</a></div>
        <div class="main_item" style="background-color: rgb(4, 82, 253);"><img src="@/assets/style/img/logo/coinbase.png"><a class="font" href="https://www.coinbase.com" target="_black">Coinbase</a></div>
      </div>
      <router-link to="/register">
        <div class="main_item" id="main_join_caption"><p class="font">Now&nbsp;Join&nbsp;Us</p><img src="@/assets/style/img/icon/arrow_circle_right_FILL0_wght400_GRAD0_opsz48.png"></div>
      </router-link>
      <div class="main_logo"><img src="@/assets/style/img/icon/Leobit_2.png" alt="" style="width: 100%;height: 100%;"></div>
    </div>
    <div class="main_2">
    </div>
  </div>
</template>

<style scoped lang="scss">
$color:rgb(10, 141, 255);
.main_font {
  font-size: 40px;
  position: absolute;
  z-index: 1;
}
.main_caption {
  font-size: 30px;
}
.main_logobox {
  display: flex;
  flex-direction: low;
  gap: 10px;
  position: absolute;
  top: 350px;
  left: 35px;
}
.main_item {
  display: flex;
  align-items: center;
  width: auto;
  height: 46px;
  padding-right: 10px;
  border-radius: 10px;
  border: 2px solid white;
  left: 35px;

  a {
    font-weight: 500;
  }
}
.main_logo {
  width: 200px;
  height: 200px;
  position: absolute;
  bottom: 50px;
  right: 25px;
}
#main_title {
  top: 100px;
  left: 35px;
}
#main_caption {
  font-size: 30px;
  top: 300px;
  left: 35px;
}
#main_join_caption {
  width: auto;
  padding: 0 10px;
  background: none;
  justify-content: center;
  gap: 10px;
  border: none;
  position: absolute;
  top: 500px;
  left: 35px;
  border: none;
  transition: all 0.5s;
  background: $color;
  img {
    width: 30px;
    height: 30px;
  }
}
img {
  width: 42px;
  height: 42px;
  border-radius: 10px;
}
</style>
