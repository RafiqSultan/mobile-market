<template>
  <TheHeader />
  <div class="container checkout px-4 py-5 mx-auto">
    <!-- Cart Order Buy -->
    <div class="row cartItem">
      <div class="col-lg-3 col-md-2 col-sm-2 col-3">
        <div class="img">
          <img
            src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71HN4P-pd5L._AC_UY218_.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="col-lg-2 col-md-2 col-sm-2 col-4">
        <h5 class="model">model</h5>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-4 col-5">
        <div class="quantity">
          <i class="fas fa-circle-minus"></i>
          <span>5</span>
          <i class="fas fa-circle-plus"></i>
        </div>
      </div>
      <div class="col-lg-2 col-md-2 col-sm-2 col-6">
        <h5 class="price"><span>$</span>price</h5>
      </div>

      <div class="trash col-lg-2 col-md-2 col-sm-2 col-12">
        <i class="fas fa-trash"></i>
      </div>
    </div>
    <!-- Pyment Method -->

    <div class="row justify-content-center">
      <div class="col-lg-12">
        <div class="card">
          <div class="row">
            <div class="col-lg-3 radio-group">
              <div class="row d-flex px-3 radio">
                <img
                  class="pay"
                  src="https://thumbs.dreamstime.com/z/credit-card-icon-vector-isolated-white-background-your-web-mobile-app-design-credit-card-logo-concept-credit-card-icon-134165664.jpg"
                />
                <p class="my-auto">Credit Card</p>
              </div>
              <div class="row d-flex px-3 radio gray">
                <img
                  class="pay"
                  src="https://icon-library.com/images/debit-card-icon/debit-card-icon-4.jpg"
                />
                <p class="my-auto">Debit Card</p>
              </div>
              <div class="row d-flex px-3 radio gray mb-3">
                <img
                  class="pay"
                  src="https://images.squarespace-cdn.com/content/v1/5e1c37cf9b245f360f07ee55/1620883887546-H8C6WEA322YT6DUZJ4TL/EmailMidImage_500x500_A+-+Shopper%402x.png"
                />
                <p class="my-auto">PayPal</p>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="row px-2">
                <div class="form-group col-md-6">
                  <label class="form-control-label">Name on Card</label>
                  <input
                    type="text"
                    id="cname"
                    name="cname"
                    placeholder="Johnny Doe"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label class="form-control-label">Card Number</label>
                  <input
                    type="text"
                    id="cnum"
                    name="cnum"
                    placeholder="1111 2222 3333 4444"
                  />
                </div>
              </div>
              <div class="row px-2">
                <div class="form-group col-md-6">
                  <label class="form-control-label">Expiration Date</label>
                  <input
                    type="text"
                    id="exp"
                    name="exp"
                    placeholder="MM/YYYY"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label class="form-control-label">CVV</label>
                  <input type="text" id="cvv" name="cvv" placeholder="***" />
                </div>
              </div>
            </div>
            <div class="col-lg-4 mt-2">
              <div class="row d-flex justify-content-between px-4">
                <p class="mb-1 text-left">Subtotal</p>
                <h6 class="mb-1 text-right">$23.49</h6>
              </div>
              <div class="row d-flex justify-content-between px-4">
                <p class="mb-1 text-left">discount Code</p>
                <h6 class="mb-1 text-right">$2.99</h6>
              </div>
              <div class="row d-flex justify-content-between px-4" id="tax">
                <p class="mb-1 text-left">Total Price :</p>
                <h6 class="mb-1 text-right">$26.48</h6>
              </div>
              <button class="btn-block btn-blue">
                <span>
                  <span id="checkout">Checkout</span>
                  <span id="check-amt">$26.48</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <TheFooter />
</template>
<script>
import TheFooter from "../components/Layouts/TheFooter.vue";
import TheHeader from "../components/Layouts/TheHeader.vue";
export default { components: { TheFooter, TheHeader } };
</script>
  
<style scoped>
.checkout {
  margin-top: 120px;
}
/* Style For Cart Order */
.cartItem {
  width: 100%;
  padding: 0.8rem;
  background-color: #fff;
  box-shadow: 0px 2px 2px 1px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin: 0;
  border: none;
  font-size: 20px;
}
.img {
  height: 50px;
  overflow: hidden;
  text-align: center;
}
.img img {
  height: 100%;
}
.quantity {
  text-align: center;
  font-size: 20px;
}
.quantity span {
  margin: 0 20px;
}
.quantity .fa-circle-minus,
.quantity .fa-circle-plus {
  color: #311b92;
}

.price span {
  color: #311b92;
}
.fa-trash {
  color: #f00;
}
/* Style For Pyment Method */
.card {
  margin: 40px 0px;
  padding: 40px 50px;
  border-radius: 20px;
  border: none;
  box-shadow: 1px 5px 10px 1px rgba(0, 0, 0, 0.2);
}

input,
textarea {
  background-color: #f3e5f5;
  padding: 8px 15px 8px 15px;
  width: 100%;
  border-radius: 5px !important;
  box-sizing: border-box;
  border: 1px solid #f3e5f5;
  font-size: 15px !important;
  color: #000 !important;
  font-weight: 300;
}

input:focus,
textarea:focus {
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  border: 1px solid #9fa8da;
  outline-width: 0;
  font-weight: 400;
}

button:focus {
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  outline-width: 0;
}

.pay {
  width: 80px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #673ab7;
  margin: 10px 20px 10px 0px;
  cursor: pointer;
  box-shadow: 1px 5px 10px 1px rgba(0, 0, 0, 0.2);
}

.gray {
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  filter: grayscale(100%);
  color: #e0e0e0;
}

.gray .pay {
  box-shadow: none;
}

#tax {
  border-top: 1px lightgray solid;
  margin-top: 10px;
  padding-top: 10px;
}

.btn-blue {
  border: none;
  border-radius: 10px;
  background-color: #673ab7;
  color: #fff;
  padding: 8px 15px;
  margin: 20px 0px;
  cursor: pointer;
}

.btn-blue:hover {
  background-color: #311b92;
  color: #fff;
}

#checkout {
  float: left;
}

#check-amt {
  float: right;
}

@media screen and (max-width: 768px) {
  .book,
  .book-img {
    width: 100px;
    height: 150px;
  }

  .card {
    padding-left: 15px;
    padding-right: 15px;
  }

  .mob-text {
    font-size: 13px;
  }

  .pad-left {
    padding-left: 20px;
  }
}
@media screen and (max-width: 576px) {
  .trash {
    text-align: right;
  }
}
</style>