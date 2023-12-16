<template>
  <v-app>
    <NavigationBar />
    <div class="app-padding">
      <router-view />
    </div>
  </v-app>
</template>

<script setup>
import NavigationBar from "./components/NavigationBar.vue";
</script>

<style>
.app-padding {
  padding-top: 4rem;
}
</style>
