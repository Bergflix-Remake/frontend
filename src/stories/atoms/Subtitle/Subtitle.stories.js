import SubtitleComponent from "./Subtitle.vue";

export default {
    title: "⚛️ Atoms / Subtitle",
    component: SubtitleComponent,
}

    const Template = (args) => ({
        components: { Subtitle: SubtitleComponent },
        setup() {
            return { args };
        },
        template: '<Subtitle>{{ args.text }}</Subtitle>',
    });

    export const Subtitle = Template.bind({});
    Subtitle.args = {
        text: "Subtitle",
    };
