const { mergeConfig } = require('vite');
const path = require('path');
const Pages = require('vite-plugin-pages').default;

module.exports = {
  'stories': [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|ts|jsx|tsx)'
  ],
  'addons': [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss')
        }
      }
    }
  ],
  'framework': '@storybook/vue3',
  'core': {
    'builder': '@storybook/builder-vite'
  },
  'features': {
    'storyStoreV7': true
  },
  async viteFinal(config, { configType }) {
    return mergeConfig(config, {
      plugins: [
        Pages({
          resolver: 'vue',
          extensions: ['vue'],
        })
      ],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '../src'),
          '@atoms': path.resolve(__dirname, '../src/stories/atoms'),
          '@molecules': path.resolve(__dirname, '../src/stories/molecules'),
          '@organisms': path.resolve(__dirname, '../src/stories/organisms')
        }
      }
    });
  }
};
