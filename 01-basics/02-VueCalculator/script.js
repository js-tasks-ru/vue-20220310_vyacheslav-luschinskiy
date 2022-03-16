import { createApp } from './vendor/vue.esm-browser.js';

const myApp = createApp({
  data() {
    return {
      firstNumber: 0,
      secondNumber: 0,
      operator: 'sum',
    };
  },
  computed: {
    calculate() {
      if (this.operator === 'sum') {
        return this.firstNumber + this.secondNumber;
      }
      if (this.operator === 'subtract') {
        return this.firstNumber - this.secondNumber;
      }
      if (this.operator === 'multiply') {
        return this.firstNumber * this.secondNumber;
      }
      if (this.operator === 'divide') {
        return this.firstNumber / this.secondNumber;
      }
      return 0;
    },
  },
});

myApp.mount('#app');
