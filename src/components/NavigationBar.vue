<template>
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
</template>

<script setup></script>
