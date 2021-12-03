import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue3 from 'bootstrap-vue-3'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import Notifications from '@kyvg/vue3-notification'


createApp(App).use(BootstrapVue3).use(Notifications).use(store).use(router).mount('#app')