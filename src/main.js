import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import {store} from "@/assets/data/store";

let app = createApp(App)

app.use(router)
app.use(store).mount('#app')