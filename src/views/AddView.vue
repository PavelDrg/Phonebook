<template>
  <div>
    <v-col>
      <h1>Add Contact</h1>
      <v-form @submit.prevent="handleSubmit">
        <v-text-field
          v-model="formData.first_name"
          variant="outlined"
          label="First Name"
        ></v-text-field>
        <v-text-field
          v-model="formData.last_name"
          variant="outlined"
          label="Last Name"
        ></v-text-field>
        <v-text-field
          v-model="formData.company"
          variant="outlined"
          label="Company"
        ></v-text-field>
        <v-text-field
          v-model="formData.phone_number"
          variant="outlined"
          label="Phone Number"
        ></v-text-field>
        <v-text-field
          v-model="formData.notes"
          variant="outlined"
          label="Notes"
        ></v-text-field>
        <v-btn color="primary" type="submit">Add Contact</v-btn>
      </v-form>
    </v-col>
    <ConfirmDialog
      v-model="dialog"
      @close-dialog="dialog = false"
      @add-contact="addContact"
    />
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { ref } from "vue";
import ConfirmDialog from "../components/ConfirmDialog.vue";

const store = useStore();

const dialog = ref(false);

const formData = ref({
  first_name: "",
  last_name: "",
  company: "",
  phone_number: "",
  notes: "",
});

const addContact = () => {
  console.log("added form data", formData.value);
  store.dispatch("addContact", {
    ...formData.value,
    id: store.state.contacts.length + 1,
  });
  dialog.value = false;
};

const handleSubmit = () => {
  dialog.value = true;
};
</script>

<style scoped></style>
