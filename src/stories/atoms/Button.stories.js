import ButtonVue from "./Button.vue"
import { action } from "@storybook/addon-actions"
export default {
    title: '⚛️ Atoms/Button',
    component: ButtonVue,
    argTypes: { type: { options: ['solid', 'ghost', 'outline'] } },
}

const Template = (args) => ({
    components: { ButtonVue },
    setup() {
        return {
            ...args
        }
    },
    template: `<ButtonVue :color="color" :type="type" :classes="classes" @click="onClick">{{ text }}</ButtonVue>`,
    methods: {
        onClick: action('click')
    },
})

export const Primary = Template.bind({})
Primary.args = {
    text: 'Primary',
    to: '/',
    type: 'solid',
    color: "primary"
}

export const Secondary = Template.bind({})
Secondary.args = {
    text: 'Secondary',
    to: '/',
    type: 'solid',
    color: "cleandark"
}

export const Solid = Template.bind({})
Solid.args = {
    text: 'Solid',
    to: '/',
    type: 'solid',
    color: "primary"
}

export const Ghost = Template.bind({})
Ghost.args = {
    text: 'Ghost',
    to: '/',
    type: 'ghost',
    color: "primary"
}

export const Outline = Template.bind({})
Outline.args = {
    text: 'Outline',
    to: '/',
    type: 'outline',
    color: "primary"
}