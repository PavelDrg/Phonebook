import ConctactsView from "../views/ContactsView.vue";
import AddView from "../views/AddView.vue";
import EditView from "../views/EditView.vue";
import PersonView from "../views/PersonView.vue";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
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
    path: "edit/",
    name: "edit",
    component: EditView,
  },
  {
    path: "/",
    name: "person",
    component: PersonView,
  },
];
