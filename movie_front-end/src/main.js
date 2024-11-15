import { createApp } from "vue";
import App from "@/companes/app/App.vue";
import uiCompanents from "./uiCompanents";
const app = createApp(App);
uiCompanents.map((companet) => {
  app.component(companet.name, companet);
});
app.mount("#app");
