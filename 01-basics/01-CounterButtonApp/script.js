import { createApp } from './vendor/vue.esm-browser.js';

const myApp = createApp({
  data() {
    return {
      count: 0,
    };
  },
});

myApp.mount('#app');
