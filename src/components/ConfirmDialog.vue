<template>
  <v-dialog v-model="dialog" width="auto">
    <v-card>
      <v-card-title class="text-h5"> Confirm Action </v-card-title>
      <v-card-text
        >You are about to add this contact to your phonebook. Are you
        sure?</v-card-text
      >
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="green-darken-1"
          variant="text"
          @click="emit('add-contact')"
        >
          Add
        </v-btn>
        <v-btn variant="text" @click="emit('close-dialog')"> Cancel </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { defineEmits } from "vue";

const emit = defineEmits(["close-dialog", "add-contact"]);
</script>

<style scoped></style>
