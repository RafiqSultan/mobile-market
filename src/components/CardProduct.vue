<template>
  <div class="container">
    <div class="cardProduct">
      <div class="img">
        <img :src="phoneImg" alt="phone" />
      </div>
      <div class="model-Rate">
        <h5>{{ phoneTitle }}</h5>
        <div class="star">
          <i class="fa-solid fa-star" v-for="star in 4"></i>
          <i class="fa-solid fa-star-half-stroke"></i>
        </div>
        <p>
          $<span id="price">{{ phonePrice }}</span>
        </p>
      </div>

      <div class="addCard">
        <div class="detailsCard">
          <span><i class="fa fa-cart-shopping"></i></span>
          <span><i class="fa-solid fa-heart"></i></span>
          <span><i class="fa-solid fa-heart"></i></span>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- Script js data -->
<script>
export default {
  props: ["phoneTitle", "phoneImg", "phonePrice"],
};
</script>

<style lang="scss" scoped>
// *Style Card Product
.cardProduct {
  max-height: 330px;
  width: 250px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 0 1.5px #111;
  border-radius: 10px;
  padding: 10px !important;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  text-align: center;
  overflow: hidden;

  //   Style img
  .img {
    width: 50%;
    max-height: 50%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
    }
  }
}
.model-Rate {
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0 0.5rem;
  h5 {
    font-weight: 500;
    margin: 0 !important;
  }
  p {
    color: #5943b5;
    margin: auto;
    font-size: 22px;
    font-weight: 500;
  }
  .star {
    .fa-star,
    .fa-star-half-stroke {
      color: #f0bb0d;
    }
  }
}

.addCard {
  height: 50px;
  width: 100%;
  border-radius: 10px;
  transition: all 0.5s;
  text-align: center;
  cursor: pointer;

  .detailsCard {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    span {
      height: 40px;
      width: 40px;
      border-radius: 50%;
      background-color: #97d2ec;
      display: flex;
      justify-content: center;
      align-items: center;
      .fa-heart {
        font-size: 23px;
      }
    }
  }
}
</style> 





