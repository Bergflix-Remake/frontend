import Component from './Home.vue';

export default {
  title: '📄 Pages / Watch',
  component: Component
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args }
  },
  template: `<Component v-bind="args" />`
});

export const Watch = Template.bind({});
Watch.args = { };
