import PosterRowComponent from './ScrollableRow.vue';
import Poster from './Poster.vue';
export default {
  title: '🧬 Molecules / Scrollable Row',
  component: PosterRowComponent,
};

const Template = (args) => ({
  components: { PosterRowComponent, Poster },
  setup() {
    return { args };
  },
  template: `
    <PosterRowComponent>
        <Poster v-for="poster in args.posters" :image="poster" />
    </PosterRowComponent>
    `,
});

export const ScrollableRow = Template.bind({});
ScrollableRow.args = {
  posters: [
    'https://api.bergflix.de/uploads/Jaeger_der_verlorenen_Handys_MINECRAFT_KURZFILM_89dac457f5.jpeg',
    'https://api.bergflix.de/uploads/Jaeger_der_verlorenen_Handys_MINECRAFT_KURZFILM_89dac457f5.jpeg',
    'https://api.bergflix.de/uploads/Jaeger_der_verlorenen_Handys_MINECRAFT_KURZFILM_89dac457f5.jpeg',
    'https://api.bergflix.de/uploads/Jaeger_der_verlorenen_Handys_MINECRAFT_KURZFILM_89dac457f5.jpeg',
    'https://api.bergflix.de/uploads/Jaeger_der_verlorenen_Handys_MINECRAFT_KURZFILM_89dac457f5.jpeg',
    'https://api.bergflix.de/uploads/Jaeger_der_verlorenen_Handys_MINECRAFT_KURZFILM_89dac457f5.jpeg',
    'https://api.bergflix.de/uploads/Jaeger_der_verlorenen_Handys_MINECRAFT_KURZFILM_89dac457f5.jpeg',
    'https://api.bergflix.de/uploads/Jaeger_der_verlorenen_Handys_MINECRAFT_KURZFILM_89dac457f5.jpeg',
    'https://api.bergflix.de/uploads/Jaeger_der_verlorenen_Handys_MINECRAFT_KURZFILM_89dac457f5.jpeg',
    'https://api.bergflix.de/uploads/Jaeger_der_verlorenen_Handys_MINECRAFT_KURZFILM_89dac457f5.jpeg',
    'https://api.bergflix.de/uploads/Jaeger_der_verlorenen_Handys_MINECRAFT_KURZFILM_89dac457f5.jpeg',
    'https://api.bergflix.de/uploads/Jaeger_der_verlorenen_Handys_MINECRAFT_KURZFILM_89dac457f5.jpeg',
    'https://api.bergflix.de/uploads/Jaeger_der_verlorenen_Handys_MINECRAFT_KURZFILM_89dac457f5.jpeg',
    'https://api.bergflix.de/uploads/Jaeger_der_verlorenen_Handys_MINECRAFT_KURZFILM_89dac457f5.jpeg',
  ],
};

// export const Wrap = Template.bind({});
// Wrap.args = {
//     wrap: true
// }
