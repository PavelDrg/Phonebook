<template>
  <div class="page-container">
    <div>
      <div class="search_bars">
        <v-autocomplete
          v-model="search"
          :items="autocompleteItems"
          label="Search by name"
          placeholder="Start typing..."
          clearable
          @input="filterContacts"
        ></v-autocomplete>

        <v-select
          v-model="selectedCompany"
          :items="companyOptions"
          label="Select by company"
          clearable
          @change="filterByCompany"
        ></v-select>
      </div>
      <div class="sort_buttons">
        <v-btn color="primary">First name</v-btn>
        <v-btn color="primary">Last name</v-btn>
      </div>
      <div class="contacts-container">
        <v-card
          class="contacts-card"
          v-for="contact in filteredContacts"
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
    </div>
    <v-container class="navbar-right" v-if="selectedContact">
      <p class="details-bar-name">
        {{ selectedContact.first_name }} <br />
        {{ selectedContact.last_name }}
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
import { ref, computed } from "vue";
// import DetailsBar from "../components/DetailsBar.vue";

const store = useStore();
const contacts = store.state.contacts;

const search = ref("");
const selectedContact = ref(null);
const selectedCompany = ref(null);

function selectContact(contact) {
  selectedContact.value = contact;
}

function clearSelectedContact() {
  selectedContact.value = null;
}

// Autocomplete items (names)
const autocompleteItems = computed(() =>
  contacts.map((contact) => `${contact.first_name} ${contact.last_name}`)
);

const filteredContacts = computed(() => {
  let filtered = contacts;

  if (search.value) {
    const searchRegex = new RegExp(search.value, "i");
    filtered = filtered.filter(
      (contact) =>
        searchRegex.test(contact.first_name) ||
        searchRegex.test(contact.last_name)
    );
  }

  if (selectedCompany.value) {
    filtered = filtered.filter(
      (contact) => contact.company === selectedCompany.value
    );
  }

  return filtered;
});

const companyOptions = computed(() => {
  const uniqueCompanies = new Set(contacts.map((contact) => contact.company));
  return Array.from(uniqueCompanies);
});

function filterContacts() {
  // Update the filtered contacts based on search input
}

function filterByCompany() {
  // Update the filtered contacts based on selected company
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

.search_bars {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 70vw;
}
</style>
