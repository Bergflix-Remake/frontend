import BadgeButtonVue from './BadgeButton.vue';
import { PlayIcon } from '@heroicons/vue/outline';
import { action } from '@storybook/addon-actions';

export default {
  title: '⚛️ Atoms / Badge Button',
  component: BadgeButtonVue,
};

const Template = (args) => ({
  components: { BadgeButtonVue },
  setup() {
    return { args };
  },
  methods: {
    onClick: action('click'),
  },
  template: '<BadgeButtonVue v-bind="args" @click="onClick"/>',
});

export const BadgeButton = Template.bind({});
BadgeButton.args = {
  icon: PlayIcon,
  color: 'primary',
};
