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
        id: 2,
        first_name: "Alexandru",
        last_name: "Lacatusu",
        company: "Blueprint",
        phone_number: "0734567892",
        notes: "Lawyer",
      },
      {
        id: 3,
        first_name: "Ion",
        last_name: "Popescu",
        company: "Amazon",
        phone_number: "+40778543691",
        notes: "De la facultate",
      },
    ],
  },
  getters: {},
  mutations: {
    addContact(state, contact) {
      state.contacts.push(contact);
    },
    deleteContact(state, contact) {
      state.contacts.splice(contact, 1);
    },
    editContact(state, contact) {
      console.log(contact);
      if (contact.id !== -1) {
        console.log(contact.id);
        state.contacts[contact.id - 1] = contact;
      }
    },
  },
  actions: {
    addContact(context, contact) {
      context.commit("addContact", contact);
    },
    deleteContact(context, id) {
      const contact = context.state.contacts.find(
        (contact) => contact.id === id
      );
      context.commit("deleteContact", contact);
    },
  },
  modules: {},
});
