import LinkVue from "./Link.vue"
import { ExternalLinkIcon } from "@heroicons/vue/solid"
export default {
    title: '⚛️ Atoms/Link',
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

export const Link = Template.bind({})
Link.args = {
    href: "#",
    text: "Link"
}

export const LinkOut = Template.bind({})
LinkOut.args = {
    href: "#",
    text: "Link Out",
    icon: ExternalLinkIcon
}
