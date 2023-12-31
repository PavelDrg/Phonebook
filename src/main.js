import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import store from "./store";
import router from "./router";
import "./main.css";

loadFonts();

createApp(App).use(router).use(store).use(vuetify).mount("#app");
