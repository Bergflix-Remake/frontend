import PosterVue from './Poster.vue';
import { PlayIcon } from '@heroicons/vue/outline';

export default {
  title: '🧬 Molecules / Poster',
  component: PosterVue,
};

const Template = (args) => ({
  components: { PosterVue },
  setup() {
    return { args };
  },
  template: '<PosterVue v-bind="args"/>',
});

export const MoviePoster = Template.bind({});
MoviePoster.args = {
  loading: false,
  image:
    'https://api.bergflix.de/uploads/Jaeger_der_verlorenen_Handys_MINECRAFT_KURZFILM_89dac457f5.jpeg',
    icon: PlayIcon,
};
