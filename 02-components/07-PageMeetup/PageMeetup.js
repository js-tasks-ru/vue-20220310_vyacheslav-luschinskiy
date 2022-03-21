import { defineComponent } from './vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import MeetupView from './components/MeetupView.js';
import { fetchMeetupById } from './meetupService.js';

export default defineComponent({
  name: 'PageMeetup',

  components: {
    UiAlert,
    UiContainer,
    MeetupView,
  },

  props: {
    meetupId: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      meetup: null,
      isLoading: false,
      error: null,
    };
  },
  watch: {
    meetupId: {
      handler(meetupId) {
        this.getMeetup();
      },
      immediate: true,
    },
  },
  methods: {
    async getMeetup() {
      try {
        this.isLoading = true;
        this.error = null;
        this.meetup = null;
        this.meetup = await fetchMeetupById(this.meetupId);
        this.isLoading = false;
      } catch (e) {
        console.log(e.message);
        this.isLoading = false;
        this.error = e.message;
      }
    },
  },

  template: `
    <div class="page-meetup">
    <meetup-view v-if="meetup" :meetup="meetup"></meetup-view>

      <ui-container v-if="isLoading">
        <ui-alert>Загрузка...</ui-alert>
      </ui-container>

      <ui-container v-if="error">
        <ui-alert>{{error}}</ui-alert>
      </ui-container>
    </div>`,
});
