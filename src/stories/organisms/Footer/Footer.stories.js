import Component from './Footer.vue';

export default {
  title: '🧫 Organisms / Footer',
  component: Component
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args }
  },
  template: `<Component v-bind="args" />`
});

export const Footer = Template.bind({});
Footer.args = { };
