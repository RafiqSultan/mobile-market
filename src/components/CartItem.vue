<template>
  <div class="container">
    <div class="cart">
      <div class="row">
        <div class="cartItem">
          <div class="img">
            <img :src="phoneImg" alt="imgcart" />
          </div>

          <div class="details">
            <sapn>{{ phoneModel }}</sapn>
            <span>${{ phonePrice }}</span>
          </div>
        </div>
        <!-- Btn Checkout -->
        <div class="btn_checkout">
          <a href=""> Checkout</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["phoneModel", "phoneImg", "phonePrice"],
};
</script>

<style scoped>
.cart {
  width: 250px;
  max-height: 400px;
  position: absolute;
  top: 4rem !important;
  right: 6%;
  background-color: #fff;
  box-shadow: 0 0 5px #000;
  z-index: 1000;
  padding: 0.1rem;
  overflow: hidden !important;
  padding-bottom: 0 !important;
}
.cartItem {
  width: 90%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 0 0 2px #000;
  margin: auto;
  border: none;
  margin-bottom: 5px !important;
}
.cartItem .img {
  width: 30%;
  height: 70px;
  overflow: hidden;
}
.cartItem .img img {
  width: 100%;
  height: 100%;
}
.cartItem .details {
  color: #000;
  margin: 0 10px;
}
.btn_checkout {
  background-color: blue;
  text-align: center;
  padding: 0.3rem;
}
.btn_checkout a {
  color: #fff;
}
</style>