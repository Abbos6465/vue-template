import {createApp} from 'vue';
import {createPinia} from 'pinia';
import App from '@/App.vue';
import router from '@/router';
import "@/assets/styles/app.scss";
import localization from "@/localization";

const app = createApp(App)

app
    .use(createPinia())
    .use(router)
    .use(localization)
    .mount('#app')
