<script setup>
import { RouterLink, RouterView } from "vue-router";
import TheHeader from "./components/Layouts/TheHeader.vue";
import LandingScreen from "./components/LandingScreen.vue";
import CardProduct from "./components/CardProduct.vue";
import ProductsLine from "./views/productsLine.vue";
</script>

<template>
  <TheHeader></TheHeader>
  <LandingScreen></LandingScreen>
  <CardProduct></CardProduct>
  <ProductsLine></ProductsLine>

  <RouterView />
</template>



