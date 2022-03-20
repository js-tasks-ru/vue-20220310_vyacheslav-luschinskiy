import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',
  props: ['count'],

  // Компонент должен иметь входной параметр

  // Шаблон лучше держать максимально простым, а логику выносить в методы

  // Шаблон потребуется отредактировать
  template: `<button type="button" @click="$emit('update:count', this.count  + 1)">{{count}}</button>`,
});
