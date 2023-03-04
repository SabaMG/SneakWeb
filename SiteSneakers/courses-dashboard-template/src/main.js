import { createApp } from 'vue';
import App from './App.vue';
import Analitic from './Analitic.vue';
import Task from './Task.vue';
import Checkout from './Checkout.vue';
import Release from './Release.vue';
import Login from './Login.vue';
import SignIn from './SignIn.vue';
import "./assets/app.css";

createApp(App).mount('#app');
createApp(Analitic).mount('#analitic');
createApp(Task).mount('#task');
createApp(Checkout).mount('#checkout');
createApp(Release).mount('#release');
createApp(Login).mount('#login');
createApp(SignIn).mount('#signin');