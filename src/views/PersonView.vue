<template>
  <div class="contact-container">
    <h1>{{ contactData.first_name }} {{ contactData.last_name }}</h1>
    <p class="company">{{ contactData.company }}</p>
    <p class="phone">{{ contactData.phone_number }}</p>
    <p class="notes">{{ contactData.notes }}</p>
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
  const id = route.params.id;
  const contact = store.getters.getContactById(Number(id));
  contactData.value = contact;
};

init();
</script>

<style scoped>
.contact-container {
  max-width: 400px;
  margin: 10vh auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

h1 {
  font-size: 24px;
  margin-bottom: 8px;
}

.company {
  font-size: 18px;
  color: #333;
  margin-bottom: 4px;
}

.phone,
.notes {
  font-size: 16px;
  color: #666;
  margin-bottom: 4px;
}
</style>
