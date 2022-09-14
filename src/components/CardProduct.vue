<template>
  <div class="container">
    <div class="card">
      <div class="details">
        <span><i class="fa-solid fa-heart"></i></span>
        <span><i class="fa-solid fa-heart"></i></span>
      </div>

      <div class="img">
        <img
          src="https://m.media-amazon.com/images/I/61XZQXFQeVL._AC_SL1500_.jpg"
          alt="mobile"
        />
      </div>

      <div class="model-Rate">
        <h3>Fanbyn</h3>
        <div class="star">
          <i class="fa-solid fa-star" v-for="star in 4"></i>
          <i class="fa-solid fa-star-half-stroke"></i>
        </div>
      </div>

      <div class="addCard">
        <div class="addToCart">
          <button><i class="fa-solid fa-plus"></i></button>
        </div>
        <p>$<span id="price">200</span></p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// *Style Card Product
.card {
  height: 420px;
  width: 250px;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  margin-bottom: 100px;

  //   Style img
  .img {
    width: 100%;
    height: 60%;
    padding: 0.5rem;

    img {
      width: 100%;
      height: 100%;
    }
  }
  .details {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    span {
      height: 30px;
      width: 30px;
      border-radius: 50%;
      background-color: #97d2ec;
      display: flex;
      justify-content: center;
      align-items: center;
      .fa-heart {
        font-size: 20px;
      }
    }
  }
  .model-Rate {
    margin-top: 8px;
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 0 0.5rem;
    h3 {
      font-weight: 500;
    }
    .star {
      .fa-star,
      .fa-star-half-stroke {
        color: #f0bb0d;
      }
    }
  }
}

.addCard {
  margin-top: 10px;
  height: 50px;
  width: 100%;
  background-color: #132228;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.5s;
  text-align: center;
  cursor: pointer;

  .addToCart {
    padding: 0.5rem;
    button {
      width: 40px !important;
      height: 40px;
      border-radius: 10px;
      text-align: center;

      .fa-plus {
        font-size: 25px !important;
        margin-top: auto;
      }
    }
  }

  p {
    color: #f6f6f6;
    margin: auto;
    font-size: 20px;
  }

  &:hover {
    background-color: black;
  }

  .last button:hover {
    background-color: #3e3535;
  }
}
</style> scoped>





