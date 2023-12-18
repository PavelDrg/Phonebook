<template>
  <v-card class="contacts-card" v-for="contact in contacts" :key="contact.id">
    <v-card-title>
      {{ contact.first_name }} {{ contact.last_name }}
    </v-card-title>
    <v-card-subtitle>{{ contact.company }}</v-card-subtitle>
    <v-card-text
      >{{ contact.phone_number }} <br />
      {{ contact.notes }}</v-card-text
    >
  </v-card>
</template>

<script setup>
import { useStore } from "vuex";
const store = useStore();
const contacts = store.state.contacts;
</script>

<style scoped>
.contacts-card {
  width: 65vw;
  margin: 2vh 0;
}
</style>
