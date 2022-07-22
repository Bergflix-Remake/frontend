import ProfileDropdownComponent from "./ProfileDropdown.vue"

export default {
    title: '🦠 Cell / Profile Dropdown',
    component: ProfileDropdownComponent,
}

const Template = (args) => ({
    components: { ProfileDropdownComponent },
    setup() {
        return { args }
    },
    template: `<ProfileDropdownComponent v-bind="args"/>`,
});

export const ProfileDropdown = Template.bind({});
ProfileDropdown.args = {
    username: 'AnnikenYT',
    loggedIn: true,
    open: true,
}