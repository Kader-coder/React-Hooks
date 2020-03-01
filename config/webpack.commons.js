const path = require('path');
const root = path.resolve(__dirname, '../');
const webpack = require('webpack');
module.exports = {
    resolve: {
        alias: {
            '@root': path.resolve(root),
            '@config': path.resolve(root, './config'),
            '@components': path.resolve(root, './components'),
        },
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.browser': 'true',
        }),
    ],
};
