<template>
  <div>
    <h1>{{ contactData.first_name }} {{ contactData.last_name }}</h1>
    <p>{{ contactData.company }}</p>
    <p>{{ contactData.phone_number }}</p>
    <p>{{ contactData.notes }}</p>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { ref } from "vue";

const store = useStore();
const route = useRoute();

const contactData = ref({});

const init = () => {
  console.log("init");
  console.log(route.params);
  const id = route.params.id;
  console.log("id", id);
  const contact = store.getters.getContactById(Number(id));
  console.log("contact", contact);
  contactData.value = contact;
};

init();
</script>

<style scoped></style>
