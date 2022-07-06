import { action } from '@storybook/addon-actions';
import AvatarComponent from './Avatar.vue';
export default {
  title: '🧬 Molecules / Avatar',
  component: AvatarComponent,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg', 'xl'],
      },
    },
  },
};

const Template = (args) => ({
  components: { AvatarComponent },
  setup() {
    return { args };
  },
  template:
    '<AvatarComponent v-bind="args" @click="onClick" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave"/>',
  methods: {
    onClick: action('clicked'),
    onMouseEnter: action('mouseenter'),
    onMouseLeave: action('mouseleave'),
  },
});

export const Loaded = Template.bind({});
Loaded.args = {
  image: 'https://avatars3.githubusercontent.com/u/56909818?s=460&u=f8f8f8&v=4',
  loading: false,
  size: 'lg',
};
export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  size: 'lg',
};
export const Errored = Template.bind({});
Errored.args = {
  loading: false,
  size: "lg",
}
