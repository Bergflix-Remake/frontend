import LinkVue from "./NavLink.vue"
export default {
    title: '⚛️ Atoms/NavLink',
    component: LinkVue
}
const Template = (args) => ({
    components: { LinkVue },
    setup() {
        return {
            ...args
        }
    },
    template: `<LinkVue :href="href" :icon="icon">{{ text }}</LinkVue>`
})

export const NavLink = Template.bind({})
NavLink.args = {
    href: "#",
    text: "Link"
}