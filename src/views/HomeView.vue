
<template>
  <LandingScreen />
  <NewProduct />
</template>

<script>
import NewProduct from "./NewProduct.vue";
import LandingScreen from "../components/LandingScreen.vue";

export default {
  components: {
    NewProduct,
    LandingScreen,
  },
};
</script>
