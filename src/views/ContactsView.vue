<template>
  <div class="page-container">
    <div>
      <div class="search_bars">
        <v-text-field
          v-model="search"
          label="Search by name"
          placeholder="Start typing..."
          clearable
          @change="handleInputChange($event)"
        ></v-text-field>
        <v-select
          v-model="selectedCompany"
          :items="companyOptions"
          label="Select by company"
          clearable
          @change="filterByCompany"
        ></v-select>
      </div>
      <div class="sort_buttons">
        <v-btn
          class="sort"
          variant="outlined"
          @click="changeSortingDirrection('firstName')"
          >First name</v-btn
        >
        <v-btn
          class="sort"
          variant="outlined"
          @click="changeSortingDirrection('lastName')"
          >Last name</v-btn
        >
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
    <v-navigation-drawer
      location="right"
      class="navbar-right"
      v-if="selectedContact"
    >
      <div class="d-flex">
        <p class="details-bar-name">
          {{ selectedContact.first_name }} <br />
          {{ selectedContact.last_name }}
        </p>
        <v-btn
          class="details-bar-button close"
          color="transparent"
          elevation="0"
          @click="clearSelectedContact"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
      <v-divider></v-divider>
      <p class="details-bar-content">Company: {{ selectedContact.company }}</p>
      <p class="details-bar-content">
        Phone: {{ selectedContact.phone_number }}
      </p>
      <p class="details-bar-content">Notes: {{ selectedContact.notes }}</p>
      <div class="details-bar-buttons">
        <v-btn class="details-bar-button" color="primary">Call</v-btn>
        <v-btn
          class="details-bar-button"
          color="primary"
          @click="openEditDialog"
          >Edit</v-btn
        >
        <v-btn
          class="details-bar-button"
          color="primary"
          @click="navigateContact(selectedContact.id)"
          >View</v-btn
        >
      </div>
    </v-navigation-drawer>
    <v-main style="height: 100vh"></v-main>
    <EditDialog
      :dialog="dialogRef"
      @close-dialog="dialogRef = false"
      @edit-contact="editContact"
      :contact="selectedContact"
    />
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { ref, computed } from "vue";
import EditDialog from "@/components/EditDialog.vue";

const store = useStore();
const router = useRouter();
const contacts = store.state.contacts;

const search = ref("");
const selectedContact = ref(null);
const selectedCompany = ref(null);
const firstNameSortDirection = ref(0); // I chose the following: 0 = unsorted, 1 = ascending, 2 = descending
const lastNameSortDirection = ref(0);
const dialogRef = ref(false);

const changeSortingDirrection = (filter) => {
  if (filter === "firstName") {
    firstNameSortDirection.value = (firstNameSortDirection.value + 1) % 3;
    if (firstNameSortDirection.value !== 0) lastNameSortDirection.value = 0;
  }
  if (filter === "lastName") {
    lastNameSortDirection.value = (lastNameSortDirection.value + 1) % 3;
    if (lastNameSortDirection.value !== 0) firstNameSortDirection.value = 0;
  }
};

const selectContact = (contact) => {
  selectedContact.value = contact;
};

const clearSelectedContact = () => {
  selectedContact.value = null;
};

// Autocomplete items (names)
// const autocompleteItems = computed(() =>
//   contacts.map((contact) => `${contact.first_name} ${contact.last_name}`)
// );

const filteredContacts = computed(() => {
  let filtered = contacts;

  if (search.value) {
    const searchRegex = new RegExp(search.value, "i");
    filtered = filtered.filter((contact) => {
      searchRegex.lastIndex = 1;
      let match1 = searchRegex.test(contact.first_name.trim());

      searchRegex.lastIndex = 1;
      let match2 = searchRegex.test(contact.last_name.trim());

      return match1 || match2;
    });
  }

  if (selectedCompany.value) {
    filtered = filtered.filter(
      (contact) => contact.company === selectedCompany.value
    );
  }

  return filtered.sort((a, b) => {
    if (lastNameSortDirection.value === 0) {
      switch (firstNameSortDirection.value) {
        case 1:
          return (
            a.first_name.toLowerCase().charCodeAt(0) -
            b.first_name.toLowerCase().charCodeAt(0)
          );
        case 2:
          return (
            b.first_name.toLowerCase().charCodeAt(0) -
            a.first_name.toLowerCase().charCodeAt(0)
          );
      }
    } else {
      switch (lastNameSortDirection.value) {
        case 1:
          return (
            a.last_name.toLowerCase().charCodeAt(0) -
            b.last_name.toLowerCase().charCodeAt(0)
          );
        case 2:
          return (
            b.last_name.toLowerCase().charCodeAt(0) -
            a.last_name.toLowerCase().charCodeAt(0)
          );
      }
    }
    return 0;
  });
});

const companyOptions = computed(() => {
  const uniqueCompanies = new Set(contacts.map((contact) => contact.company));
  return Array.from(uniqueCompanies);
});

const handleInputChange = (event) => {
  search.value = event.target.value;
};

const filterByCompany = () => {
  // Update the filtered contacts based on selected company
};

const openEditDialog = () => {
  dialogRef.value = true;
};

const editContact = (contact) => {
  store.commit("editContact", contact);
  dialogRef.value = false;
};

const navigateContact = (id) => {
  console.log(id);
  let stringId = String(id);
  router.push({ name: "person", params: { id: stringId } });
};
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
  width: 15vw !important;
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

.close {
  position: absolute;
  top: -8px;
  right: -8px;
  margin: 4px !important;
}

.details-bar-buttons {
  display: flex;
  flex-direction: column;
}

.search_bars {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 70vw;
}

.sort {
  margin-right: 0.25vw;
}
</style>
