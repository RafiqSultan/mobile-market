<template>
  <div class="container">
    <div class="card">
      <div class="img">
        <img
          src="https://m.media-amazon.com/images/I/61XZQXFQeVL._AC_SL1500_.jpg"
          alt="mobile"
        />
      </div>

      <div class="bottom-div">
        <h3>Fanbyn</h3>
        <div class="top-div">
          <span><i class="fa-solid fa-heart"></i></span>
        </div>
      </div>
      <div class="star">
        <i class="fa-solid fa-star" v-for="star in 4" :key="satr"></i>
        <i class="fa-solid fa-star-half-stroke"></i>
      </div>

      <div class="last-section">
        <div class="last">
          <button><i class="fa-solid fa-plus"></i></button>
        </div>

        <p>$<span id="price">200</span></p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  height: 420px;
  width: 250px;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
  font-family: "Poppins", sans-serif;
  overflow: hidden;
  margin-bottom: 100px;

  //   Style img
  .img {
    width: 100%;
    height: 65%;
    padding: 0.2rem;

    img {
      width: 100%;
      height: 100%;
    }
  }
  .bottom-div {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    .bottom-div h3 {
      font-weight: 700;
    }
    .top-div span {
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
  .star {
    .fa-star,
    .fa-star-half-stroke {
      color: #f0bb0d;
    }
  }
  .last-section {
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

    .last {
      padding: 0.5rem;
      button {
        width: 40px !important;
        height: 40px;
        border-radius: 10px;
        text-align: center;
        line-height: 20px;

        .fa-plus {
          font-size: 20px !important;
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
}
</style> scoped>





