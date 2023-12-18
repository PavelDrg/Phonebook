<template>
  <v-app>
    <div class="app">
      <NavigationBar />
      <div class="app-padding">
        <router-view />
      </div>
    </div>
  </v-app>
</template>

<script setup>
import NavigationBar from "./components/NavigationBar.vue";
</script>

<style>
.app {
  display: flex;
  flex-direction: row;
  min-height: 100vh;
}
.app-padding {
  width: 100%;
}
</style>
