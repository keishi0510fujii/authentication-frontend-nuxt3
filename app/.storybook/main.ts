const { mergeConfig } = require('vite');
const path = require('path');

module.exports = {
    stories: ['../.stories/**/*.stories.mdx', '../.stories/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-essentials'],
    framework: '@storybook/vue3',
    core: {
        builder: '@storybook/builder-vite',
    },
    viteFinal: async (config) => {
        return mergeConfig(config, {
            resolve: {
                alias: {
                    '@': path.resolve(__dirname, '/app'),
                    '~': path.resolve(__dirname, '/app'),
                },
            },
            css: {
                preprocessorOptions: {
                    scss: {
                        additionalData: `
                                @import "../assets/styles/main.scss";
                                @import "../assets/styles/_variables.scss";
                            `
                    }
                }
            }
        })
    }
}