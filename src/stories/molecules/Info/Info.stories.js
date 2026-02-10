import Component from './Info.vue';
import { PlayIcon } from '@heroicons/vue/solid';
import { ChevronDoubleRightIcon } from '@heroicons/vue/outline';

export default {
  title: '🧬 Molecules / MovieInfo',
  component: Component,
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: `<Component class="max-w-md" v-bind="args" />`,
});

export const Movie = Template.bind({});
Movie.args = {
  year: 2022,
  age: 16,
  episodes: 1,
  genre: 'SciFi',
  title: 'BergWars',
  image: 'https://cdn.bergflix.de/video_icons/bergwars.png',
  description:
    'Eum repellendus quasi quia libero quis est autem consequatur nisi. Harum debitis eaque quod. Iste vero molestiae doloribus est repellendus facilis. Et cum perspiciatis. Rerum doloremque sequi neque sequi possimus suscipit. Natus quasi in quaerat reprehenderit et minus.',
  buttons: [
    {
      text: 'Ansehen',
      to: '/watch/bergwars',
      icon: PlayIcon,
    },
  ],
};

export const Series = Template.bind({});
Series.args = {
  year: 2022,
  age: 16,
  episodes: 10,
  genre: 'Action',
  title: 'Captain Pineapple',
  image: 'https://cdn.bergflix.de/video_icons/captain_pineapple.png',
  description:
    'Eum repellendus quasi quia libero quis est autem consequatur nisi. Harum debitis eaque quod. Iste vero molestiae doloribus est repellendus facilis. Et cum perspiciatis. Rerum doloremque sequi neque sequi possimus suscipit. Natus quasi in quaerat reprehenderit et minus.',
  buttons: [
    {
      text: 'Ansehen',
      to: '/watch/captain_pineapple',
      icon: PlayIcon,
    },
    {
      text: 'Folgen',
      to: '/series/captain_pineapple',
      icon: ChevronDoubleRightIcon,
      color: 'clean-dark',
    },
  ],
};
