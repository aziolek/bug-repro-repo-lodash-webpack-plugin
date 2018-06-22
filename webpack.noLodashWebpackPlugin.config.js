const path = require('path');
const webpack = require('webpack');

const clientPath = path.resolve(__dirname, './client/');

module.exports = {
    devtool: 'eval',

    entry: `${clientPath}/src/index.js`,

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    devServer: {
        contentBase: path.join(clientPath, 'public'),
        compress: true,
        port: 8000
    },
};
