import { createApp } from 'vue'
import App from './App.vue'
import Vue from 'vue';
import LangFlag from 'vue-lang-code-flags';

Vue.component('lang-flag', LangFlag);

createApp(App).mount('#app')
