/* eslint-disable */

module.exports = {
    pluginOptions: {
        quasar: {
            theme: 'mat',
            importAll: true
        }
    },
    transpileDependencies: [
        /[\\\/]node_modules[\\\/]quasar-framework[\\\/]/
    ],
    chainWebpack: (config) => {
        const svgRule = config.module.rule('svg');

        svgRule.uses.clear();

        svgRule
            .use('svg-url-loader')
            .loader('svg-url-loader');
    },
}