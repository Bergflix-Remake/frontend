import LogoComponent from './Logo.vue';

export default {
  title: '⚛️ Atoms / Logo',
  component: LogoComponent,
};

const Template = (args) => ({
  components: { LogoComponent },
  setup() {
    return { args };
  },
  template: '<LogoComponent v-bind="args">{{args.text}}</LogoComponent>',
});

export const Long = Template.bind({});
Long.args = { long: true, text: '' };

export const Short = Template.bind({});
Short.args = { long: false, text: '' };

export const WithText = Template.bind({});
WithText.args = { long: true, text: 'Branding' };
