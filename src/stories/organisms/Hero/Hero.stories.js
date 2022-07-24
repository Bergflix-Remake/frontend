import Component from './Hero.vue';

export default {
  title: '🧫 Organisms / Hero',
  component: Component
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args }
  },
  template: `<Component v-bind="args" />`
});

export const Hero = Template.bind({});
Hero.args = { };
