import { createApp } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

const myApp = createApp({
  data() {
    return {
      meetupId: 1,
      title: '',
    };
  },
  watch: {
    meetupId: {
      handler(newMeetupId) {
        this.getData();
      },
      immediate: true,
    },
  },
  methods: {
    async getData() {
      const { title } = await fetchMeetupById(this.meetupId);
      this.title = title;
    },
  },
});

myApp.mount('#app');
