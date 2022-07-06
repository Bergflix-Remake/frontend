import SpinnerComponent from './Spinner.vue';

export default {
  title: '⚛️ Atoms / Spinner',
  component: SpinnerComponent,
  argTypes: {
    animation: {
      control: {
        type: 'select',
        options: [
          'elastic',
          'pulse',
          'flashing',
          'collision',
          'revolution',
          'carousel',
          'typing',
          'windmill',
          'bricks',
          'floating',
          'fire',
          'spin',
          'falling',
          'stretching',
        ],
      },
    },
  },
};

const Template = (args) => ({
  components: { SpinnerComponent },
  setup() {
    return { args };
  },
  template: '<SpinnerComponent v-bind="args"/>',
});

export const Default = Template.bind({});
Default.args = {
    animation: 'windmill',
}
