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
    template: '<LogoComponent v-bind="args"/>',
});

export const Long = Template.bind({});
Long.args = { long: true };

export const Short = Template.bind({});
Short.args = { long: false };