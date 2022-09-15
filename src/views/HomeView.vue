
<template>
  <TheHeader />
  <LandingScreen />
  <NewProduct />
</template>

<script>
import TheHeader from "../components/Layouts/TheHeader.vue";
import LandingScreen from "../components/LandingScreen.vue";
import NewProduct from "../views/NewProduct.vue";

export default {
  components: {
    TheHeader,
    LandingScreen,
    NewProduct,
  },
};
</script>
