import Component from './Home.vue';

export default {
  title: '📄 Pages / Home',
  component: Component
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args }
  },
  template: `<Component v-bind="args" />`
});

export const Home = Template.bind({});
Home.args = { };
