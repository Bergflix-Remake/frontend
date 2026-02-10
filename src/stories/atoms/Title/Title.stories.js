import Component from './Title.vue';

export default {
  title: '⚛️ Atoms / Title',
  component: Component,
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: `<Component v-bind="args" />`,
});

export const Title = Template.bind({});
Title.args = {};
