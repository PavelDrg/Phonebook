<template>
  <div>
    <v-navigation-drawer
      permanent
      location="right"
      class="navbar-right"
      v-if="showRedSquare"
    >
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
  </div>
</template>

<script setup></script>

<style scoped>
.navbar-right {
  width: 25vw;
  margin: 2vh 0;
}
</style>
