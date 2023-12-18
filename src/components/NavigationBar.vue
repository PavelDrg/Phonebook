<!-- <template>
  <div>
    <v-app-bar app color="primary">
      <v-toolbar-title>Phonebook</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn-group>
        <v-btn class="navbar--button" to="/">CONTACTS</v-btn>
        <v-btn class="navbar--button" to="/add">ADD</v-btn>
        <v-btn class="navbar--button" to="/edit">EDIT</v-btn>
        <v-btn class="navbar--button" to="/person">VIEW PERSON</v-btn>
      </v-btn-group>
    </v-app-bar>
  </div>
</template> -->

<template>
  <v-card class="navbar">
    <v-layout>
      <v-navigation-drawer permanent location="left">
        <template v-slot:prepend>
          <v-list-item
            lines="two"
            prepend-avatar="https://randomuser.me/api/portraits/lego/3.jpg"
            title="Pavel Dragan"
            subtitle="Logged in"
          ></v-list-item>
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
          <v-list-item
            link
            to="/edit"
            prepend-icon="mdi-pencil"
            title="Edit contact"
            value="Edit contact"
          >
          </v-list-item>
          <v-list-item
            link
            to="/person"
            prepend-icon="mdi-account"
            title="View contact"
            value="View contact"
          >
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 100vh"></v-main>
    </v-layout>
  </v-card>
</template>

<script setup></script>

<style scoped>
.navbar {
  margin-right: 2vw;
}
</style>
