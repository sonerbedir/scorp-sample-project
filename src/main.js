import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/assets/app.css";
import appHeader from "@/components/appShared/appHeader"
import appFooter from "@/components/appShared/appFooter"
import { i18n } from './localization';

createApp(App)
.use(store)
.use(router)
.use('appHeader', appHeader)
.use('appFooter', appFooter)
.use(i18n)
.mount('#app');
