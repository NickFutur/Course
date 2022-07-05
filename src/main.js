import { createApp } from 'vue'
import App from './App'
import components from '@/components/UI';
import router from "@/router/router";
import directives from '@/directives';
import store from '@/store';

const app = createApp(App)



app
    .use(router)
    .use(store)
    .mount('#app');