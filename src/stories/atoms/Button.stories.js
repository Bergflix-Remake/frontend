import ButtonVue from "./Button.vue"
export default {
    title: '⚛️ Atoms/Button',
    component: ButtonVue,
    argTypes: { click: { action: 'clicked' }, type: { options: ['solid', 'ghost', 'outline'] } },
}

const Template = (args) => ({
    components: { ButtonVue },
    setup() {
        return {
            ...args
        }
    },
    template: `<ButtonVue :color="color" :type="type" :classes="classes">{{ text }}</ButtonVue>`
})

export const Primary = Template.bind({})
Primary.args = {
    text: 'Primary',
    to: '/',
    type: 'solid',
    color: "#FF0230"
}

export const Secondary = Template.bind({})
Secondary.args = {
    text: 'Secondary',
    to: '/',
    type: 'solid',
    color: "#111111"
}

export const Solid = Template.bind({})
Solid.args = {
    text: 'Solid',
    to: '/',
    type: 'solid',
    color: "#FF0230"
}

export const Ghost = Template.bind({})
Ghost.args = {
    text: 'Ghost',
    to: '/',
    type: 'ghost',
    color: "#FF0230"
}

export const Outline = Template.bind({})
Outline.args = {
    text: 'Outline',
    to: '/',
    type: 'outline',
    color: "#FF0230"
}