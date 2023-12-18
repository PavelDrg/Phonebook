import { createStore } from "vuex";

export default createStore({
  state: {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        phone: "1234567890",
        email: "ana@gmail.com",
        company: "Google",
      },
      {
        id: 2,
        name: "Jzz",
        phone: "1zzz0",
        email: "ana@gmzzzcom",
        company: "Facebook",
      },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
