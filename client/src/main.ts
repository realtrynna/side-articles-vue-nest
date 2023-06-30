import { createApp } from 'vue'
import { createPinia } from "pinia";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import './style.css'
import App from './App.vue'
import router from "./routes";

const app = createApp(App);

app.config.errorHandler = (err, instance, info) => console.warn("error occurred", err);

createApp(App)
    .use(router)
    .use(createPinia())
    .mount("#app");

app.use(createPinia());
