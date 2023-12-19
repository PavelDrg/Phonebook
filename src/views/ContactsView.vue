<template>
  <div class="page-container">
    <div class="contacts-container">
      <v-card
        class="contacts-card"
        v-for="contact in contacts"
        :key="contact.id"
        @click="selectContact(contact)"
      >
        <v-card-title>
          {{ contact.first_name }} {{ contact.last_name }}
        </v-card-title>
        <v-card-subtitle>{{ contact.company }}</v-card-subtitle>
        <v-card-text
          >{{ contact.phone_number }} <br />
          {{ contact.notes }}</v-card-text
        >
      </v-card>
    </div>

    <v-container class="navbar-right" v-if="selectedContact">
      <p class="details-bar-name">
        {{ selectedContact.first_name }} {{ selectedContact.last_name }}
      </p>
      <v-divider></v-divider>
      <p class="details-bar-content">Company: {{ selectedContact.company }}</p>
      <p class="details-bar-content">
        Phone: {{ selectedContact.phone_number }}
      </p>
      <p class="details-bar-content">Notes: {{ selectedContact.notes }}</p>
      <v-btn class="details-bar-button" color="primary">Call</v-btn>
      <v-btn class="details-bar-button" color="primary" to="/edit">Edit</v-btn>
      <v-btn class="details-bar-button" color="primary" to="/person"
        >View</v-btn
      >
      <v-btn
        class="details-bar-button"
        color="primary"
        @click="clearSelectedContact"
        >Close</v-btn
      >
    </v-container>
    <v-main style="height: 100vh"></v-main>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { ref } from "vue";
// import DetailsBar from "../components/DetailsBar.vue";

const store = useStore();
const contacts = store.state.contacts;

const selectedContact = ref(null);

function selectContact(contact) {
  selectedContact.value = contact;
}

function clearSelectedContact() {
  selectedContact.value = null;
}
</script>

<style scoped>
.contacts-card {
  width: 70vw;
  margin: 2vh 0;
}

.page-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.contacts-container {
  display: flex;
  flex-direction: column;
}

.navbar-right {
  width: 15vw;
  margin-left: auto;
  margin-right: 0;
  display: flex;
  flex-direction: column;
}

.details-bar-name {
  margin: 2vh 1vw;
  font-size: 3rem;
}

.details-bar-content {
  margin: 2vh 1vw;
  font-size: 1.2rem;
}

.details-bar-button {
  margin: 2vh 1vw;
}
</style>
