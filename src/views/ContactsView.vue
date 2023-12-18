<template>
  <div>
    <h1>CONTACTS</h1>
    <div v-for="contact in contacts" :key="contact.id">
      <p>{{ contact.name }}</p>
      <p>{{ contact.email }}</p>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
const store = useStore();
const contacts = store.state.contacts;
</script>

<style scoped></style>
