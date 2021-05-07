import "@/assets/styles/default.less";
import "highlight.js/styles/hybrid.css";
import { createApp } from "vue";
import App from "./App";
import router from "./router";
import store from "./store";

const app = createApp(App).use(store).use(router);

app.mount("#app");
