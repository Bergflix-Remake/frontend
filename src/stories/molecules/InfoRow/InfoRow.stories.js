import Component from './InfoRow.vue';

export default {
  title: '🧬 Molecules / InfoRow',
  component: Component
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args }
  },
  template: `<Component v-bind="args" />`
});

export const InfoRow = Template.bind({});
InfoRow.args = {
  year: 2022,
  age: 16,
  episodes: 1,
  genre: "SciFi",
};
