import { createRouter, createWebHistory } from "vue-router";
import ConctactsView from "../views/ContactsView.vue";
import AddView from "../views/AddView.vue";
import PersonView from "../views/PersonView.vue";

const routes = [
  {
    path: "/",
    name: "contacts",
    component: ConctactsView,
  },
  {
    path: "/add",
    name: "add",
    component: AddView,
  },
  {
    path: "/person/:id",
    name: "person",
    component: PersonView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
