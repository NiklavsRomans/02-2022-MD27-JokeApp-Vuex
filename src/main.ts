import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./styles/base.scss";
import "./styles/flexboxgrid.scss";
import "./styles/cssReset.scss";

createApp(App).use(store).use(router).mount("#app");
