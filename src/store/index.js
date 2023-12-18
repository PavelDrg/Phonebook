import { createStore } from "vuex";

export default createStore({
  state: {
    contacts: [
      {
        id: 1,
        first_name: "John",
        last_name: "Smith",
        company: "Google",
        phone_number: "0778445893",
        notes: "Accountant",
      },
      {
        id: 1,
        first_name: "Alexandru",
        last_name: "Lacatusu",
        company: "Blueprint",
        phone_number: "0734567892",
        notes: "Lawyer",
      },
      {
        id: 1,
        first_name: "Ion",
        last_name: "Popescu",
        company: "Amazon",
        phone_number: "+40778543691",
        notes: "De la facultate",
      },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
