<script setup>
import { RouterLink, RouterView } from "vue-router";
import TheHeader from "./components/Layouts/TheHeader.vue";
import LandingScreen from "./components/LandingScreen.vue";
</script>

<template>
  <TheHeader></TheHeader>
  <LandingScreen></LandingScreen>
  <RouterView />
</template>

