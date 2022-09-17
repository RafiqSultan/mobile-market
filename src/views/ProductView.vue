<template>
  <TheHeader />
  <div class="container">
    <!-- Samsung Product -->
    <div class="row">
      <div class="col-md-12">
        <div class="title">
          <img
            src="../assets/samsung-logo.png"
            alt="samsung"
            width="400"
            height="120"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="samsungCard">
            <CardProduct
              v-for="phone in samsung"
              :key="phone.id"
              :phoneTitle="phone.model"
              :phonePrice="phone.price"
              :phoneImg="phone.image"
            />
          </div>
        </div>
      </div>
      <!-- Apple Product -->
      <div class="row">
        <div class="col-md-12">
          <div class="title">
            <img
              src="../assets/apple_logo.png"
              alt="samsung"
              width="350"
              height="120"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="appleCard">
            <CardProduct
              v-for="phone in apple"
              :key="phone.id"
              :phoneTitle="phone.model"
              :phonePrice="phone.price"
              :phoneImg="phone.image"
            />
          </div>
        </div>
      </div>
      <!-- Handfree Product  -->
      <div class="row">
        <div class="col-md-12">
          <div class="title handfree">
            <img
              src="../assets/handsfree.png"
              alt="samsung"
              width="200"
              height="120"
            />
            <h5>HandsFree</h5>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="appleCard">
            <CardProduct
              v-for="handfree in handsfree"
              :key="handfree.id"
              :phoneTitle="handfree.model"
              :phonePrice="handfree.price"
              :phoneImg="handfree.image"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import TheHeader from "../components/Layouts/TheHeader.vue";
import CardProduct from "../components/CardProduct.vue";
export default {
  components: { TheHeader, CardProduct },
  computed: {
    samsung() {
      return this.$store.state.samsung;
    },
    apple() {
      return this.$store.state.apple;
    },
    handsfree() {
      return this.$store.state.handsfree;
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  display: flex;
  text-align: center;
  justify-content: center;
  margin-top: 6rem;
  text-align: center;
  margin-bottom: 2rem;

  h5 {
    width: 150px;
    font-size: 3rem;
    font-weight: bold;
    padding: 1rem 0;
    margin: auto 0;
  }
}
.samsungCard,
.appleCard {
  display: grid !important;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1rem;
}
</style>