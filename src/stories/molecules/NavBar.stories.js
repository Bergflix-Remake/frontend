import NavBarComponent from './NavBar.vue'
export default {
    title: '🐺 Animals / Navbar',
    component: NavBarComponent,
};

const Template = (args) => ({
    components: { NavBarComponent },
    setup() {
        return { args };
    },
    template: '<NavBarComponent v-bind="args"/>',
});

export const Navbar = Template.bind({});
