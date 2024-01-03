<template>
  <v-card class="navbar">
    <v-layout>
      <v-navigation-drawer permanent location="left">
        <template v-slot:prepend>
          <v-list-item
            lines="two"
            prepend-avatar="https://randomuser.me/api/portraits/lego/3.jpg"
            subtitle="Phonebook"
          >
            <input type="text" placeholder="Name here" v-model="name" />
          </v-list-item>
        </template>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item
            link
            to="/"
            prepend-icon="mdi-phone"
            title="Contacts"
            value="Contacts"
          >
          </v-list-item>
          <v-list-item
            link
            to="/add"
            prepend-icon="mdi-plus"
            title="New contact"
            value="New contact"
          >
          </v-list-item>
        </v-list>
        <p class="desc">Blueprint interview project - 2023</p>
      </v-navigation-drawer>
      <v-main style="height: 100vh"></v-main>
    </v-layout>
  </v-card>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";

const name = ref("");

watch(name, (newVal) => {
  localStorage.setItem("name", newVal);
});

onMounted(() => {
  name.value = localStorage.getItem("name") || "";
});
</script>

<style scoped>
.navbar {
  margin-right: 2vw;
}

.desc {
  position: absolute;
  bottom: 5px;
  margin-left: 1vw;
  margin-right: 1vw;
  color: #757575ce;
  font-size: 12px;
}

input:not([type="radio"]):not([type="checkbox"]),
button {
  appearance: none;
  border: none;
  outline: none;
  background: none;
  cursor: initial;
}
</style>
