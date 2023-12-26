<template>
  <v-dialog v-model="isDialogVisible" persistent width="1024">
    <v-card>
      <v-card-title>
        <span class="text-h5">Edit Contact</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-col>
            <v-form>
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
            </v-form>
          </v-col>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="blue-darken-1"
          variant="text"
          @click="emit('close-dialog')"
        >
          Close
        </v-btn>
        <v-btn
          color="blue-darken-1"
          variant="text"
          @click="emit('edit-contact', formData)"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { defineProps, defineEmits, ref, watch } from "vue";

const props = defineProps({
  dialog: { type: Boolean, required: false },
  contact: { type: Object, required: false },
});

const isDialogVisible = ref(props.dialog);
const formData = ref({
  first_name: props.contact ? props.contact.first_name : "",
  last_name: props.contact ? props.contact.last_name : "",
  company: props.contact ? props.contact.company : "",
  phone_number: props.contact ? props.contact.phone_number : "",
  notes: props.contact ? props.contact.notes : "",
  id: props.contact ? props.contact.id : -1,
});

watch(
  () => props.dialog,
  (newVal) => {
    isDialogVisible.value = newVal;
  }
);

//// Reset form data when dialog is closed
watch(
  () => isDialogVisible.value,
  (newVal, oldVal) => {
    if (newVal === false && oldVal === true) {
      formData.value = props.contact;
    }
  }
);

watch(
  () => props.contact,
  (newVal) => {
    formData.value = {
      first_name: newVal.first_name,
      last_name: newVal.last_name,
      company: newVal.company,
      phone_number: newVal.phone_number,
      notes: newVal.notes,
      id: newVal.id,
    };
  }
);

const emit = defineEmits(["close-dialog", "edit-contact"]);
</script>

<style scoped></style>
