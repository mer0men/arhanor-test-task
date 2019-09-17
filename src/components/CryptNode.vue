<template>
  <div class="cryptoNode">
    <img :src="`https://www.cryptocompare.com${crypt.CoinInfo.ImageUrl}`" width="100%" :alt="crypt.CoinInfo.Name">
    <div class="info">
      <p class="title">{{crypt.CoinInfo.FullName}}</p>
      <p>Price: {{crypt.DISPLAY.RUB.PRICE}}</p>
      <p>Marcket cap: {{crypt.DISPLAY.RUB.MKTCAP}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    crypt: {
      required: true
    }
  }
}
</script>

<style lang="scss">
.cryptoNode {
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  margin: 1%;
  width: 16%;
  min-width: 150px;
  border-radius: 5px;
  padding: 1%;

  img {
    width: 100%;
    border-radius: 5px;
  }

  .info {
    padding: 3%;

    .title {
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 25px;
      white-space: normal;
    }

    p {
      margin: 0;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 16px;
      white-space: nowrap;
    }
  }
}
</style>
