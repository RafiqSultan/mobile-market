<script setup>
import { RouterLink, RouterView } from "vue-router";
import TheHeader from "./components/Layouts/TheHeader.vue";
import HomeView from "./views/HomeView.vue";
</script>

<template>
  <TheHeader></TheHeader>
  <HomeView />
  <RouterView />
</template>



